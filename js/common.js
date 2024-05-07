$(document).ready(function () { //start

  $(window).resize(function () {
    windowWidth = $(window).width();
    if (windowWidth < 1280) {
      $('body').removeClass('pc');
      $('body').addClass('mobile');
    } else {
      $('body').addClass('pc');
      $('body').removeClass('mobile');
    }
  }).resize();


  //헤더

  $(".gnb>li").on("mouseenter focusin", function () {
    $('header').addClass('color');
    $('.gnb>li>a').addClass('hover');
    $('header .dep2>li>a').addClass('hover');
    $('.lang>a').addClass('hover');
    $('.lang-list>li>a').addClass('hover');
    $('.menu-trigger').addClass('hover');
    $('.utill .lang .icon').addClass('hover');
    $('.utill .lang').addClass('hover');
    $('#header h1 ').addClass('hover');
    $('header .dep2-bg').css({
      "height": "80px",
    });

    //$('header .header-mask').stop().fadeIn();
  });


  $("header").on("mouseleave focusout ", function () {
    $('header').removeClass('color');
    $('.gnb>li>a').removeClass('hover');
    $('header .dep2>li>a').removeClass('hover');
    $('.lang>a').removeClass('hover');
    $('.lang-list>li>a').removeClass('hover');
    $('.menu-trigger').removeClass('hover');
    $('.utill .lang .icon').removeClass('hover');
    $('.utill .lang').removeClass('hover');
    $('#header h1 ').removeClass('hover');
    $('header .dep2-bg').css({
      "height": "0",
    });
    //$('header .header-mask').stop().fadeOut();
  });

  //header lnb

  $(".gnb .lnb").hide();

  $(".gnb .menu1").mouseenter(function () {
    $(".gnb .sub1").show();
  });


  $(".gnb .menu1").mouseleave(function () {
    $(".gnb .sub1").hide();
  });

  $(".gnb .menu2").mouseenter(function () {
    $(".gnb .sub2").show();
  });


  $(".gnb .menu2").mouseleave(function () {
    $(".gnb .sub2").hide();
  });

  $(".gnb .menu3").mouseenter(function () {
    $(".gnb .sub3").show();
  });


  $(".gnb .menu3").mouseleave(function () {
    $(".gnb .sub3").hide();
  });

  $(".gnb .menu4").mouseenter(function () {
    $(".gnb .sub4").show();
  });


  $(".gnb .menu4").mouseleave(function () {
    $(".gnb .sub4").hide();
  });

  $(".gnb .menu5").mouseenter(function () {
    $(".gnb .sub5").show();
  });


  $(".gnb .menu5").mouseleave(function () {
    $(".gnb .sub5").hide();
  });

  // 언어버튼

  $(".lang-list").hide();

  langchk = 0;
  $(".lang").click(function () {
    if (langchk == 0) {
      $(this).find(".lang-list").slideDown();
      $(".utill .lang").addClass('on');
      langchk = 1;
    } else {
      $(this).find(".lang-list").slideUp();
      $(".utill .lang").removeClass('on');
      langchk = 0;
    }
  });



  //햄버거

  var burger = $('.menu-trigger');

  burger.each(function (index) {
    var $this = $(this);

    $this.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
    })
  });

  //allmenu

  chkNum = 0;
  $(".menu-trigger").click(function () {

    if (chkNum == 0) {
      $(".allmenu").addClass("open");
      $(".menu-trigger").addClass("hover");
      chkNum = 1;
    } else {
      $(".allmenu").removeClass("open");
      $(".menu-trigger").removeClass("hover");
      chkNum = 0;
    }
  });


  if ($(window).width() < 1024) {

    $(".allgnb>li>ul").hide();

    $(document).on("click", ".allgnb>li", function () {
      if ($(this).attr("class") == "act") {
        $(this).find("ul").stop().slideUp();
      } else {
        $(this).find("ul").stop().slideDown();
      }
      $(this).toggleClass("act");
      $(this).siblings("li").removeClass("act");
      $(this).siblings("li").find("ul").stop().slideUp();

    });


  } else {
    $(".allgnb>li>ul").show();



  }

  $(window).resize(function () {



    if ($(window).width() < 1024) {

      $(".allgnb>li>ul").hide();

      $(document).on("click", ".allgnb>li", function () {
        if ($(this).attr("class") == "act") {
          $(this).find("ul").stop().slideUp();
        } else {
          $(this).find("ul").stop().slideDown();
        }
        $(this).toggleClass("act");
        $(this).siblings("li").removeClass("act");
        $(this).siblings("li").find("ul").stop().slideUp();

      });


    } else {
      $(".allgnb>li>ul").show();

    }

  });


  //swiper 해제

  var ww = $(window).width();
  var mySwiper = undefined;

  function initSwiper() {

    if (ww < 768 && mySwiper == undefined) {
      mySwiper = new Swiper(".business", {
        slidesPerView: 1.5,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else if (ww >= 768 && mySwiper != undefined) {
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }

  initSwiper();

  $(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
  });

  //스크롤 이벤트

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#main-visual").addClass('on1');
    } else {
      $("#main-visual").removeClass('on1');
    }
    if ($(window).scrollTop() > 200) {
      $("#main-visual").addClass('on2');
    } else {
      $("#main-visual").removeClass('on2');
    }
    if ($(window).scrollTop() > 300) {
      $("#main-visual").addClass('on3');
    } else {
      $("#main-visual").removeClass('on3');
    }
    if ($(window).scrollTop() > 400) {
      $("#main-visual").addClass('on4');
    } else {
      $("#main-visual").removeClass('on4');
    }


    if ($(window).width() < 768) {

      $(".allgnb>li>ul").hide();

      if ($(window).scrollTop() > 300) {

        $("#header").addClass('m-scroll');

      } else {

        $("#header").removeClass('m-scroll');
      }

    }

    $(window).resize(function () {

      if ($(window).width() < 768) {

        $(".allgnb>li>ul").hide();

        if ($(window).scrollTop() > 300) {

          $("#header").addClass('m-scroll');

        } else {

          $("#header").removeClass('m-scroll');
        }

      }

    });


    if ($(window).width() > 768) {

      $(".allgnb>li>ul").hide();

      if ($(window).scrollTop() > 300) {

        $("#header").addClass('scroll');

      } else {

        $("#header").removeClass('scroll');
      }

    }


    $(window).resize(function () {

      if ($(window).width() < 768) {

        $(".allgnb>li>ul").hide();

        if ($(window).scrollTop() > 300) {

          $("#header").addClass('scroll');

        } else {

          $("#header").removeClass('scroll');
        }

      }

    });


  });

  AOS.init();



}); //end

