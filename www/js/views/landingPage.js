/*global define*/
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/landingPage.html'
], function($, _, Backbone, landingPage) {
  'use strict';
  // Our overall **LandingPageView** is the top-level piece of UI.
  var LandingPageView = Backbone.View.extend({
    // attaches `this.el` to an existing element.
    el: $('body'),
    // Compile our stats template
    template: _.template(landingPage),
    // Delegated events for creating new items, and clearing completed ones.
    events: {},

    initialize: function() {
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
      this.render(); // not all views are self-rendering. This one is.
    },

    render: function() {
      $(this.el).append(this.template);
    },

    close: function() {
      this.remove();
    }

  });

  return LandingPageView;

});