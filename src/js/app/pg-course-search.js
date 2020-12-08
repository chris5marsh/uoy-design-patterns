/*

---
title: PG Course Search options
name: pg-course-search
category: Javascript
---

 */
define(['jquery'], function ($) {

  var PGSEARCH = function (options) {

        var $results = $('div#results');
        var $resultsTable = $('table', $results);

        $.urlParam = function(name) {
      	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
          if (!results) return false;
      	return results[1];
        };
      
        var mode;
        var courseMode = $.urlParam('mode'); 
        if (courseMode === false) courseMode = "taught";
        
        if (courseMode === "research") {
          mode = ["DR"];
          $( "div[role='main'] h1" ).replaceWith( "<h1>Search research degrees</h1>" );
        } else {
          mode = ["DP","DG","UG","UP","DU"]; // DU added to keep `Law (Juris Doctor)` course
          $( "div[role='main'] h1" ).replaceWith( "<h1>Search postgraduate taught courses</h1>" );
        }
        
        $("#showAllCourses").attr("href", function(i, href) {
           return href + '?mode=' + courseMode; 
        });
      
        $("tr", $results).each(function(i) {
          
          var $row = $(this);
          var courseCode = $row.attr('data-courseid');
          if (!courseCode) return;
          
          if ($.inArray(courseCode.substring(0,2), mode) === -1) {
            // Remove rows with wrong type of courses
            $(this).remove();
          }
        });
        
        $('<div class="c-form__element"><div class="c-form__radio-group"><input class="c-form__radio" type="radio" id="level-postgraduate-taught" name="mode" value="taught"><label for="level-postgraduate-taught" class="c-form__label">Postgraduate taught</label></div><div class="c-form__radio-group"><input class="c-form__radio" type="radio" id="level-postgraduate-research" name="mode" value="research"><label for="level-postgraduate-research" class="c-form__label">Research</label></div></div>').insertAfter('#courseSearch fieldset div:first-of-type');
      
        $("input[type=radio]").each(function() {
          if($(this).val() == $.urlParam('mode')){
            $(this).attr("checked","true");
          }
        });
        
        function getPathFromUrl(url) {
          return url.split("?")[0];
        }
      
        $("input[type=radio]").change(function() {
          var radioValue = $("input[type=radio]:checked").val();
          $("#showAllCourses").attr("href", function(i, href) {
            return getPathFromUrl(href) + '?mode=' + radioValue; 
          });
        });
      
        var $resultsFirstDiv = $('div:first-child', $results);
        
        if ($resultsFirstDiv.length) {
          var tableRows = $('#results tbody tr');
          var counter = tableRows.length;
          // Check that it's not a "there are no results" row
          var errorText = "Sorry, no results for this search query";
          var firstRowCells = $(tableRows[0]).find('td');
          if($(firstRowCells[0]).text().indexOf(errorText) === -1) {
            var $resultsStrong = $('strong', $resultsFirstDiv);
            if ($resultsStrong.length > 0) {
              $resultsStrong[0].nextSibling.replaceWith(" (" + counter + " courses)");
            }
          }
        }
        
        // If all courses are unavailable, hide main results table
        if ($resultsTable.find('tr').length === 0) {
          //console.log('No rows in results table');
          $resultsTable.hide();
        }

  };

  return PGSEARCH;

});