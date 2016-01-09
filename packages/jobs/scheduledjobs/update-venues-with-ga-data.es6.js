SyncedCron.add({
    name: jobsConfig.updateVenuesWithGAData.name,
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text(jobsConfig.updateVenuesWithGAData.schedule);
    },
    job: function() {
        var updatesMade = Meteor.call(jobsConfig.updateVenuesWithGAData.method);
        return updatesMade;
    }
});

Meteor.methods({
    'updateVenuesWithGAData': function () {
        log.info("updateVenuesWithGAData.start");

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

        //Clear old GA Page View Data
        VenueData.update({}, {$set: {upv: 0, pv: 0, top: 0}}, {multi: true});

        ga.pageViewData.forEach(function (gaData, venueId) {
            log.info("Bookings.updateVenuesWithGAData.update." + venueId, gaData);
            updatesMade += mongoApi.call("updateVenues",{VenueId: venueId}, {$set: gaData}, {});
        });

        log.info("updateVenuesWithGAData.finish");

        return updatesMade;
    }
});