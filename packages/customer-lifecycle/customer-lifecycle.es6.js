var DAYS_STILL_NEW = 42;
var MONTHS_UNTIL_LAPSED = 14;
var NEVER_BOOKED_UNTIL_DORMANT_MONTHS = 12;
var BOOKED_UNTIL_DORMANT_MONTHS = 24;

bookingAggregationHelpers = {
    isClosedFilter: (field) => {
        return {
            $cond: {
                if: {"$or": [{"$eq": ["$status", "won"]}, {"$eq": ["$status", "lost"]}]},
                then: field,
                else: null
            }
        }
    },
    isNewPendingFilter: (field, timestampfield, timestamp) => {
        return {
            $cond: {
                if: {"$gt": [timestampfield, timestamp]},
                then: {
                    $cond: {
                        if: {"$eq": ["$status", "pending"]},
                        then: field,
                        else: null
                    }
                },
                else: null
            }
        }
    },
    isWonFilter: (field) => {
        return {
            $cond: {
                if: {"$eq": ["$status", "won"]},
                then: field,
                else: null
            }
        }
    },
    isBeforeFilter: (field, timestampfield, timestamp) => {
        return {
            $cond: {
                if: {"$lt": [timestampfield, timestamp]},
                then: field,
                else: null
            }
        }
    },
    isBetweenFilter: (field, timestampfield, timestampMin, timestampMax) => {
        return {
            $cond: {
                if: {$and: [{"$gt": [timestampfield, timestampMin]}, {"$lt": [timestampfield, timestampMax]}]},
                then: field,
                else: null
            }
        }
    },
    isAfterFilter: (field, timestampfield, timestamp) => {
        return {
            $cond: {
                if: {"$gt": [timestampfield, timestamp]},
                then: field,
                else: null
            }
        }
    }
};

