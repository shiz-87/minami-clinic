document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".c-hamburger");
  const drawer = document.querySelector(".js-drawer");

  if (hamburger && drawer) {
    hamburger.addEventListener("click", function () {
      // 1. ハンバーガーボタンのアニメーション切り替え
      hamburger.classList.toggle("is-active");

      // 2. ドロワーメニューの表示切り替え
      drawer.classList.toggle("is-active");

      // 3. 背景（body）のスクロール固定切り替え
      document.body.classList.toggle("u-noscroll");
    });
  }

  // フロントページ用Swiperの初期化
  const topFvSwiper = new Swiper(".p-top-fv__swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,

    pagination: {
      el: ".p-top-fv__pagination",
    },

    navigation: {
      nextEl: ".p-top-fv__button-next",
      prevEl: ".p-top-fv__button-prev",
    },
  });
});
