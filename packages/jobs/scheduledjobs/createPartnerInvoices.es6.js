SyncedCron.add({
    name: jobsConfig.createPartnerInvoices.name,
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text(jobsConfig.createPartnerInvoices.schedule);
    },
    job: function() {
        var updatesMade = Meteor.call(jobsConfig.createPartnerInvoices.method);
        return updatesMade;
    }
});

Meteor.methods({
    'createPartnerInvoices': function () {
        log.info("createPartnerInvoices.start");

        //create an invoices for all the partner venues.

        var newPartnerInvoices = [];

        VenueData.find({partner: true}, {fields: {VenueId: 1}}).forEach(venue => {

            newPartnerInvoices.push(mongoApi.call("createPartnerInvoice", venue.VenueId));

        });

        log.info("createPartnerInvoices.finish", JSON.strinigfy(newPartnerInvoices));

        return newPartnerInvoices;

    }
});