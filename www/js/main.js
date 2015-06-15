/*global require*/
'use strict';
// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  //By default load any module IDs from js/lib
  baseUrl: 'js/lib',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    jquery: 'jquery-1.11.3.min',
    underscore: 'underscore-min',
    backbone: 'backbone-min',
    text: 'text',
    views: '../views',
    model: '../model',
    collections: '../collections',
    templates: '../templates',
    router: '../router'
  }
});
// Start the main app logic.
requirejs([
  'backbone',
  'router'
], function(Backbone, AppRouter) {
  debugger;
  var AppRouter = new AppRouter();
  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start({
    pushState: true
  });
});