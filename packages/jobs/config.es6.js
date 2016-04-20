jobsConfig = {
    updateVenuesWithGAData: {
        method: 'updateVenuesWithGAData',
        params: [],
        name: 'Update all the venues with traffic data from the last 90 days',
        schedule: 'at 2:30am'
    },
    updateYesterdaysBookingsWithGAData: {
        method: 'updateYesterdaysBookingsWithGAData',
        params: [],
        name: 'Update yesterdays bookings with GA data',
        schedule: 'at 5:10am'
    },
    updateCustomerLifetimeStage: {
        method: 'updateCustomerLifetimeStage',
        params: [],
        name: 'Update all customers with a new lifetime stage',
        schedule: 'at 4:10am'
    },
    updateMongoFromXero: {
        method: 'updateMongoFromXero',
        params: [],
        name: 'Update the booking system when xero is edited',
        schedule: `every ${Configuration.xero.intervalMinutes} mins after 8:00am before 7:00pm every weekday`
    },
    createPartnerInvoices: {
        method: 'createPartnerInvoices',
        params: [],
        name: 'Create partner invoices on the first of each month',
        schedule: 'on the last day of the month at 4:10am'
    }
};


//SyncedCron.config({
//    //Don't use SyncedCron's logger
//    log: false,
//
//    logger: null,
//
//    // Name of collection to use for synchronisation and logging
//    collectionName: 'cronHistory',
//
//    utc: true,
//
//    /*
//     TTL in seconds for history records in collection to expire
//     NOTE: Unset to remove expiry but ensure you remove the index from
//     mongo by hand
//
//     ALSO: SyncedCron can't use the `_ensureIndex` command to modify
//     the TTL index. The best way to modify the default value of
//     `collectionTTL` is to remove the index by hand (in the mongo shell
//     run `db.cronHistory.dropIndex({startedAt: 1})`) and re-run your
//     project. SyncedCron will recreate the index with the updated TTL.
//     */
//    collectionTTL: 172800
//});