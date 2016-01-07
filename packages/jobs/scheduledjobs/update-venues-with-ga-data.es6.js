SyncedCron.add({
    name: 'Update all the venues with traffic data from the last 90 days',
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text('at 2:30 am');
    },
    job: function() {
        var updatesMade = Meteor.call('updateVenuesWithGaData');
        return updatesMade;
    }
});

Meteor.methods({
    'updateVenuesWithGaData': function () {
        log.info("updateVenuesWithGaData.start");

        var ga = new GoogleAnalytics(),
            usageVenueMap = new Map(),
            updatesMade = 0;

        Usages.find({venueid: {$gt: 0}, usageid: {$gt: 0}}, {fields: {venueid: 1, usageid: 1}}).forEach(function (usage) {
            usageVenueMap.set(usage.usageid, usage.venueid);
        });

        log.debug("usageVenueMap.size", usageVenueMap.size);

        ga.usageVenueMap = usageVenueMap;

        log.debug("ga.getPageViewData.isFunction", _.isFunction(ga.getPageViewData));

        ga.getPageViewData(90);

        ga.pageViewData.forEach(function (gaData, venueId) {
            log.info("Bookings.updateVenuesWithGaData.update." + venueId, gaData);
            updatesMade += mongoApi.call("updateVenues",{VenueId: venueId}, {$set: gaData}, {});
        });

        log.info("updateVenuesWithGaData.finish");

        return updatesMade;
    }
});