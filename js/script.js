if ($(window).width() < 767) {
  $(document).on("click", ".main-nav__hamburger", function () {
    $(".main-nav__items--links").toggleClass("active");
    $(this).toggleClass("active");
    $("body").toggleClass("active");
  });

  $(document).on("click", ".main-nav__items--links a", function () {
    $(".main-nav__items--links").toggleClass("active");
    $(".main-nav__hamburger").toggleClass("active");
    $("body").toggleClass("active");
  });
}

var lastScrollTop = 0;

$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  const target = $(".table-list");
  const targetOffsetTop = target.offset().top + target.height();
  const viewportBottom = $(window).scrollTop() + $(window).height();

  if (st > lastScrollTop) {
    $("#header").removeClass("scroll-up");
    $("#header").addClass("scroll-down");
  } else {
    $("#header").addClass("scroll-up");
    $("#header").removeClass("scroll-down");
  }
  lastScrollTop = st;

  if (viewportBottom >= targetOffsetTop) {
    $(".table-list").addClass("active");
  } else {
    $(".table-list").removeClass("active");
  }
});
