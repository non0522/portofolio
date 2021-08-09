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
  $('.p-gnav a[href]').on('click', function(event) {
    $('.js-hamburger').trigger('click');
});

// ==========================================================================
//ハンバーガーボタン用jQuery
// jQuery( function( $ ) {
//   $( ".js-slide" ).hover (function() {
//     $( this ).toggleClass( "is-appear" );
//     $( ".c-diagram__middle" ).toggleClass( "is-appear" );
//   } );
// } );