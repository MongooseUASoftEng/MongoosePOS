Package.describe({
  name: 'ijsnow:enum-manager',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Package for managing enums',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');

  api.addFiles('enum-object.js');
  api.addFiles('enum-manager.js');

  api.export("EnumManager");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ijsnow:enum-manager');

  api.addFiles('enum-object-tests.js');
  api.addFiles('enum-manager-tests.js');

  api.export("EnumObject");
  api.export("EnumManager");
});
