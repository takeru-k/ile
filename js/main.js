$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

});

// toggle
$(function(){
	$('.c-toggle__header').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});


const mySwiper = new Swiper('.swiper', {
  // Optional parameters

   slidesPerView: 2.2,
   
   breakpoints: {
    // スライドの表示枚数：500px以上の場合
    800: {
      slidesPerView: 5.5,
      spaceBetween: 60,
    }
  },
  spaceBetween: 16,
  

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// splide
document.addEventListener("DOMContentLoaded", function () {
  // メインスライダー
  const main = new Splide("#main-carousel", {
    type: "fade", // フェード
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    pagination: false, // ページネーション非表示
    arrows: false, // 矢印非表示
  });
  // サムネイル
  const thumbnails = new Splide("#thumbnail-carousel", {
    type: "loop", // ループさせる
    perPage: 4, // サムネイル3枚表示
    pagination: false, // ページネーション非表示
    isNavigation: true, // 他のスライダーのナビゲーションとしてそれぞれのスライドをクリック可能にする
    focus: "center", // アクティブなスライドを中央にする
    arrows: false, // 矢印非表示
  });
  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});

