define([
  'jquery',
  'underscore',
  'backbone',
  'views/landingPage',
  'views/mainPage'
], function($, _, Backbone, LandingPageView, MainPageView) {
  'use strict';
  debugger;
  var AppRouter = Backbone.Router.extend({

    routes: {
      // general landing page
      '': 'goToLandingPage',
      // routes inside app
      'main': 'goToMainPage'
    },

    goToLandingPage: function() {
      debugger;
      this.loadView(new LandingPageView());
    },

    goToMainPage: function() {
      debugger;
      this.loadView(new MainPageView());
    },

    loadView: function(view) {
      debugger;
      this.view && this.view.close();
      this.view = view;
    }

  });

  return AppRouter;

});
