/*

---
title: Youtube Video Embeds
name: youtube-embed
category: Javascript
---

 */
define(['jquery', 'app/utils'], function ($, UTILS) {

    var $window = $(window);

    var YOUTUBE = function (options) {

        if (!options.link) return false;
        this.link = options.link;

        // Check if this is a <p> and fallback to a child <a> if exists
        if ( this.link.is( "p" ) ) {
            this.link = $( this.link.find( "a" )[ 0 ] );
        }

        // remove wrapper paragraph, if any
        if (this.link.parent().is("p")) {
            this.link.unwrap();
        }

        // figure out the Youtube ID, which can be in the following 3 formats:
        // - [old style] https://www.youtube.com/watch?v=_8pUffDWFlM
        // - [old style extended] https://www.youtube.com/watch?v=_8pUffDWFlM&index=1&list=PLqL9vrHSa70NmzsSg36tnv0dqEueEbifj
        // - [new style] https://youtu.be/_8pUffDWFlM - with or without time stamp (t=XYmXYs)
        var url = this.link.attr("href");
        var videoId = "";
        if (url.indexOf("watch") > 0) {
            videoId = url.substr((url.indexOf("v=") + 2), 11);
        } else if (url.indexOf("youtu.be") > 0) {
            videoId = url.substr((url.indexOf(".be/") + 4), 15);
        } else {
            // can't find a URL, so let's exit out
            return false;
        }

        // Get any additional options from link data attributes
        var optionList = [ 'autoplay' , 'mute' , 'cc_load_policy', 't' ];
        var optionArgs = '';
        for( var a = 0 ; a < optionList.length ; a++ ) {
          if( $( this.link ).attr( 'data-'+optionList[ a ] ) ) optionArgs += '&'+optionList[ a ]+'='+$( this.link ).attr( 'data-'+optionList[ a ] );
        }

        this.id = videoId;
        this.url = '//www.youtube.com/embed/' + this.id + '?rel=0' + optionArgs;
        this.container = $('<div>').addClass('c-video').attr({
            'data-video-id': this.id
        });

        // replace the original link element with the embed code
        this.link.replaceWith(this.container);

        this.iframe = this.createIframe();

        var that = this;
        var resizeFn = UTILS.debounce(function (e) {
            that.setDimensions();
        }, 250);

        $window.on('resize', null, {that: this}, resizeFn);

        console.info(this);

    };

    YOUTUBE.prototype.getDimensions = function () {
        var videoWidth = this.container.width();
        var videoHeight = Math.floor((videoWidth / 16) * 9);
        return {
            width: videoWidth,
            height: videoHeight
        };
    };

    YOUTUBE.prototype.setDimensions = function () {

        // Check to see if it's a fullscreen resize
        var screenW = screen.width;
        var screenH = screen.height;
        var windowW = $window.width();
        var windowH = $window.height();
        var isFullscreen = (screenW == windowW) && (screenH == windowH);

        if (isFullscreen === true) return false;

        var videoDimensions = this.getDimensions();

        this.iframe.attr({
            width: videoDimensions.width,
            height: videoDimensions.height
        });

        // Fire update event
        $window.trigger('content.updated', ['youtube', this]);
    };


    YOUTUBE.prototype.createIframe = function () {

        var videoDimensions = this.getDimensions();
        // create the embed code
        var iframe = $('<iframe>').attr({
            width: videoDimensions.width,
            height: videoDimensions.height,
            src: this.url,
            allowfullscreen: true
        });

        fetch('https://www.googleapis.com/youtube/v3/videos/?part=snippet&id='+this.id+'&key=AIzaSyBMXKei1d7in0xiNuk0kVarPgsUyhTSLkc')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            return iframe.attr({
                title: data.items[0].snippet.title
            });
        })
        .catch(function(error){
            console.log(error);
        }); 

        // add to container
        this.container.html(iframe);
        // Fire update event
        $window.trigger('content.updated', ['youtube', this]);
        return iframe;
    };


    return YOUTUBE;
});
