var Future = Npm.require('fibers/future');

var defaults = {
    liveUrl: 'https://mongoapi.hirespace.com/',
    stagingUrl: 'https://stagingmongoapi.hirespace.com/',
    developmentUrl: 'http://localhost:3030/'
};

function MongoApi(options) {
    this.options = lodash.extend({}, defaults, options);

    var env = process.env.NODE_ENV;

    switch (env) {
        case 'production':
            this.options.mongoApiUrl = this.options.liveUrl;
            log.info('MongoApi.production', {remote: this.options.mongoApiUrl});
            break;
        case 'development':
            this.options.mongoApiUrl = this.options.developmentUrl;
            log.info('MongoApi.development', {remote: this.options.mongoApiUrl});
            break;
        default:
            this.options.mongoApiUrl = this.options.stagingUrl;
            log.info('MongoApi.staging', {remote: this.options.mongoApiUrl});
            break;
    }

    return DDP.connect(this.options.mongoApiUrl);
}

mongoApi = new MongoApi();