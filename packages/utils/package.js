Package.onUse(function (api) {

    api.use(['meteor-platform']);

    api.addFiles(['utils.js'], 'server');

    api.export('Utils');
});
