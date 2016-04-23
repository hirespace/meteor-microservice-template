Package.describe({
    name: 'jobs',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'All the jobs run on our mongo database',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

var config = {
    use: [
        'common',
        'collections',
        'google-analytics',
        'mongoapi',
        'customer-lifecycle',
        'percolate:synced-cron'
    ],
    files: [
        'config.es6.js',
        'scheduledjobs/updateYesterdaysBookingsWithGaData.es6.js',
        'scheduledjobs/updateVenuesWithGaData.es6.js',
        'scheduledjobs/updateCustomerLifetimeStage.es6.js',
        'scheduledjobs/createPartnerInvoices.es6.js',
        'scheduledjobs/updateMongoFromXero.es6.js',
        'start.js'

    ],
    tests: [
        'tests/stubs/recentlyEditedXeroInvoicesResult.js',
        'tests/unit/update-mongo-from-xero.es6.js'
    ]
};

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use(config.use, 'server');
    api.addFiles(config.files, 'server');
    api.use('common', 'client');
    api.addFiles('hello.js', 'client');
});

Package.onTest(function (api) {

    api.versionsFrom('1.2.1');
    api.use(config.use, 'server');
    api.use('test-common', 'server');

    api.addFiles(config.files, 'server');

    api.addFiles(config.tests, 'server');

});