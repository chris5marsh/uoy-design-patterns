/*

---
title: Searchables Module
name: searchablse-module
category: Javascript
---

 */

define(['jquery', 'app/utils'], function ($, UTILS) {

  var SEARCHABLE = function (options) {
    if (!options.container) return false;
    this.container = options.container;
    this.header = options.header || this.Defaults.header;
    this.label = options.label || this.Defaults.label;
    this.cols = options.cols || this.Defaults.cols;
    this.type = this.container.prop('nodeName').toLowerCase();
    this.analyticsAction = options.analyticsAction || false;

    this.caseSensitive = options.caseSensitive || this.Defaults.caseSensitive;
    if (!this.container.attr('id')) {
      var id = setTimeout(null, 0);
      this.container.attr('id', 'searchable-'+this.type+'-'+id);
    }
    this.id = this.container.attr('id');
    this.container.attr('aria-live', 'polite'); // adds aria-live="polite" to the container

    var rows = this.type === 'table' ? this.container.children('tbody').children('tr') : this.container.children('li');

    // Load searchable items into memory
    this.searchRows = rows;

    if (this.type === 'table') {
      if (this.header === true) {
        this.searchRows = rows.not('tr:first-of-type');
      } else if (typeof this.header === 'string') {
        this.searchRows = rows.not(this.header);
      }
    }

    // Create search form
    var form = this.createForm();
    // Add above container
    this.container.before(form);
    // Fire event (for e.g. resizing accordion)
    $(window).trigger('content.updated', ['searchable', this]);

    console.info(this);

  };

  SEARCHABLE.prototype.Defaults = {
    header: false,
    cols: false,
    caseSensitive: false,
    label: 'Search'
  };

  SEARCHABLE.prototype.createForm = function () {
    var f = $('<form>').attr({
      'action': '#'+this.id,
      'method': 'get'
    }).addClass('c-form c-form--faint').on('submit', function(e) {
      e.preventDefault();
    });
    var fs = $('<fieldset>');
    var fe = $('<div>').addClass('c-form__element');
    var inputName = this.id+'-input';
    var fl = $('<label>').addClass('c-form__label')
                         .attr('for', inputName)
                         .text(this.label);
    var fi = $('<input>').addClass('c-form__input c-form__input--text')
                         .attr({'type': 'text', 'id': inputName, 'name': inputName })
                         .on('keyup', { that: this }, this.checkTable);

    // Add a (hidden/dummy) submit button
    var submit = $('<button>').addClass('is-hidden')
                              .attr({'type': 'submit'})
                              .on('click', { that: this }, function(e){e.preventDefault();} );

    // Join it all together
    fe.append(fl, fi);
    fs.append(fe);
    fs.append(submit);
    f.append(fs);
    this.searchInput = fi;

    return f;

  };

  SEARCHABLE.prototype.checkTable = function (e) {
    var that = e.data.that;
    var inputContent = that.searchInput.val();
    if (that.caseSensitive !== true) inputContent = inputContent.toLowerCase();

    var testText = function($cell) {
      if (inputContent === '') return false;
    
      // Make a clone of the cell to exclude any hidden bits
      var $cell_clone = $cell.clone();
      $cell_clone.find( '.not-searchable' ).remove();
      
      var text = $cell_clone.text();
      if (that.caseSensitive !== true) text = text.toLowerCase();
      var searchIndex = text.indexOf(inputContent);
      return searchIndex === -1;
    };

    that.searchRows.each(function(i, row) {
      var hideIt = true;
      var $row = $(row);
      var $text;
      if (that.type === 'table') {
        $row.children().each(function(j, cell) {
          if (hideIt === false) return;
          if (that.cols !== false) {
            // colNo needs to be a string
            var colNo = (j+1)+'';
            // Only include cells that match column numbers in include...
            if (that.cols.include && $.inArray(colNo, that.cols.include) === -1) {
              return;
            }
            // ...or don't match column numbers in exclude
            if (that.cols.exclude && $.inArray(colNo, that.cols.exclude) > -1) {
              return;
            }
          }
          var $cell = $(cell);
          hideIt = testText($cell);
        });
      } else {
        hideIt = testText($row);
      }
      $row.toggleClass('is-hidden', hideIt);
    });
    that.container.trigger('search.updated');

    // Push searchables event to GA
    if( that.analyticsAction !== false && inputContent ){
      that.sendAnalyticsEvent( that.analyticsAction , inputContent );
    }

  };

  SEARCHABLE.prototype.sendAnalyticsEvent = UTILS.debounce( function( action , label ) {
    UTILS.addAnalyticsEvent( "searchables" , action , label , null );
  } , 1000 );

  return SEARCHABLE;

});
