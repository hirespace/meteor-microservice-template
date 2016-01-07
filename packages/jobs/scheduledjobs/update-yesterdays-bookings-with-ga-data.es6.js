SyncedCron.add({
    name: 'Update yesterdays bookings with GA data',
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text('at 5:10 am');
    },
    job: function() {
        var updatesMade = Meteor.call('updateYesterdaysBookingsWithGAData');
        return updatesMade;
    }
});

Meteor.methods({
    'updateYesterdaysBookingsWithGAData': function () {
        log.info("updateYesterdaysBookingsWithGAData.start");
        var ga = new GoogleAnalytics(),
            updatesMade = 0,
            dimensionTypes = ["acquisition", "adwordsOptions", "adwordsTracking", "system", "mobile", "journey"],
            yesterdaysBookings = Bookings.find({
                    timestamp: {
                        $gt: moment().subtract(1, "days").startOf("day").toDate().getTime(),
                        $lt: moment().startOf("day").toDate().getTime()
                    }},
                {fields: {
                    _id: 1,
                    source: 1,
                    clientId: 1
                }
                }).fetch();

        dimensionTypes.forEach(function (dimensionType) {

            var bookingProperty = 'googleAnalytics.' + dimensionType;

            yesterdaysBookings.forEach(function (booking) {
                ga.addYesterdaysBooking(booking, dimensionType);
            });

            ga.bookingData.forEach(function (gaData, bookingId) {
                log.info("Bookings.updateYesterdaysBookingsWithGAData.update." + dimensionType, gaData);
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