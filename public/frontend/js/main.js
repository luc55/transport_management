/*============================================================
 # Template Name: Loxicat - Business Consulting HTML5 Template
 # Template URI: https://webextheme.com/html/loxicat-html/
 # Description: Business Consulting HTML5 Template
 # Author: Loxicat
 # Author URI: https://themeforest.net/user/webextheme
 # Version: 1.0
/*============================================================

/*========================================
---------- [JS_INDEXING_START] -----------
==========================================
## [_Prealoder_Default]
## [_Header_Height]
## [_Sticky_Header]
## [_Side_Panel_Start]
## [_Mobile_Menu_Start]
## [_Progress_Bar]
## [_Toggle_Search_Box]
## [_Back_To_Top]
## [_Accordion]
## [_Owl_Carousel]
	## [_home_carousel]
	## [_testimonial_items_1col]
	## [_Testimonial_Items_2col]
	## [_Testimonial_Items_3col]
	## [_Team_Items_5col]
	## [_Team_Items_3col]
	## [_Project_Items_5col]
	## [_Client_Items]
## [_Language_Button]
## [_Inline_Data_Attribute]
## [_MagnificPopUp]
## [_Portfolio_Filter]
## [_CounterUp]
## [_Wow]
==========================================
--------- [JS_INDEXING_END] --------------
==========================================
*/

