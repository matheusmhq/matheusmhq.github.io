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

  var projects = [
    {
      title: "Conectando Sócios",
      description: "Desenvolvimento e publicação",
      img: "conectando-socios",
      type: "React app",
      tags: ["React Js", "Bootstrap 4", "Redux"],
      url: "https://conectando-socios.netlify.app",
    },
    {
      title: "Pokédex",
      description: "Desenvolvimento e publicação",
      img: "pokedex",
      type: "React app",
      tags: ["React Js", "CSS3", "Bootstrap 4"],
      url: "https://pokedex-up.netlify.app",
    },
    {
      title: "TMDB React Js",
      description: "Desenvolvimento e publicação",
      img: "tmdb-react-js",
      type: "React app",
      tags: ["React Js", "CSS3", "Bootstrap 4"],
      url: "https://tmdb-movies.netlify.com",
    },
    {
      title: "Melau Decor",
      description: "Desenvolvimento e publicação",
      img: "melau-decor",
      type: "Website",
      tags: ["Wordpress", "CSS3", "Bootstrap 4", "Jquery"],
      url: "https://melaudecor.com.br/",
    },
    {
      title: "Random Movie",
      description: "Desenvolvimento e publicação",
      img: "random-movie",
      type: "React app",
      tags: ["React Js", "CSS3", "Bootstrap 4"],
      url: "https://random-movie.netlify.app",
    },
    {
      title: "Cebolinha Burger",
      description: "Desenvolvimento e publicação",
      img: "cebolinha-burger",
      type: "Website",
      tags: ["Html5", "CSS3", "Bootstrap 4", "Jquery", "Wordpress"],
      url: "https://cebolinhaburger.com",
    },
    {
      title: "Igreja Pentecostal Casa de louvor",
      description: "Desenvolvimento e publicação",
      img: "casa-de-louvor",
      type: "Website",
      tags: ["Html5", "CSS3", "Sass", "Javascript", "Jquery"],
      url: "https://casadelouvor.org.br",
    },
    {
      title: "Vega - Agronegocio",
      description: "Desenvolvimento e publicação",
      img: "vega-agro",
      type: "Landing page",
      tags: ["Html5", "CSS3", "Jquery"],
      url: "http://www.vegaagro.com.br",
    },
    {
      title: "Advocacia",
      description: "Website de empresa fictícia",
      img: "advocacia",
      type: "Website",
      tags: ["Html5", "CSS3", "Jquery"],
      url: "https://matheusmhq.com.br/advocacia-demo/",
    },
  ];

  var html = "";
  projects.map((item) => {
    var tags = "";
    item.tags.map((tag) => {
      tags += `
        <p class="tecnologias-usada text-white bg-dark card-text">
          ${tag}
        </p>
      `;
    });
    html += `
      <div class="col-12 col-sm-6 col-lg-4">
          <div class="card">
            <a
              href="img/portfolio/original/${item.img}.jpg"
              data-lightbox="image-1"
              data-title="${item.title}"
              ><img
                class="card-img-top miniatura"
                src="img/portfolio/miniatura/${item.img}.jpg"
                alt="${item.title}"
                title="${item.title}"
            /></a>
            <div class="card-img-overlay">
              <span class="tag text-white">${item.type}</span>
            </div>
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <div class="row tecnologias-usada-all">
               ${tags}
              </div>
              <a
                target="_blank"
                href="${item.url}"
                title="Ir até o site"
                class="btn text-white color-primary"
                >Visitar</a
              >
            </div>
          </div>
      </div>
    `;
  });
  $(".container-cards").append(html);
});
