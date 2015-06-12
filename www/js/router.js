define([
  'jquery',
  'underscore',
  'backbone',
  'views/landingPage',
  'views/mainPage'
], function($, _, Backbone, LandingPageView, MainPageView) {
  'use strict';

  var AppRouter = Backbone.Router.extend({

    routes: {
      // general landing page
      '': 'goToLandingPage',
      // routes inside app
      'www/main': 'goToMainPage'
    },

    goToLandingPage: function() {
      debugger;
      this.loadView(new LandingPageView());
    },

    goToMainPage: function() {
      this.loadView(new MainPageView());
    },

    loadView: function(view) {
      this.view && this.view.close();
      this.view = view;
    }

  });

  return AppRouter;

});
