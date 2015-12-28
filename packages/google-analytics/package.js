Package.describe({
  name: 'google-analytics',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null..
  documentation: 'README.md'
});

Npm.depends({
  "googleapis": "2.1.7",
  "google-auth-library": "0.9.7"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('common', 'server');
  api.use('google-api-meteor', 'server');

  api.addAssets('private/service-account-email.txt', 'server');
  api.addAssets('private/service-account-private-key.txt', 'server');

  api.addFiles(['classes/google-analytics-config.es6.js', 'classes/google-analytics.es6.js'], 'server');

  api.export('GoogleAnalytics', 'server');
});

Package.onTest(function(api) {
  api.use(['common', 'test-common'], 'server');

  api.addFiles(['tests/google-analytics-test-config.es6.js', 'classes/google-analytics.es6.js', 'tests/unit/google-analytics-tests.es6.js'], 'server');

});