function getControlsPosition() {
  if($(".slider_wrapp").length > 0 ) {
    leftSlide = $(".slider_wrapp .left_slice");
    rightSlide = $(".slider_wrapp .right_slice");
    offsetLeftCoord = $("#coords").offset().left;
    leftSlide.css({
      "margin-left" : offsetLeftCoord + "px"
    });
    rightSlide.css({
      "margin-right" : offsetLeftCoord + "px"
    });
  }
}

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getSlideDescriptPosition() {
  var indexAttr;
  if(bodyWidth > 767) {
    leftCoord = -1 * (bodyWidth - $("#coords").width() + 100);
    indexAttr = parseInt( $(".slider .slick-current").attr("data-slick-index") ) + 1;
    $(".slider .slick-current + .slick-slide .slide_descript").css({
      "left" : leftCoord + "px"
    });
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var leftSlide, rightSlide, offsetLeftCoord, slickBtnClass;
var parentBlock, idAttr;
var leftCoord;

$(window).load(function() {
  getAnimation();
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getControlsPosition();
  getSlideDescriptPosition();
  $(".slider_2 .slide").css({
    "min-height" : $(".slider_2").height() + "px"
  });
});

$(document).scroll(function() {
  getAnimation();
});

$(document).ready(function() {
  getControlsPosition();
  getAnimation();

  var navlinksCount = $(".main_nav li").length;
  $(".main_nav li").each(function() {
    $(this).css({
      "z-index" : navlinksCount
    });
    navlinksCount--;
  });

  // -----------------------  

    if( $(".slider").length > 0 ) {

      var currentSlideBlock, nextSlideBlock, indexPrevSlide, indexNextSlide, slideIndex, prevSlide, activeSlide, videoEl, videoId;

      $(".slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
          currentSlideBlock = $(".slider .slick-slide:eq("+currentSlide+")");
          nextSlideBlock = $(".slider .slick-slide:eq("+nextSlide+")");
          if(currentSlideBlock.hasClass("next_slide")) {
            currentSlideBlock.removeClass("next_slide")
          }
          if(nextSlideBlock.hasClass("prev_slide")) {
            nextSlideBlock.removeClass("prev_slide");
            nextSlideBlock.addClass("next_slide");
          } else {
            nextSlideBlock.removeClass("next_slide");
            currentSlideBlock.addClass("prev_slide");
          }
          if(currentSlideBlock.find("video").length > 0) {
            videoId = currentSlideBlock.find("video").attr("id");
            videoEl = document.getElementById(videoId);
            videoEl.pause();
          }
          if(nextSlideBlock.find("video").length > 0) {
            videoId = nextSlideBlock.find("video").attr("id");
            videoEl = document.getElementById(videoId);
            videoEl.play();
          }
          if(bodyWidth > 767) {
            leftCoord = -1 * (bodyWidth - $("#coords").width() + 100);
            $(".slider .slick-current + .slick-slide + .slick-slide .slide_descript").css({
              "left" : leftCoord + "px"
            });
          }
      });

      $(".slider").on('init', function(){
          getSlideDescriptPosition();
      });

      $(".slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: true,
          swipe: false
      });

      $(".left_slice").on("click", function(e) {
        if($(".slider .slick-current").attr("data-slick-index") != 0) {
          $(".slider .slick-prev").trigger("click");
        } else {
          e.preventDefault();
        }
      });

      $(".right_slice").on("click", function(e) {
        if($(".slider .slick-current").attr("data-slick-index") !=  ( $(".slider .slick-slide").length - 1 ) ) {
          $(".slider .slick-next").trigger("click");
        } else {
          e.preventDefault();
        }
      });

    }


    if( $(".slider_2").length > 0 ) {

      $(".slider_2").on('init', function(){
        $(".slider_2 .slide").css({
          "min-height" : $(".slider_2").height() + "px"
        });
      });

      $(".slider_2").on('beforeChange', function(event, slick, currentSlide, nextSlide){
          currentSlideBlock = $(".slider_2 .slick-slide:eq("+currentSlide+")");
          nextSlideBlock = $(".slider_2 .slick-slide:eq("+nextSlide+")");
          if(currentSlideBlock.find("video").length > 0) {
            videoId = currentSlideBlock.find("video").attr("id");
            videoEl = document.getElementById(videoId);
            videoEl.pause();
          }
          if(nextSlideBlock.find("video").length > 0) {
            videoId = nextSlideBlock.find("video").attr("id");
            videoEl = document.getElementById(videoId);
            videoEl.play();
          }
      });

      $(".slider_2").not(".slick-initialized").slick({
          dots: true,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          appendDots: $("#slider2Controls")
      });

      $(".slider_2_wrapp .left_slice").on("click", function(e) {
        $(".slider_2 .slick-prev").trigger("click");
      });

      $(".slider_2_wrapp .right_slice").on("click", function(e) {
        $(".slider_2 .slick-next").trigger("click");
      });

    }

    if( $(".gallery").length > 0 ) {

      $(".gallery").not(".slick-initialized").slick({
          dots: true,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          appendDots: $("#galleryControls")
      });

      $(".gallery_left").on("click", function(e) {
        $(".gallery .slick-prev").trigger("click");
      });

      $(".gallery_right").on("click", function(e) {
        $(".gallery .slick-next").trigger("click");
      });

    }

    $(".thumb_2").each(function() {
      if($(this).find(".desc").length > 0) {
        $(this).addClass("top_align");
      }
    });

    // --------------

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // --------------

    $("[name='infrastructure']").prop("checked", true);

    // $(".mp_ch_thumb label").on("click", function(e) {
    //   e.preventDefault();
    //   idAttr = $(this).attr("for");
    //   parentBlock = $(this).closest(".map_sect");
    //   if( $("#"+idAttr).is(":checked") ) {
    //     parentBlock.find("input").prop("checked", false);
    //     $("#"+idAttr).prop("checked", true);
    //   } else if(!$("#"+idAttr).is(":checked")) {
    //     $("#"+idAttr).prop("checked", true);
    //   }
    // });

    // ---------------------

    $("[data-popup-link]").on("click", function(e) {
        e.preventDefault();
        popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        $("body").addClass("fixed");
        $("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $(".popup_bg").fadeIn(300);
        $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(".close_popup, .popup_bg").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $(this).closest("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // -------------------

    $(".checkboxes_dropdown_btn").on("click", function(e) {
      e.preventDefault();
      var dropdownBoxName = $(this).attr("data-dropdown-btn");
      var dropdownBox = $("[data-dropdown-box = '"+dropdownBoxName+"']");
      if(dropdownBox.is(":hidden")) {
        dropdownBox.slideDown(300);
        $(this).addClass("active");
      } else {
        dropdownBox.slideUp(300);
        $(this).removeClass("active");
      }
    });

});