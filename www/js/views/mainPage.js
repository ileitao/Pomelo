/*global define*/
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/mainPage.html'
], function($, _, Backbone, mainPage) {
  'use strict';

  // Our overall **MainPageView** is the top-level piece of UI.
  var MainPageView = Backbone.View.extend({
    // attaches `this.el` to an existing element.
    el: $('.main-page-container'),
    // Compile our stats template
    template: _.template(mainPage),
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

  return MainPageView;

});