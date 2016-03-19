SyncedCron.add({
    name: jobsConfig.updateMongoFromXero.name,
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text(jobsConfig.updateMongoFromXero.schedule);
    },
    job: function() {
        var updatesMade = Meteor.call(jobsConfig.updateMongoFromXero.method);
        return updatesMade;
    }
});

Meteor.methods({
    'updateMongoFromXero': function () {
        log.info("updateMongoFromXero.start");

        var sinceTime = moment(Utils.getTime()).subtract(5, 'minutes').format('ddd, DD MMM YYYY HH:mm:ss') + ' GMT',
            hasSomeInvoices = true;
            page = 1,
            mongoInvoiceModifiers = [];

        log.info("updateMongoFromXero.sinceTime", sinceTime);

        while (hasSomeInvoices) {

            log.info("updateMongoFromXero.hasSomeInvoices", hasSomeInvoices);

            var recentlyEditedXeroInvoices = mongoApi.call('xeroSynchCall', 'GET', `/Invoices?order=UpdatedDateUTC&page=${page}`, undefined, {'If-Modified-Since': sinceTime});

            log.info("updateMongoFromXero.recentlyEditedXeroInvoices" + JSON.stringify(recentlyEditedXeroInvoices));

            var xeroInvoices = _getXeroInvoices(recentlyEditedXeroInvoices);
            hasSomeInvoices = !!xeroInvoices;

            log.info("mongoApi.hasSomeInvoices", hasSomeInvoices);

            if (hasSomeInvoices) {

                if (!_.isArray(xeroInvoices)) {
                    xeroInvoices = [xeroInvoices];
                }

                log.info("mongoApi.xeroInvoices", xeroInvoices);

                _.each(xeroInvoices, xeroInvoice => {

                    if (xeroInvoice.LineItems && _.isArray(xeroInvoice.LineItems.LineItem)) {

                        _.each(xeroInvoice.LineItems.LineItem, xeroLineItem => {

                            log.info("mongoApi.upsertMongoFromXero", xeroInvoice, xeroLineItem);

                            mongoInvoiceModifiers.push(mongoApi.call("upsertMongoFromXero", xeroInvoice, xeroLineItem, false));

                        });

                    }
                    else if (xeroInvoice.LineItems && xeroInvoice.LineItems.LineItem) {

                        log.info("mongoApi.upsertMongoFromXero", xeroInvoice, xeroInvoice.LineItems.LineItem);

                        mongoInvoiceModifiers.push(mongoApi.call("upsertMongoFromXero", xeroInvoice, xeroInvoice.LineItems.LineItem, false));

                    }

                });

            }

            page++;

        }

        log.info("updateMongoFromXero.finish", JSON.stringify(mongoInvoiceModifiers));

        return mongoInvoiceModifiers;

    }
});

function _getXeroInvoices(recentlyEditedXeroInvoices) {
    return recentlyEditedXeroInvoices && recentlyEditedXeroInvoices.Response && recentlyEditedXeroInvoices.Response.Invoices && recentlyEditedXeroInvoices.Response.Invoices.Invoice;
}