/*-------Menu-------*/
const burger = document.querySelector(".block__menu-burger");
const menu = document.querySelector(".block__menu-nav");

burger.addEventListener("click", function () {
   menu.classList.toggle('open');
   burger.classList.toggle('cross');
});