(function ($) {
  "use strict";

  var wind = $(window);
  var jQwind = jQuery(window);
  var jQdoc = jQuery(document);

  // ===Prealoder===
  function prealoader() {
    if ($(".preloader").length) {
      $(".preloader").delay(100).fadeOut(500);
    }
  }

  /*=============================================*/
  /*------------- [_Header_Height] --------------*/
  /*=============================================*/
  var headerHeight = $(".header-style-two").height();
  $(".header-style-two").css("height", headerHeight);

  /*=============================================*/
  /*-------------- [_Sticky_Header] -------------*/
  /*=============================================*/
  wind.on("scroll", function () {
    var sticky_one_layer = $(".header-navigation-area.one-layer-header");
    var sticky_two_layers = $(".header-navigation-area.two-layers-header");
    var sticky_three_layers = $(".header-navigation-area.three-layers-header");
    var scroll = wind.scrollTop();
    if (scroll < 0) {
      sticky_one_layer.removeClass("fixed");
    } else {
      sticky_one_layer.addClass("fixed");
    }
    if (scroll < 36) {
      sticky_two_layers.removeClass("fixed");
    } else {
      sticky_two_layers.addClass("fixed");
    }
    if (scroll < 152) {
      sticky_three_layers.removeClass("fixed");
    } else {
      sticky_three_layers.addClass("fixed");
    }
  });

  jQuery(document).on("ready", function () {
    /*=============================================*/
    /*----------- [_Side_Panel_Start] -------------*/
    /*=============================================*/
    $(".side-panel-trigger").on("click", function () {
      $(".side-panel-content").addClass("side-panel-open");
    });

    $(".close-icon").on("click", function () {
      $(".side-panel-content").removeClass("side-panel-open");
    });
    /*=============================================*/
    /*---------- [_Mobile_Menu_Start] -------------*/
    /*=============================================*/
    var $mobile_menu = $("#mobile-menu");
    var $mobile_menu_right = $("#mobile-menu-right");
    $mobile_menu.meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991",
      meanRevealPosition: "left",
    });
    $mobile_menu_right.meanmenu({
      meanMenuContainer: ".mobile-menu-right",
      meanScreenWidth: "991",
      meanRevealPosition: "right",
    });

    /*=============================================*/
    /*------------- [_Progress_Bar] ---------------*/
    /*=============================================*/
    if ($(".progress-line").length) {
      $(".progress-line").appear(
        function () {
          var el = $(this);
          var percent = el.data("width");
          $(el).css("width", percent + "%");
        },
        {
          accY: 0,
        }
      );
    }
    if ($(".count-box").length) {
      $(".count-box").appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);
          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text(),
            }).animate(
              {
                countNum: n,
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-text").text(this.countNum);
                },
              }
            );
          }
        },
        {
          accY: 0,
        }
      );
    }
    /*=============================================*/
    /*----------- [_Toggle_Search_Box] ------------*/
    /*=============================================*/
    var $showsearchbox = $(".show-searchbox");
    var $togglesearchbox = $(".toggle-searchbox");
    $(document).on("click", function (e) {
      var clickID = e.target.id;
      if (clickID !== "s") {
        $togglesearchbox.removeClass("show");
      }
    });
    $showsearchbox.on("click", function (e) {
      event.stopPropagation();
    });
    $(".search-form").on("click", function (e) {
      event.stopPropagation();
    });
    $showsearchbox.on("click", function (e) {
      if (!$togglesearchbox.hasClass("show")) {
        $togglesearchbox.addClass("show");
        event.preventDefault();
      } else $togglesearchbox.removeClass("show");
      event.preventDefault();

      if (!$showsearchbox.hasClass("active")) $showsearchbox.addClass("active");
      else $showsearchbox.removeClass("active");
    });

    /*=============================================*/
    /*--------------- [_Back_To_Top] --------------*/
    /*=============================================*/
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "300", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*=============================================*/
    /*--------------- [_Accordion] ----------------*/
    /*=============================================*/
    $(".accordion")
      .find(".accordion-header")
      .on("click", function () {
        // Adds Active Class
        $(this).toggleClass("active");
        // Expand or Collapse This Panel
        $(this).next().slideToggle(300, "swing");
        // Hide The Other Panels
        $(".accordion-body").not($(this).next()).slideUp(300, "swing");
        // Removes Active Class From Other Titles
        $(".accordion-header").not($(this)).removeClass("active");
      });

    /*=============================================*/
    /*------------- [_Owl_Carousel] ---------------*/
    /*=============================================*/

    /*------------- [_home_carousel] --------------*/
    function home_carousel() {
      var owl = $(".home-carousel");
      owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        active: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 8000,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          425: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1024: {
            items: 1,
          },
          1440: {
            items: 1,
          },
        },
      });
    }
    home_carousel();

    /*------------- [_testimonial_items_1col] ------*/
    function testimonial_items_1col() {
      var owl = $(".testimonial-items-1col");
      owl.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: true,
        dots: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          425: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1024: {
            items: 2,
          },
          1440: {
            items: 1,
          },
        },
      });
    }
    testimonial_items_1col();

    /*------------- [_Testimonial_Items_2col] ------*/
    function testimonial_items_2col() {
      var owl = $(".testimonial-items-2col");
      owl.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 8000,
        nav: true,
        dots: false,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          425: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
          1440: {
            items: 4,
          },
        },
      });
    }
    testimonial_items_2col();

    /*------------- [_Testimonial_Items_3col] ------*/
    function testimonial_items_3col() {
      var owl = $(".testimonial-items-3col");
      owl.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 8000,
        nav: true,
        dots: false,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          425: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 2,
          },
          1440: {
            items: 3,
          },
        },
      });
    }
    testimonial_items_3col();

    /*------------- [_Team_Items_3col] ------*/
    function team_items_3col() {
      var owl = $(".team-items-3col");
      owl.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: true,
        dots: false,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          425: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
          1440: {
            items: 3,
          },
        },
      });
    }
    team_items_3col();

    /*------------- [_Team_Items_5col] ------*/
    function team_items_5col() {
      var owl = $(".team-items-5col");
      owl.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: true,
        dots: false,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          425: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
          1440: {
            items: 5,
          },
        },
      });
    }
    team_items_5col();

    /*------------- [_Project_Items_5col] ------*/
    function project_items_4col() {
      var owl = $(".project-items-4col");
      owl.owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: true,
        dots: false,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          425: {
            items: 1,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
          1440: {
            items: 5,
          },
        },
      });
    }
    project_items_4col();

    /*------------- [_Client_Items] ------*/
    function client_items() {
      var owl = $(".client-items");
      owl.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: false,
        dots: false,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          425: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
          1440: {
            items: 5,
          },
        },
      });
    }
    client_items();

    /*=============================================*/
    /*------------ [_Language_Button] -------------*/
    /*=============================================*/
    $(".language-btn").on("click", function (event) {
      event.preventDefault();
      $(this).next(".language-dropdown").toggleClass("open");
    });

    /*=============================================*/
    /*---------- [_Inline_Data_Attribute] ---------*/
    /*=============================================*/
    var sectionBgImg = $(".bg-img, .footer, section, div");
    sectionBgImg.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css(
          "background-image",
          "url(" + $(this).data("background") + ")"
        );
      }
    });

    /*=============================================*/
    /*--------------- [_MagnificPopUp] ------------*/
    /*=============================================*/
    $(".popup-load").magnificPopup({
      type: "iframe",
      gallery: {
        enabled: true,
      },
    });
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    $(
      ".popup-youtube, .popup-youtube-left, .popup-vimeo, .popup-gmaps"
    ).magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    /*=============================================*/
    /*------------ [_Portfolio_Filter] ------------*/
    /*=============================================*/
    $("#container").imagesLoaded(function () {
      $(".project-filter").on("click", "li", function () {
        $("li").removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });
      var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        transitionDuration: ".6s",
      });
    });

    /*=============================================*/
    /*--------------- [_CounterUp] ----------------*/
    /*=============================================*/
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    /*=============================================*/
    /*------------------ [_Wow] -------------------*/
    /*=============================================*/
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
      });
      wow.init();
    }
  });

  // Window Load event
  jQuery(window).on("load", function () {
    (function ($) {
      prealoader();
    })(jQuery);
  });
})(jQuery);

