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
});
