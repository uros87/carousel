$(document).ready(function () {
  (function carouselConfig() {
    config.forEach((el) => {
      if (el.from.isBefore(moment()) && el.to.isAfter(moment())) {
        $('.owl-carousel').append(
          `
          <div class="item">
            <div>
              <h3>${el.title}</h3>
              <p>${el.paragraph}</p>
            </div>
            <div>
              <img src="${el.imageUrl}" class="img"></img>
            </div>
          </div
          `
        );
      }
    });
  })();

  (function ($) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      items: 1,
      nav: true,
    });
  })(jQuery);
});