// Karma script
var $WIN = $(window);
var BREAKPOINTS = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};
var winW = null;
var winH = null;
var swipers = [];

/* ============================ */
/* CALCULATE WINDOW SIZE (width, height) */

/* ============================ */
function calcWinSizes() {
  winW = window.innerWidth;
  winH = window.innerHeight;
}

calcWinSizes();

/* ============================ */
/* MAIN MENU */
/* ============================ */

// Add dropdown arrow to items with childrens
$(".menu-item-has-children > a").after('<span class="dropdown-btn"><i class="fa fa-caret-down"></i></span>');

if ($(".main-header").length) {
  var $html = $("html"),
    $body = $("body"),
    $header = $(".main-header"),
    $toolbar = $(".main-header__toolbar-wrap"),
    $hamburger = $(".hamburger"),
    $dropdownBtn = $(".dropdown-btn"),
    $stickyHeader = $(".main-header--sticky"),
    $stickyHeaderJs = $(".js-sticky-header"),
    $stickyHeaderNotMob = $(".main-header--sticky-not-mobile"),
    $mobileMenuWidth = 1024,
    $fullScreenMenu = $(".main-header--fullscreen-menu");

  // Hamburger click
  $hamburger.click(function (ev) {
    let menuBox = $(this).parent().find(".main-header__menu-box");
    $(this).toggleClass("is-active");
    $header.toggleClass("is-open");
    $body.toggleClass("over-hidden");
    if ($(this).hasClass("is-active")) {
      menuBox.slideToggle("fast").css("display", "flex");
    } else {
      if (!$fullScreenMenu.length) {
        menuBox.hide();
        if ("none" == menuBox.css("display")) {
          menuBox.removeAttr("style");
        }
      } else {
        menuBox.slideToggle("fast", function () {
          if ("none" == menuBox.css("display")) {
            menuBox.removeAttr("style");
          }
        });
      }
    }
  });

  // Fullscreen Menu
  if ($fullScreenMenu.length) {
    $dropdownBtn.click(function (ev) {
      $(this).toggleClass("is-active");
      $(this).parent().find("> .sub-menu").slideToggle("fast");
    });
  }

  // Sticky header
  if ($stickyHeaderJs.length) {
    $header.wrap('<div class="header-clearfix"></div>');

    function setHeaderHeight() {
      let headerHeight = $header.find(".main-header__menu-wrap").innerHeight();
      let toolbarHeight = $header
        .find(".main-header__toolbar-wrap")
        .innerHeight();
      if (
        $header.hasClass("main-header--transparent") |
        $header.hasClass("main-header--translucent-dark") |
        $header.hasClass("main-header--translucent-light")
      ) {
        headerHeight = 0;
      }

      if (
        $toolbar.hasClass("main-header__toolbar-wrap--transparent") |
        $toolbar.hasClass("main-header__toolbar-wrap--translucent-dark")
      ) {
        toolbarHeight = 0;
      }

      $(".header-clearfix").css("height", headerHeight + toolbarHeight + "px");
    }

    $(window).resize(function () {
      setHeaderHeight();
    });
  }

  // Header position fix if there is admin bar on page
  function headerWithAdminBar() {
    if ($("#wpadminbar").length) {
      $header.css("top", $("#wpadminbar").height() + "px");
    }
  }

  window.addEventListener("load", function () {
    headerWithAdminBar();
    $(window).resize(function () {
      headerWithAdminBar();
    });
  });
}

