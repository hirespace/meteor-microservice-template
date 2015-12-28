Package.onUse(function (api) {

  api.use(['meteor-platform'], 'server');

  api.addFiles(['ddp-bookings-service.js'], 'server');

  api.export('BookingsService', 'server');
});
