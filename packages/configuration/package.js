Package.onUse(function (api) {

  api.use(['meteor-platform'], 'server');

  api.addFiles(['configuration.js'], 'server');

  api.export('Configuration', 'server');
});