// Header
if ($(".aheto-header").length) {
  let $body = $("body"),
    $header = $(".aheto-header"),
    $hamburger = $(".hamburger"),
    $hamburgerAside = $(".js-hamburger-aside"),
    $aside = $(".js-aside"),
    $asideClose = $(".js-aside-close"),
    $menu;

  $hamburger.click(function (ev) {
    // Make body not scrollable
    if ($(this).hasClass("js-hamburger--body-over")) {
      $body.toggleClass("over-hidden");
    }

    $("html,body").animate(
      {
        scrollTop: $('[class*="nav-wrap"]').offset().top,
      },
      "slow"
    );

    // Hamburger animation
    $(this).toggleClass("is-active");

    // Open menu
    $menu = $(this).closest(".aheto-header").find(".js-menu");
    $header.toggleClass("is-open");
    if ($(this).hasClass("is-active")) {
      $menu.slideToggle("fast", function () {});
    } else {
      $menu.slideToggle("fast", function () {
        if ("none" == $menu.css("display")) {
          $menu.removeAttr("style");
        }
      });
    }
    $(".js-toggle").slideToggle("fast", function () {
      if ("none" == $(this).css("display")) {
        $(this).removeAttr("style");
      }
    });
  });

  $hamburgerAside.click(function (ev) {
    $aside.toggle(0, function () {
      $(this).toggleClass("js-aside-opened");
    });
  });

  $asideClose.click(function (ev) {
    $aside.toggleClass("js-aside-opened");
    setTimeout(function () {
      $aside.hide(0);
    }, 500);
  });

  // Move logo to the center of menu items
  if ($(".js-center-logo").length) {
    let logoIsMoved = false;

    function moveLogoToMenu() {
      let $logo = $(".js-center-logo");
      let menuLength = $(".aheto-header .main-menu > .menu-item").length;
      if (0 == menuLength % 2) {
        $logo.insertAfter(
          ".aheto-header .main-menu > .menu-item:nth-child(" +
            Math.floor(menuLength / 2) +
            ")"
        );
      }
      logoIsMoved = true;
    }

    function moveLogoFromMenu() {
      let $logo = $(".js-center-logo");
      $logo.prependTo(".js-logo-initial");
      logoIsMoved = false;
    }

    function moveLogo() {
      if ((1024 < window.innerWidth) & !logoIsMoved) {
        moveLogoToMenu();
      }
      if ((1024 >= window.innerWidth) & logoIsMoved) {
        moveLogoFromMenu();
      }
    }

    moveLogo();

    $(window).resize(function () {
      moveLogo();
    });
  }

  if ($(".js-dropdown-btn").length) {
    let $dropBtn = $(".dropdown-btn");
    $dropBtn.click(function (ev) {
      $(this).toggleClass("is-active");
      $(this).parent().find("> .sub-menu").slideToggle("fast");
    });
  }

  // Shop header
  if ($(".js-shop-header").length) {
    let $shopHeader = $(".js-shop-header"),
      $shopHamburger = $(".js-shop-hamburger"),
      $shopAside = $(".js-shop-aside"),
      $shopAsideClose = $(".js-shop-aside-close"),
      $shopAsideOverlay = $(".js-shop-aside-overlay"),
      $dropBtn = $(".dropdown-btn");

    $shopHamburger.click(function (ev) {
      $shopHeader.toggleClass("is-open");
      $(this).toggleClass("is-active");
      $shopAside.toggle(0).toggleClass("is-open");
      $shopAsideOverlay.toggle(0).toggleClass("is-open");
      $shopHeader.toggleClass("is-open");
    });

    $shopAsideClose.click(function (ev) {
      closeShopAside();
    });

    $shopAsideOverlay.click(function (ev) {
      closeShopAside();
    });

    function closeShopAside() {
      $shopHeader.removeClass("is-open");
      $shopHamburger.removeClass("is-active");
      $shopAside.removeClass("is-open");
      $shopAsideOverlay.removeClass("is-open");
      setTimeout(function () {
        $shopAside.toggle(0);
        $shopAsideOverlay.toggle(0);
      }, 500);
      $shopHeader.removeClass("is-open");
    }

    $dropBtn.click(function (ev) {
      if (1024 >= winH) {
        $(this).removeClass("is-active");
        $(this).parent().find("> .sub-menu").slideToggle("fast");
      }
    });
  }
}

/* ============================ */
/* HTML Multi language */
/* ============================ */

if ($(".multi-lang").length) {
  let $activeLang = $(".js-lang"),
    $langList;

  $activeLang.click(function (ev) {
    let $langList = $(this).closest(".multi-lang").find(".js-lang-list");
    $langList.slideToggle("fast");
  });
}
/* ============================ */
/* WINDOW LOAD & RESIZE */
/* ============================ */
$WIN.on("load resize", function () {
  calcWinSizes();
});

/* ============================ */
/* IMAGE TO BACKGROUND */

/* ============================ */
function changeImgToBg(imgSel, parentSel) {
  if (!imgSel) {
    console.info("no img selector");
    return false;
  }

  let $parent, _this;

  $(imgSel).each(function () {
    _this = $(this);
    if ("none" == _this.css("display")) {
      return true;
    }

    $parent = _this.closest(parentSel);
    $parent = $parent.length ? $parent : _this.parent();
    $parent.css("background-image", "url(" + _this.attr("src") + ")");
    _this.hide();
  });
}

$(window).on("load", function () {
  changeImgToBg(".js-bg");
});
/* ============================ */
/* IF TOUCH DEVICE */

/* ============================ */
function isTouchDevice() {
  return "ontouchstart" in document.documentElement;
}
/* ============================ */
/* COLUNM SAME HEIGHT */

/* ============================ */
$('.mediatheque-details').matchHeight();
$('.feature-content').matchHeight();
$('.service-box').matchHeight();
$('.contact-block ').matchHeight();

// // contact form select input handle

// function handleSelectContactForm () {
//             var typeService = $('#typeService');
//             console.log(typeService);
// };

// handleSelectContactForm();