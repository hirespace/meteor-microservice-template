var defaults = {
    liveUrl: 'https://bookings.hirespace.com/',
    stagingUrl: 'https://bookingstest.hirespace.com/',
    developmentUrl: 'http://localhost:3000/'
};

if (process.env.TEST_ENV !== 'TEST') {
    BookingsService = DDP.connect(_getBookingsUrl(process.env.NODE_ENV));
} else {
    BookingsService = {
        call: function () {
            throw new Meteor.Error('BookingsService.call is mocked');
        }
    }
}

function _getBookingsUrl(env) {

    switch (env) {
        case 'production':
            return defaults.liveUrl;
        case 'development':
            return defaults.developmentUrl;
        default:
            return defaults.stagingUrl;
    }
}