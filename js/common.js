$(document).ready(function () { //start



  //헤더

  $(".gnb>li").on("mouseenter focusin", function () {
    $('header').addClass('color');
    $('.gnb>li>a').addClass('hover');
    $('header .dep2>li>a').addClass('hover');
    $('.lang>a').addClass('hover');
    $('.lang-list>li>a').addClass('hover');
    $('.menu-trigger span').css({
      "background-color": "#000",
    });
    $('.utill .lang .icon').css({
      "background-image": "url(../img/lang_icon_b.png)",
    });
    $('header h1 a').css({
      "background-image": "url(../img/logo.png)",
    });
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
    $('.menu-trigger span').css({
      "background-color": "#fff",
    });
    $('.utill .lang .icon').css({
      "background-image": "url(../img/lang_icon.png)",
    });
    $('header h1 a').css({
      "background-image": "url(../img/logo_w.png)",
    });
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

  langchk = 0;
	$(".lang").click(function(){
		if(langchk == 0){
			$(this).find(".lang-list").slideDown();
			langchk = 1;
		}else{
			$(this).find(".lang-list").slideUp();
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



}); //end

