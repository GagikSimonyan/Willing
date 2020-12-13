$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    // dots:true,
    slidesToShow: 4,
    // slidesToScroll: 3,
    // autoplay:true,
    // speed:1000,
    // autoplaySpeed:800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".menu__btn").click(function (e) {
    e.preventDefault();
    $(".menu__wrap").addClass("menu__wrap--active");
  });

  $(".menu__btn--close").click(function (e) {
    e.preventDefault();
    $(".menu__wrap").removeClass("menu__wrap--active");
  });
});
