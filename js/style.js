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






//スクロールした際の動きを関数でまとめる
function setFadeElement(){
  var windowH = $(window).height(); //ウィンドウの高さを取得
  var scroll = $(window).scrollTop(); //スクロール値を取得
    
    //出現範囲の指定
  var contentsTop = Math.round($('.js-sec3').offset().top);  //要素までの高さを四捨五入した値で取得
  var contentsH = $('.js-sec3').outerHeight(true); //要素の高さを取得
    
    //2つ目の出現範囲の指定※任意
  //var contentsTop2 = Math.round($('#area-5').offset().top); //要素までの高さを取得
  //var contentsH2 = $('#area-5').outerHeight(true);//要素の高さを取得

    //出現範囲内に入ったかどうかをチェック
  if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH * 3){
    $("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
    $("#page-top").removeClass("DownMove");   //DownMoveを削除
    $(".hide-btn").removeClass("hide-btn");   //hide-btnを削除
  }//2つ目の出現範囲に入ったかどうかをチェック※任意
   // else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){       
    //$("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
    //$("#page-top").removeClass("DownMove");   //DownMoveを削除
  //}//それ以外は
    else{
        if(!$(".hide-btn").length){       //サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
    $("#page-top").addClass("DownMove");  //DownMoveをクラス追加
    $("#page-top").removeClass("UpMove"); //UpMoveを削除 
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});



// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});