/*

---
title: Utility Toggle
name: utility-toggle
category: Javascript
---

 */
define(['jquery', 'app/toggle', 'app/utils'], function ($, TOGGLE, UTILS) {

  var UTILITYTOGGLE = function (options) {

    if (!options.container) return false;

    var $window = $(window);
    // Get width of window
    var container = options.container;
    var buttons = container.find('.js-utility-toggle');

    buttons.each(function(i, button) {

      var $button = $(button);
      var $parent = $($button.attr('href'));
      var $subnav = $parent.find('.c-utility-nav__subnav');
      var toggleClassName = 'is-open';

      // Check to see if it should be left-, right- or block-aligned
      var updateSubnavPosition = function() {
        var windowWidth = $window.width();
        var pfx = 'c-utility-nav__subnav--';
        // Get width of subnav
        $subnav.addClass('is-ghost');
        $subnav.removeClass(pfx+'right '+pfx+'block '+pfx+'left');
        $parent.removeClass('c-utility-nav__item--block-parent')
        var subnavWidth = $subnav.outerWidth();
        $subnav.removeClass('is-ghost');
        // Get width position of sublink
        var buttonWidth = $button.outerWidth();
        var buttonHeight = $button.outerHeight()-1; // make sure it's flush with the bottom of the button
        var buttonLeft = $button.offset().left;

        if (buttonLeft + subnavWidth < windowWidth) {
          $subnav.removeClass(pfx+'right '+pfx+'block').addClass(pfx+'left').css('top', '');
          $parent.removeClass('c-utility-nav__item--block-parent')
        } else if (buttonLeft + buttonWidth > subnavWidth) {
          $subnav.removeClass(pfx+'left '+pfx+'block').addClass(pfx+'right').css('top', '');
          $parent.removeClass('c-utility-nav__item--block-parent')
        } else {
          $subnav.removeClass(pfx+'left '+pfx+' right').addClass(pfx+'block').css('top', buttonHeight);
          $parent.addClass('c-utility-nav__item--block-parent')
        }

      };

      $window.on('resize', UTILS.debounce(function() {
        updateSubnavPosition();
      }, 250));

      var t = new TOGGLE({
        container: $parent,
        button: $button,
        className: toggleClassName
      });

      // Close other toggles
      $button.on('click', function() {
        var otherButtons = buttons.not($button);
        otherButtons.each(function(i, v) {
          var otherContainer = $($(v).attr('href'));
          otherContainer.removeClass(toggleClassName);
        });
        $window.off('click.toggle');
        // Clicking outside window closes open toggle
        if ($parent.hasClass(toggleClassName)) {
          $window.on('click.toggle', function(e) {
            var utilityNavParent = $(e.target).closest('.c-utility-nav__subnav');
            if (utilityNavParent.length === 0) {
              t.toggle(false);
            }
          });
        }
      });

    });

    console.info(this);

    return true;

  };

  return UTILITYTOGGLE;

});
