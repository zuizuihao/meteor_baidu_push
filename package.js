Package.describe({
  name: 'zuizuihao:baidu-push',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Wrap baidu nodejs to meteor package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zuizuihao/meteor_baidu_push',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

// Server-side push deps
Npm.depends({
    'baidu-push-wrapper': '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('baidu.push.api.js', ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.addFiles('baidu.push.api.js', ['server']);
  api.addFiles('baidu-push-tests.js', ['server']);
});