CustomerLifecycle = class CustomerLifecycle {

    constructor() {

    }

    getNewCustomerIds(now) {

        if (!now) now = new Date().getTime();
        var oldestNew = moment(parseInt(now/1000),'X').subtract(DAYS_STILL_NEW, 'days').toDate().getTime();

        var match = {timestamp: {$lt: now}, status: {$ne: 'void'}},
            result = {};

        var customerIdAggregation = Bookings.aggregate([
            {$match: match},
            {
                $project: {
                    'customerId': 1,
                    'pendingCustomerId': bookingAggregationHelpers.isNewPendingFilter("$customerId", "$timestamp", oldestNew),
                    'closedCustomerId': bookingAggregationHelpers.isClosedFilter("$customerId")
                }
            },
            {
                $group: {
                    _id: null,
                    'pendingCustomers': {'$addToSet': '$pendingCustomerId'},
                    'closedCustomers': {'$addToSet': '$closedCustomerId'}

                }
            }
        ]);

        customerIdAggregation.length && (result = customerIdAggregation[0]);

        return _.difference(result.pendingCustomers || [], result.closedCustomers || []);

    }

    getLapsedCustomerIds(now) {

        if (!now) now = new Date().getTime();
        var lapseTime = moment(parseInt(now/1000),'X').subtract(MONTHS_UNTIL_LAPSED, 'months').toDate().getTime(),
            dormantTime = moment(parseInt(now/1000),'X').subtract(BOOKED_UNTIL_DORMANT_MONTHS, 'months').toDate().getTime();

        var match = {timestamp: {$lt: now}, status: 'won'},
            result = {};

        var customerIdAggregation = Bookings.aggregate([
            {$match: match},
            {
                $project: {
                    'customerId': 1,
                    'oldWonCustomerId': bookingAggregationHelpers.isBetweenFilter("$customerId", "$timestamp", dormantTime, lapseTime),
                    'newWonCustomerId': bookingAggregationHelpers.isAfterFilter("$customerId", "$timestamp", lapseTime)
                }
            },
            {
                $group: {
                    _id: null,
                    'hasOldWonBookingCustomers': {'$addToSet': '$oldWonCustomerId'},
                    'hasNewWonBookingCustomers': {'$addToSet': '$newWonCustomerId'}

                }
            }
        ]);

        customerIdAggregation.length && (result = customerIdAggregation[0]);

        return _.difference(result.hasOldWonBookingCustomers || [], result.hasNewWonBookingCustomers || []);

    }

    getBookedDormantCustomerIds(now) {

        if (!now) now = new Date().getTime();
        var dormantTime = moment(parseInt(now/1000),'X').subtract(BOOKED_UNTIL_DORMANT_MONTHS, 'months').toDate().getTime(),
            result = {};

        var match = {timestamp: {$lt: now}, status: 'won'},
            result = {};

        var customerIdAggregation = Bookings.aggregate([
            {$match: match},
            {
                $project: {
                    'customerId': 1,
                    'oldWonCustomerId': bookingAggregationHelpers.isBeforeFilter("$customerId", "$timestamp", dormantTime),
                    'newWonCustomerId': bookingAggregationHelpers.isAfterFilter("$customerId", "$timestamp", dormantTime)
                }
            },
            {
                $group: {
                    _id: null,
                    'hasOldWonBookingCustomers': {'$addToSet': '$oldWonCustomerId'},
                    'hasNewWonBookingCustomers': {'$addToSet': '$newWonCustomerId'}

                }
            }
        ]);

        customerIdAggregation.length && (result = customerIdAggregation[0]);

        return _.difference(result.hasOldWonBookingCustomers || [], result.hasNewWonBookingCustomers || []);

    }

    getNeverBookedDormantCustomerIds(now) {

        if (!now) now = new Date().getTime(); //FIX THIS ONE
        var dormantTime = moment(parseInt(now/1000),'X').subtract(NEVER_BOOKED_UNTIL_DORMANT_MONTHS, 'months').toDate().getTime();

        var match = {timestamp: {$lt: now}, status: {$ne: 'void'}},
            result = {};

        var customerIdAggregation = Bookings.aggregate([
            {$match: match},
            {
                $project: {
                    'customerId': 1,
                    'oldDormantCustomerId': bookingAggregationHelpers.isBeforeFilter("$customerId", "$timestamp", dormantTime),
                    'newDormantCustomerId': bookingAggregationHelpers.isAfterFilter("$customerId", "$timestamp", dormantTime),
                    'hasWonCustomerId': bookingAggregationHelpers.isWonFilter("$customerId")
                }
            },
            {
                $group: {
                    _id: null,
                    'oldNoBookingCustomers': {'$addToSet': '$oldDormantCustomerId'},
                    'newNoBookingCustomers': {'$addToSet': '$newDormantCustomerId'},
                    'hasWonCustomers': {'$addToSet': '$hasWonCustomerId'}

                }
            }
        ]);

        customerIdAggregation.length && (result = customerIdAggregation[0]);

        return _.difference( _.difference(result.oldNoBookingCustomers || [], result.newNoBookingCustomers || []), result.hasWonCustomers || []);

    }

    getActiveBookedCustomerIds(now, preCalculatedNotActiveCustomerIds) {

        var self = this;

        if (!now) now = new Date().getTime();
        var match = {timestamp: {$lt: now}, status: "won"},
            result = {};

        var notActiveCustomerIdGroups = self.notActiveCustomerIdGroups(now);

        var notActiveCustomerIds = preCalculatedNotActiveCustomerIds || self.getNotActiveCustomerIdsFromGroups(notActiveCustomerIdGroups);

        var customerIdAggregation = Bookings.aggregate([
            {$match: match},
            {
                $project: {
                    'customerId': 1,
                    'hasWonCustomerId': bookingAggregationHelpers.isWonFilter("$customerId")
                }
            },
            {
                $group: {
                    _id: null,
                    'hasWonCustomers': {'$addToSet': '$hasWonCustomerId'}
                }
            }
        ]);

        customerIdAggregation.length && (result = customerIdAggregation[0]);

        return _.difference(result.hasWonCustomers, notActiveCustomerIds);

    }

    getActiveNotBookedCustomerIds(now, preCalculatedNotActiveCustomerIds) {

        var self = this;

        if (!now) now = new Date().getTime();
        var match = {timestamp: {$lt: now}, status: {$ne: 'void'}};

        var notActiveCustomerIds = preCalculatedNotActiveCustomerIds || self.getNotActiveCustomerIdsFromGroups(self.notActiveCustomerIdGroups(now));

        var customerIdAggregation = Bookings.aggregate([
            {$match: match},
            {
                $project: {
                    'customerId': 1,
                    'hasWonCustomerId': bookingAggregationHelpers.isWonFilter("$customerId")
                }
            },
            {
                $group: {
                    _id: null,
                    'hasWonCustomers': {'$addToSet': '$hasWonCustomerId'},
                    'allCustomers': {'$addToSet': '$customerId'}

                }
            }
        ]);

        customerIdAggregation.length && (result = customerIdAggregation[0]);

        return _.difference( _.difference(result.allCustomers, result.hasWonCustomers) , notActiveCustomerIds);

    }

    notActiveCustomerIdGroups(now) {

        return {
            neverBookedDormantCustomerIds: this.getNeverBookedDormantCustomerIds(now),
            bookedDormantCustomerIds: this.getBookedDormantCustomerIds(now),
            lapsedCustomerIds: this.getLapsedCustomerIds(now),
            newCustomerIds: this.getNewCustomerIds(now)
        };

    }

    getNotActiveCustomerIdsFromGroups(notActiveCustomerIdGroups) {

        return notActiveCustomerIdGroups.neverBookedDormantCustomerIds
            .concat(
            notActiveCustomerIdGroups.bookedDormantCustomerIds
        )
            .concat(
            notActiveCustomerIdGroups.lapsedCustomerIds
        )
            .concat(
            notActiveCustomerIdGroups.newCustomerIds
        );

    }

    getAllCustomerIds(now) {

        var self = this;

        self.getNotActiveCustomerIdsFromGroups(self.notActiveCustomerIdGroups(now));

        var result = self.notActiveCustomerIdGroups(now);

        var notActiveCustomerIds = self.getNotActiveCustomerIdsFromGroups(result);

        result.activeBookedCustomerIds = self.getActiveBookedCustomerIds(now, notActiveCustomerIds);

        result.activeNotBookedCustomerIds = self.getActiveNotBookedCustomerIds(now, notActiveCustomerIds);

        return result;

    }

};