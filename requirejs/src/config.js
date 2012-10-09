require.config({
  paths: {
    underscore: '/lib/underscore',
    backbone: '/lib/backbone',
    jquery: '/lib/jquery'
  },
  shim: {
    underscore: { exports: '_' },
    backbone:   { exports: 'Backbone', deps: ['underscore', 'jquery'] }
  }
});