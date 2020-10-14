/*

---
title: Tabs Module
name: tabs-module
category: Javascript
---

 */

define(['jquery', 'app/utils'], function ($, UTILS) {

var TABS = function ( settings ) 
{
	// Containing element 
  this.$context = settings.container;
  
	// Abandon if no context supplied
	if( !this.$context ) return false;
	
	// Look up our DOM elements
	this.tabsList = this.$context.querySelector('.c-tabs__nav');
	this.tabsListItems = this.$context.querySelectorAll('.c-tabs__tab');
	this.tabsListLinks = this.$context.querySelectorAll('.c-tabs__link');
	this.tabContent = this.$context.querySelectorAll('.c-tabs__content');

	this.initialise();
};

// ---------------------------------------------------
// Initialise

TABS.prototype.initialise = function (  )
{
	// What is the initial active tab? Is it from the url or is it the first element?
	var initial_active_tab = this.get_initial_active_tab();
	
	// Add tablist role to ul, in case it's not there
	this.tabsList.setAttribute('role' , 'tablist');

	// Set the initial active tab
	this.set_active_tab( initial_active_tab , true );
	
	// This is the click listener
	this.tabsList.addEventListener("click", this.tab_click_handler.bind(this));
	
	// This is the keydown listener
	this.tabsList.addEventListener("keydown", this.keystroke_handler.bind(this));
	
};

// --------------------------------------------------
// Initial active tab

TABS.prototype.get_initial_active_tab = function ( )
{
	var hash = this.get_tab_hash_from_url();

	if( hash )
	{
		// There's a hash on the url? Great, lets just use that.
		return hash;
	}
	else
	{
		// Return the hash from the first element if there is no hash on the url
		var first_tabs_hash = this.tabsListLinks[0].getAttribute('href');
		return first_tabs_hash;
	}
};

// --------------------------------------------------
// Tab click handler

TABS.prototype.tab_click_handler = function ( e )
{
	// Stop the screen jumping thing
	e.preventDefault();
	
	// Set the active tab based on the click
	this.set_active_tab( e.target.hash );
};

// --------------------------------------------------
// Retrieves the index of the current active tab

TABS.prototype.get_active_index = function ()
{
	// Check each tab link for the is-active class
	for( var i = 0 ; i < this.tabsListLinks.length ; i ++ )
	{
		if( this.tabsListItems[ i ].classList.contains( "is-active" ) ) return i;
	}

	// Fall back to first if not found
	return 0;
};

// --------------------------------------------------
// Retrieves the index of the currently focused tab 

TABS.prototype.get_focused_tab_index = function ()
{
	// Get the element with focus
	var activeElement = document.activeElement;
	
	if( activeElement ) // Only if there is a focused element
	{	
		// Check activeElement against each of our links
		for( var i = 0; i < this.tabsListLinks.length; i++ )
		{
			if( this.tabsListLinks[i] == activeElement ) return i;
		}
	}

	// Fall back to first tab if the above fails
	return 0;
};

// --------------------------------------------------
// Keystroke handler

TABS.prototype.keystroke_handler = function ( e )
{
	// Lets look at what keys were pressed and do stuff that appropriate
	if ( e.keyCode >= 37 && e.keyCode <= 40) // Up, down, left or right arrow keys
	{
		// Get the index of the tab with focus
		var focusTabIndex = this.get_focused_tab_index();

		if (e.keyCode === 39 || e.keyCode === 40 ) // Move right
		{
			focusTabIndex++;

			// If we're at the end, go to the start
			if ( focusTabIndex >= this.tabsListLinks.length) focusTabIndex = 0;
		}
		else if (e.keyCode === 37 || e.keyCode === 38) // Move left
		{
			focusTabIndex--;

			// If we're at the start, move to the end
			if (focusTabIndex < 0) focusTabIndex = this.tabsListLinks.length - 1;
		}

		// Apply the focus to the selected tab link
		this.tabsListLinks[ focusTabIndex ].focus();

		// Stop the page from scrolling
		e.preventDefault();
	}
};

// --------------------------------------------------
// Check's the URL for a # and matches it to a tab (if applicable)

TABS.prototype.get_tab_hash_from_url = function ()
{
	// Get the hash from the URL
	var urlHash = window.location.hash;

	// Abandon if there is no hash on the URL
	if (!urlHash) return false;

	// Look through each tab link and compare its hash to the URL's
	for ( var i = 0; i < this.tabsListLinks.length; i++ )
	{
		// Get the hash from this tab link...
		var tabHash = this.tabsListLinks[i].getAttribute( 'href' );

		// ...and return if it matches the URL's
		if ( tabHash == urlHash ) return urlHash;
	}

	// Nothing found - return false
	return false;
};

// --------------------------------------------------
// Active tab

TABS.prototype.set_active_tab = function ( hash , dontfocus )
{
	if ( hash )
	{
		// Set a tab as active
		this.active_tab_attributes( hash , dontfocus );	
		
		// Set all others as inactive
		this.inactive_tab_attributes( hash );
	}
};

// --------------------------------------------------
// Active tab attributes

TABS.prototype.active_tab_attributes = function ( hash , dontfocus)
{
	// Remove the "#"
	var contentID = hash.substring(1);

	// Set element variables
	var link = this.$context.querySelector('a[href="'+hash+'"]');
	var tab = this.$context.querySelector('a[href="'+hash+'"]').parentNode;
	var content = this.$context.querySelector('div[id="'+contentID+'"]');

	// Set tab elements to active 
	tab.classList.add("is-active");
	tab.setAttribute('role' , 'tab');
	link.setAttribute('tabindex', '0');
	link.setAttribute('aria-controls' , contentID);
	link.setAttribute('aria-selected' , 'true');
	link.setAttribute('aria-expanded' , 'true');

	// Set content elements to active 
	content.classList.add("is-active");
	content.setAttribute('aria-hidden', 'false');
	content.setAttribute('role' , 'tabpanel');

};

// --------------------------------------------------
// Inactive tab attributes

TABS.prototype.inactive_tab_attributes = function ( hash )
{	
	for ( var i = 0; i < this.tabsListItems.length; i++ ) 
	{
		// Set element variables
		var tabs = this.tabsListItems[i];
		var link = this.tabsListLinks[i];
		var content = this.tabContent[i];
		
		// Set a variable to the value of a links href - example: #about
		var linkHash =  this.tabsListLinks[i].getAttribute('href');

		// Compare the href of links the tab ID
		if ( linkHash != hash )
		{
			// Set tab elements to inactive 
			tabs.classList.remove("is-active");
			link.setAttribute('tabindex', '-1');
			link.setAttribute('aria-selected' , 'false');
			link.setAttribute('aria-expanded' , 'false');
			
			// Set content elements to inactive 
			content.classList.remove("is-active");
			content.setAttribute('aria-hidden', 'true');
		}
	}
};

  return TABS;
});
