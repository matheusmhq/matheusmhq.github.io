$(document).ready(function () {
  var date = new Date();
  var year = date.getFullYear();
  $(".year").text(year);

  //FECHAR MENU BOOTSTRAP APOS CLICK
  $(".navbar-nav li a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  //SCROLLING MENU
  var sections = $("section"),
    nav = $("nav"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("menu-active");
        sections.removeClass("menu-active");

        //$(this).addClass('menu-active');
        nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .addClass("menu-active");
      }
    });
  });

  nav.find("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height,
      },
      500
    );

    return false;
  });

  //HEADER FIXO
  $(function () {
    var nav = $("header");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 75) {
        nav.addClass("menu-fixo");
        $(".nav-edit").addClass("no-padding");
      } else {
        nav.removeClass("menu-fixo");
        $(".nav-edit").removeClass("no-padding");
      }
    });
  });
});
