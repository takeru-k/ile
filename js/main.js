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

//splide
document.addEventListener("DOMContentLoaded", function () {
  initializeSplide("#main-carousel", "#thumbnail-carousel");
  initializeSplide("#main-carousel-kitakami", "#thumbnail-carousel-kitakami");
  initializeSplide("#main-carousel-aki", "#thumbnail-carousel-aki");
});

function initializeSplide(mainSelector, thumbnailSelector) {
  const main = new Splide(mainSelector, {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  const thumbnails = new Splide(thumbnailSelector, {
    type: "loop",
    perPage: 4,
    pagination: false,
    isNavigation: true,
    focus: "center",
    arrows: false,
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
}
