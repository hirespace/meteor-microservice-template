Package.onUse(function(api) {

  api.versionsFrom('1.2.1');
  api.use(['common', 'collections'], 'server');

  api.addFiles('customer-lifecycle.es6.js', 'server');

  api.export('CustomerLifecycle', 'server');

});

Package.onTest(function(api) {

  api.use(['common', 'collections', 'test-common', 'test-db'], 'server');
  api.addFiles('customer-lifecycle.es6.js', 'server');

  api.addFiles('tests/customer-lifecycle-unit.es6.js', 'server');
  api.addFiles('tests/customer-lifecycle-end-to-end.es6.js', 'server');

});
