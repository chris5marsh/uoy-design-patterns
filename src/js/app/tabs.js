/*

---
title: Tabs Module
name: tabs-module
category: Javascript
---

 */
define(['jquery'], function ($) {

  // Define your 'class'
  // Better to pass an options object instead of multiple arguments
  var TABS = function(options) {

    // Get the options or their defaults
    if (!options.container) return false;
    this.container = $(options.container);
    var tabTabs = this.container.find('.c-tabs__tab');
    var tabLinks = this.container.find('.c-tabs__link');
    var tabContainer = this.container.find('.c-tabs__container');
    var tabContent = this.container.find('.c-tabs__content');

    // Make vertical container at least as high as nav
    console.log(this.container.hasClass('c-tabs--vertical'));
    if (this.container.hasClass('c-tabs--vertical')) {
      var navHeight = tabTabs.parent().height()+'px';
      tabContainer.css('min-height', navHeight);
    }

    tabLinks.on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $thisTab = $this.parent();
      var thisHref = $this.attr('href');
      var $thisContainer = $(thisHref);

      if ($thisTab.hasClass('is-active')) return false;

      // Make current tab active
      tabTabs.not($thisTab).removeClass('is-active');
      $thisTab.addClass('is-active');
      // Make tab content visible
      tabContent.not($thisContainer).removeClass('is-active');
      $thisContainer.addClass('is-active');
      // Update the hash
      if (Modernizr.hashchange === true) {
        history.replaceState({}, "", thisHref);
      } else {
        // Provide a fallback
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;
        location.hash = thisHref;
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
      }

    });

    return true;

  };

  return TABS;

});