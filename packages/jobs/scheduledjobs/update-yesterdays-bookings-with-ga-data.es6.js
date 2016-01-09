SyncedCron.add({
    name: jobsConfig.updateYesterdaysBookingsWithGAData.name,
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text(jobsConfig.updateYesterdaysBookingsWithGAData.schedule);
    },
    job: function() {
        var updatesMade = Meteor.call(jobsConfig.updateYesterdaysBookingsWithGAData.method);
        return updatesMade;
    }
});

Meteor.methods({
    'updateYesterdaysBookingsWithGAData': function () {
        log.info("updateYesterdaysBookingsWithGAData.start");

        var fields = {
            _id: 1,
            source: 1,
            'googleAnalytics.userCookieIdentifier': 1
        };

        log.debug(fields);

        var ga = new GoogleAnalytics(),
            updatesMade = 0,
            dimensionTypes = ["acquisition", "adwordsOptions", "adwordsTracking", "system", "mobile", "journey"],
            yesterdaysBookings = Bookings.find({
                    timestamp: {
                        $gt: moment().subtract(1, "days").startOf("day").toDate().getTime(),
                        $lt: moment().startOf("day").toDate().getTime()
                    }},
                {fields: fields
                }).fetch();

        yesterdaysBookings.forEach(function (booking) {
           log.debug(booking);
        });

        dimensionTypes.forEach(function (dimensionType) {

            var bookingProperty = 'googleAnalytics.' + dimensionType;

            yesterdaysBookings.forEach(function (booking) {
                ga.addYesterdaysBooking(booking, dimensionType);
            });

            ga.bookingData.forEach(function (gaData, bookingId) {
                log.info("Bookings.updateYesterdaysBookingsWithGAData.update", {bookingId: bookingId, dimensionType: dimensionType, gaData: gaData});
                var setter = {};
                setter[bookingProperty] = gaData;
                updatesMade += mongoApi.call("updateBookings",{_id: bookingId}, {$set: setter}, {});
            });

            ga.clearBookingData();

        });

        log.info("updateYesterdaysBookingsWithGAData.finish");

        return updatesMade;
    }
});