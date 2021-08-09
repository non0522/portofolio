// ==========================================================================
//トップページ、タイプライター風に表示
$(window).bind('load',function(){
  // ここで文字を<span></span>で囲む
  $('.js-typ').children().andSelf().contents().each(function() {
  if (this.nodeType == 3) {
  $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  }
  });
  // 一文字ずつフェードインさせる
  $('.js-typ').css({'opacity':1});
  for (let i = 0; i <= $('.js-typ').children().size(); i++) {
  $('.js-typ').children('span:eq('+i+')').delay(100*i).animate({'opacity':1},50);
  };
  });

// ==========================================================================
//グラフのanimation、見えたら発火
  $(window).scroll(function(){
    var top = $(".js-animation").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
      $(".js-animation").css("animation", "expand 1.5s ease");
    }else{
      $(".js-animation").css("animatin", "none");
    }
    
  })


// ==========================================================================
//ハンバーガーボタン用jQuery
  jQuery( function( $ ) {
    $( ".js-hamburger" ).on( "click", function() {
      $( this ).toggleClass( "is-open" );
      $( ".p-gnav" ).toggleClass( "is-open" );
      $( "body" ).toggleClass( "is-open" );
    } );
  } );

// ==========================================================================
//ハンバーガーボタンオープン時、メニューをクリックした時にメニューを閉じる

$(function(){	
  $(window).scroll(function(){
//セクション２から３の間はこれ
if ($(window).scrollTop() > $('.js-sec2').offset().top && $(window).scrollTop() < $('.js-sec3').offset().top){
$(".list").css("color", "#fff");
}
else if ($(window).scrollTop() > $('.js-sec3').offset().top && $(window).scrollTop() < $('.js-sec4').offset().top){
  $(".list").css("color", "#000");
}
else if ($(window).scrollTop() > $('.js-sec4').offset().top && $(window).scrollTop() < $('.js-sec5').offset().top){
  $(".list").css("color", "#fff");
}//セクション5より進んだらこれ
else if($(window).scrollTop() > $('.js-sec5').offset().top){
$(".list").css("color", "#000");
}else//それ以外（つまりセクション１である場合）はこれ
  $(".list").css("color", "#000");
   });
}); 


//   $('.p-gnav a[href]').on('click', function(event) {
//     $('.js-hamburger').trigger('click');
// });


// function changeColor(idname){
//   var obj = document.getElementById(idname);
//   obj.style.color = '#ffffff';            //文字色を白にする
//   obj.style.backgroundColor = '#ff0000';  //背景色を赤にする


// ==========================================================================
//ハンバーガーボタン用jQuery
// jQuery( function( $ ) {
//   $( ".js-slide" ).hover (function() {
//     $( this ).toggleClass( "is-appear" );
//     $( ".c-diagram__middle" ).toggleClass( "is-appear" );
//   } );
// } );

// $(function () {
//   $(window).on("scroll", function () {
//     const sliderHeight = $(".js-change-1").height();
//     if (sliderHeight - 30 < $(this).scrollTop()) {
//       $(".js-gnav").addClass("is-white");
//     } else {
//       $(".js-gnav").removeClass("is-white");
//     }
//   });
// });

// $(function () {
//   $(window).on("scroll", function () {
//     const sliderHeight = $(".js-change-2").height();
//     if (sliderHeight - 30 < $(this).scrollTop()) {
//       $(".js-gnav").addClass("is-black");
//     } else {
//       $(".js-gnav").removeClass("is-black");
//     }
//   });
// });

// function changeColor() {
//   var timing = 40; //変化するタイミングを微調整する

//   var scrollY = window.pageYOffset;
//   var body = document.body;

//   var trigger1 = document.getElementById('js-section-1');
//   var trigger2 = document.getElementById('js-section-2');
//   var trigger3 = document.getElementById('js-section-3');
//   var trigger4 = document.getElementById('js-section-4');

//   var trigger1Y = trigger1.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
//   var trigger2Y = trigger2.getBoundingClientRect().top;
//   var trigger3Y = trigger3.getBoundingClientRect().top;
//   var trigger4Y = trigger4.getBoundingClientRect().top;

//   // 白背景の時はbodyの.bg-is-blackを削除
//   // 黒背景の時はbodyに.bt-is-blackを付与
//   if(trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
//     body.classList.remove('is-white');
//   } else if(trigger4Y - timing > 0 && 0 >= trigger3Y - timing) {
//     body.classList.remove('is-white');
//   } else {
//     body.classList.add('is-white');
//   }
// }

// window.addEventListener('scroll', changeColor);

// $(window).scroll(function () {
//   if($(window).scrollTop() > 20) {
//     $('.js-gnav').addClass('is-white');
//   } else {
//     $('.js-gnav').removeClass('is-white');
//   }
// });