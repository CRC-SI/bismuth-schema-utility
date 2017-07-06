Package.describe({
  name: 'crc4si:bismuth-schema-utility',
  summary: 'Utilities for schemas and collections in Bismuth.',
  git: 'https://github.com/crc-si/bismuth-schema-utility.git',
  version: '0.3.0'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'check',
    'coffeescript',
    'underscore',
    'aldeed:simple-schema@1.1.0',
    'aramk:requirejs@2.1.15_1',
    'urbanetic:utility@1.2.0'
  ], ['client', 'server']);
  api.use([
    'crc4si:atlas@0.8.2'
  ], ['client', 'server'], {weak: true});
  api.addFiles([
    'src/ParamUtils.coffee',
    'src/SchemaUtils.coffee'
  ], ['client', 'server']);
  api.export([
    'ParamUtils',
    'SchemaUtils'
  ], ['client', 'server']);
});
