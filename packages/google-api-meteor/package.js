Package.describe({
  name: 'google-api-meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A package to allow the  use of Google Apis in meteor, using Oauth for users and service accounts for server requests.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "googleapis": "2.1.7",
  "google-auth-library": "0.9.7"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['meteor-base', 'accounts-base', 'http', 'grigio:babel@0.1.2', 'logger'], 'server');
  api.addFiles('google-api-meteor.es6.js', 'server');
  api.export('GoogleApiAuth', 'server');
});

Package.onTest(function(api) {
  api.use(['common', 'test-common'], 'server');
  api.addFiles(['google-api-meteor.es6.js', 'google-api-meteor-tests.es6.js'], 'server');
});