Package.onUse(function (api) {

  api.use([
    'common',
    'http'
  ]);

  api.addFiles(['fullContact.js'], 'server');

  api.export('FullContact', 'server');
});
