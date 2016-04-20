Meteor.methods({
    'aggregateBookinglinesForVenueStats': function () {
        log.info("aggregateBookinglinesForVenueStats.start");

        // Find all BookingLines
        // Take the interesting data (or map it to numeric flag)
        // Group by venueId, summing values
        let aggBLStats = BookingLines.aggregate([
            {$match: {}},
            {$project: {
                venueId: 1,
                price  : 1,
                all    : {$cond: {if: {$ne: ["$status", "void"   ]}, then: 1, else: 0}},
                won    : {$cond: {if: {$eq: ["$status", "won"    ]}, then: 1, else: 0}},
                pending: {$cond: {if: {$eq: ["$status", "pending"]}, then: 1, else: 0}},
                lost   : {$cond: {if: {$eq: ["$status", "lost"   ]}, then: 1, else: 0}},
                void   : {$cond: {if: {$eq: ["$status", "void"   ]}, then: 1, else: 0}},
                sug    : {$cond: {if: {$and: [{$ne: ["$status", "void"]}, {$eq: ["$situation", "Sug"]}]}, then: 1, else: 0}},
                con    : {$cond: {if: {$and: [{$ne: ["$status", "void"]}, {$eq: ["$situation", "Con"]}]}, then: 1, else: 0}},
                int    : {$cond: {if: {$and: [{$ne: ["$status", "void"]}, {$eq: ["$situation", "Int"]}]}, then: 1, else: 0}},
                vie    : {$cond: {if: {$and: [{$ne: ["$status", "void"]}, {$eq: ["$situation", "Vie"]}]}, then: 1, else: 0}},
                don    : {$cond: {if: {$and: [{$ne: ["$status", "void"]}, {$eq: ["$situation", "Don"]}]}, then: 1, else: 0}}
            }},
            {$group: {
                _id      : "$venueId",
                all      : {$sum: "$all"},
                won      : {$sum: "$won"},
                pending  : {$sum: "$pending"},
                lost     : {$sum: "$lost"},
                void     : {$sum: "$void"},
                sug      : {$sum: "$sug"},
                con      : {$sum: "$con"},
                int      : {$sum: "$int"},
                vie      : {$sum: "$vie"},
                don      : {$sum: "$don"},
                gongValue: {$sum: {$multiply: ["$price", "$won"]}}
            }}
        ]);

        let foundCount = 0,
            foundVenues = [],
            otherCount = 0;
        foundVenues.length = aggBLStats.length; // rather than inc length multiple times with each set

        // Update VenueData with aggregated statistics for found venues
        aggBLStats.forEach((stats, i) => {
            foundVenues[i] = stats._id;
            foundCount += VenueData.direct.update(
                {VenueId: stats._id},
                {
                    $set: {
                        'stats.all'      : stats.all,
                        'stats.won'      : stats.won,
                        'stats.pending'  : stats.pending,
                        'stats.lost'     : stats.lost,
                        'stats.void'     : stats.void,
                        'stats.sug'      : stats.sug,
                        'stats.con'      : stats.con,
                        'stats.int'      : stats.int,
                        'stats.vie'      : stats.vie,
                        'stats.don'      : stats.don,
                        'stats.gongValue': stats.gongValue
                    }
                }
            );
        });

        // Zero stats for other venues
        otherCount += VenueData.direct.update(
            {VenueId: {$nin: foundVenues}},
            {
                $set: {
                    'stats.all'      : 0,
                    'stats.won'      : 0,
                    'stats.pending'  : 0,
                    'stats.lost'     : 0,
                    'stats.void'     : 0,
                    'stats.sug'      : 0,
                    'stats.con'      : 0,
                    'stats.int'      : 0,
                    'stats.vie'      : 0,
                    'stats.don'      : 0,
                    'stats.gongValue': 0
                }
            },
            {multi: true}
        );

        // return {filled: foundCount, cleaned: otherCount};

        return foundCount;
    }
});