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

        var updatesMade = 0,
            dimensionTypes = ["acquisition", "adwordsOptions", "adwordsTracking", "system", "mobile", "journey"],
            yesterdaysBookings = Bookings.find({
                    timestamp: {
                        $gt: moment().subtract(2, "days").startOf("day").toDate().getTime(),
                        $lt: moment().startOf("day").toDate().getTime()
                    }},
                {fields: fields
                }).fetch();

        yesterdaysBookings.forEach(function (booking) {
           log.debug("yesterdaysBookings.forEach." + JSON.stringify(booking));
        });

        dimensionTypes.forEach(function (dimensionType) {
            log.debug("dimensionTypes.forEach." + dimensionType);
        });

        dimensionTypes.forEach(function (dimensionType) {

            var ga = new GoogleAnalytics(),
                bookingProperty = 'googleAnalytics.' + dimensionType;

            log.debug("dimensionType." + dimensionType);

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


Meteor.methods({
    testFullContact: function () {
        log.info("testFullContact");
        mongoApi.call("testFullContact");
        log.info("testFullContact");
    },
    newSectors: function () {
        log.info("newSectors");
        mongoApi.call("newSectors");
        log.info("newSectors");
    },
    cleanNumbers: function () {
        log.info("cleanNumbers");
        mongoApi.call("cleanNumbers");
        log.info("cleanNumbers");
    },
    mergeCustomers: function () {
        log.info("mergeCustomers");
        mongoApi.call("mergeCustomers");
        log.info("mergeCustomers");
    },
    denormaliseOwner: function () {
        log.info("denormaliseOwner");
        mongoApi.call("denormaliseOwner");
        log.info("denormaliseOwner");
    },
    initialiseRepeatBookings: function () {
        log.info("initialiseRepeatBookings");
        mongoApi.call("initialiseRepeatBookings");
        log.info("initialiseRepeatBookings");
    },
    fixDirect: function () {
        log.info("fixDirect");
        mongoApi.call("fixDirect");
        log.info("fixDirect");
    },
    fixOrphans: function () {
        log.info("fixOrphans");
        mongoApi.call("fixOrphans");
        log.info("fixOrphans");
    },
    fixFinalspendtime: function () {
        log.info("fixFinalspendtime");
        mongoApi.call("fixFinalspendtime");
        log.info("fixFinalspendtime");
    },
    clearReasonLostOfWon: function () {
        log.info("clearReasonLostOfWon");
        mongoApi.call("clearReasonLostOfWon");
        log.info("clearReasonLostOfWon");
    }
});