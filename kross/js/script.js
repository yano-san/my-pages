(function ($) {
    'use strict';



    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        var
            /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
            c2left = document.getElementById('l2').offsetLeft,
            c2top = document.getElementById('l2').offsetTop,
            c3left = document.getElementById('l3').offsetLeft,
            c3top = document.getElementById('l3').offsetTop,
            c4left = document.getElementById('l4').offsetLeft,
            c4top = document.getElementById('l4').offsetTop,
            c5left = document.getElementById('l5').offsetLeft,
            c5top = document.getElementById('l5').offsetTop,
            c6left = document.getElementById('l6').offsetLeft,
            c6top = document.getElementById('l6').offsetTop,
            c7left = document.getElementById('l7').offsetLeft,
            c7top = document.getElementById('l7').offsetTop,
            c8left = document.getElementById('l8').offsetLeft,
            c8top = document.getElementById('l8').offsetTop,
            c9left = document.getElementById('l9').offsetLeft,
            c9top = document.getElementById('l9').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left, c2top, x, y, 25);
            mouseParallax('l3', c3left, c3top, x, y, 20);
            mouseParallax('l4', c4left, c4top, x, y, 35);
            mouseParallax('l5', c5left, c5top, x, y, 30);
            mouseParallax('l6', c6left, c6top, x, y, 45);
            mouseParallax('l7', c7left, c7top, x, y, 30);
            mouseParallax('l8', c8left, c8top, x, y, 25);
            mouseParallax('l9', c9left, c9top, x, y, 40);
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });



})(jQuery);
"use strict";

var words = document.querySelectorAll(".word");
words.forEach(function (word) {
  var letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(function (letter) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

var rotateText = function rotateText() {
  var currentWord = words[currentWordIndex];
  var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]; // rotate out letters of current word

  Array.from(currentWord.children).forEach(function (letter, i) {
    setTimeout(function () {
      letter.className = "letter out";
    }, i * 80);
  }); // reveal and rotate in letters of next word

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach(function (letter, i) {
    letter.className = "letter behind";
    setTimeout(function () {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000)


$(document).ready(function(){
    /* == Inspired from jQuery Magic Line Using Transforms
  A PEN BY Todd Miller == */
    /* Add/Remove class active on li on click
    ======================= */
    $("#main-nav li").on("click", function(){
      $("#main-nav li.active").removeClass("active");
      $(this).addClass("active");
    });
    
    /* Function for vertical sliding menu
    ======================= */
    function slidingLine() {
        var $el, topPos, newHeight,
        $mainNav = $("#main-nav");
        
      // Create a new li and append it to ul
        $mainNav.append("<li id='slidingLine'></li>");
        var $slidingLine = $("#slidingLine");
  
        $slidingLine // Defining initial height and position
            .height($(".active").outerHeight())
            .css("top", $(".active").position().top)
            .data("origTop", $slidingLine.position().top)
            .data("origHeight", $slidingLine.height());
        
        $("#main-nav li").hover(function() { // Set new height and position
          $el = $(this);
          topPos = $el.position().top;
          newHeight = $el.outerHeight();
          $slidingLine.stop().animate({
              top: topPos,
              height: newHeight
          });
        }, function() { // Animate
          $slidingLine.stop().animate({
              top: $(".active").position().top,
              height: $(".active").outerHeight()
        });
      });
    }
    
      slidingLine();
  });

  $("#leftside-navigation .sub-menu > a").click(function(e) {
    $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation()
  })