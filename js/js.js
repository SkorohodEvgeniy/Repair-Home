/*-------Menu-------*/
const burger = document.querySelector(".block__menu-burger");
const menu = document.querySelector(".block__menu-nav");

burger.addEventListener("click", function () {
   menu.classList.toggle('open');
   burger.classList.toggle('cross');
});


/**
 * 
 * slider
 */
$(document).ready(function () {
   $('.reviews').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      dots: true,
      appendDots: $(".arrow__btns"),
      prevArrow:
         '<button id="prev" type="button" class="slick-prevBtn slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M19 12.5L5 12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19.5L5 12.5L12 5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow:
         '<button id="next" type="button" class="slick-nextBtn slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M5 12.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L19 12.5L12 19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
   });
});

/*------------ Accordion---------------*/
$(document).ready(function () {
   $(".accordion__title").click(function (event) {
      if ($(".accordion").hasClass("one")) {
         $(".accordion__title").not($(this)).removeClass("active");
         $(".accordion__text").not($(this).next()).slideUp(400);
      }
      $(this).toggleClass("active").next().slideToggle(300);

      if ($(".accordion__title").not().hasClass("active")) {
         $(".accordion__block").css("backgroundColor", "");
      }

      if ($(this).hasClass("active")) {
         $(this).parent().css("backgroundColor", "#F3F5F9");
      } else {
         $(".accordion__block").css("backgroundColor", "");
      }

   });
});