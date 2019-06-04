// jquery
import $ from 'jquery';                           // jQuery - https://jquery.com
// bootstrap - https://www.npmjs.com/package/bootstrap
import boostrap from "bootstrap";
import LazyLoad from "vanilla-lazyload";          // lazy loader - https://www.npmjs.com/package/vanilla-lazyload
import validator from 'validator';                // javascript form validator - https://www.npmjs.com/package/validator
import YouTubePlayer from 'youtube-player';       // YouTube player - https://www.npmjs.com/package/youtube-player
import WebFont from 'webfontloader';              // Web Font Loader - https://www.npmjs.com/package/webfontloader
import animateScrollTo from 'animated-scroll-to'; // Animate scroll to 


// require("../../static/assets/css/main.css");

// Load fonts
WebFont.load({
  google: {
    families: window.fontFamilies
  }
});


// On Document Ready
$(document).ready(function () {

  console.log($('a[href*="#"][role!="button"]'));

  //automatically animate links to anchors 
  $('a[href*="#"][role!="button"]').on('click', function (e) {
    console.log(this);
    e.preventDefault();
    let target = $(this).attr('href');
    console.log(target);
    // animateScrollTo($(target));
    animateScrollTo(document.querySelector(target));
  });


  // Add scrolled class to body for fixed headers
  // you can use the class to add backgrounds, hide, etc.
  $(window).on('scroll', function () {
    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > 0) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
  });


  const $video_player = $('#video-player');
  console.log($video_player);
  if ($video_player.length > 0) {
    const player = YouTubePlayer('video-player');
    console.log('document ready');

    $('#VideoModal').on('show.bs.modal', function (e) {
      const playing_id = $(this).attr('data-playing');
      const video_id = $(e.relatedTarget).attr('data-video-id');
      console.log(playing_id, video_id);
      if (typeof (playing_id) == 'undefined' || playing_id !== video_id) {
        $(this).attr('data-playing', video_id);
        player.loadVideoById(video_id);
        player.playVideo();
      } else {
        player.playVideo();
      }
    });
    $('#VideoModal').on('hide.bs.modal', function (e) {
      player.pauseVideo();
    });
  }

  // carouselNormalization();

});

