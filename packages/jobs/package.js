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

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['common','collections', 'google-analytics', 'mongoapi', 'percolate:synced-cron'], 'server');
  api.addFiles('config.js','server');
  api.addFiles('scheduledjobs/update-yesterdays-bookings-with-ga-data.js','server');
  api.addFiles('scheduledjobs/update-venues-with-ga-data.js','server');
  api.addFiles('start.js','server');
});