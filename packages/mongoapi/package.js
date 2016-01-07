Package.describe({
  name: 'mongoapi',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A package to communicate with mongoapi',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ddp', 'logger', 'ecmascript', 'erasaur:meteor-lodash@3.10.0'], 'server'); // Later we may need to use it in client as well
  api.addFiles('mongoapi.js', 'server');
  api.export('mongoApi', 'server');
});
