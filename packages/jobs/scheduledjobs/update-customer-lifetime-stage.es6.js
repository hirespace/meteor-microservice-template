const CHUNK_LENGTH = 100;
const WAIT_BETWEEN_CALLS = 2000;

SyncedCron.add({
    name: jobsConfig.updateCustomerLifetimeStage.name,
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text(jobsConfig.updateCustomerLifetimeStage.schedule);
    },
    job: function() {
        var updatesMade = Meteor.call(jobsConfig.updateCustomerLifetimeStage.method);
        return updatesMade;
    }
});

Meteor.methods({
    'updateCustomerLifetimeStage': function () {
        log.info("updateCustomerLifetimeStage.start");

        var now = new Date().getTime();

        var allCustomerIds = new CustomerLifecycle().getAllCustomerIds(now);

        log.info("updateCustomerLifetimeStage.neverBookedDormantCustomerIds", allCustomerIds.neverBookedDormantCustomerIds.length);
        updateCustomersThrottled(allCustomerIds.neverBookedDormantCustomerIds, 'dormant');

        log.info("updateCustomerLifetimeStage.bookedDormantCustomerIds", allCustomerIds.bookedDormantCustomerIds.length);
        updateCustomersThrottled(allCustomerIds.bookedDormantCustomerIds, 'dormant');

        log.info("updateCustomerLifetimeStage.lapsedCustomerIds", allCustomerIds.lapsedCustomerIds.length);
        updateCustomersThrottled(allCustomerIds.lapsedCustomerIds, 'lapsed');

        log.info("updateCustomerLifetimeStage.newCustomerIds", allCustomerIds.newCustomerIds.length);
        updateCustomersThrottled(allCustomerIds.newCustomerIds, 'new');

        log.info("updateCustomerLifetimeStage.activeBookedCustomerIds", allCustomerIds.activeBookedCustomerIds.length);
        updateCustomersThrottled(allCustomerIds.activeBookedCustomerIds, 'activeBooked');

        log.info("updateCustomerLifetimeStage.activeNotBookedCustomerIds", allCustomerIds.activeNotBookedCustomerIds.length);
        updateCustomersThrottled(allCustomerIds.activeNotBookedCustomerIds, 'activeNotBooked');

        log.info("updateCustomerLifetimeStage.finish");

        return allCustomerIds.activeBookedCustomerIds;

    }
});

function updateCustomersThrottled (customerIds, lifeCycleStage) {

    log.info('updateCustomersThrottled.' + lifeCycleStage + '.start');

    var wait = 0;

    while (customerIds.length > CHUNK_LENGTH) {

        let thisCustomerIdBatch = customerIds.slice(0, CHUNK_LENGTH - 1);
        customerIds = customerIds.slice(CHUNK_LENGTH, customerIds.length);
        wait += WAIT_BETWEEN_CALLS;

        Meteor.setTimeout(function () {
            Customers.direct.update({customerId: {$in: thisCustomerIdBatch}}, {$set: {lifeCycleStage: lifeCycleStage}}, {multi: true});
        }, wait);

    }

    log.info('updateCustomersThrottled.' + lifeCycleStage + '.finished');


}