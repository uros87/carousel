(function ($) {
  'use strict';
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    items: 1,
    nav: true,
  });
})(jQuery);

(function carouselConfig() {
  if (!config.from.isBefore(moment()) || !config.to.isAfter(moment())) {
    $('.owl-carousel').hide();
  }

  $('.img-1').css('background-image', `url(${config.imageUrl_1})`);
  $(`.item__1 h3`).text(`${config.title_1}`);
  $(`.item__1 p`).text(`${config.paragraph_1}`);

  $('.img-2').css('background-image', `url(${config.imageUrl_2})`);
  $(`.item__2 h3`).text(`${config.title_2}`);
  $(`.item__2 p`).text(`${config.paragraph_2}`);

  $('.img-3').css('background-image', `url(${config.imageUrl_3})`);
  $(`.item__3 h3`).text(`${config.title_3}`);
  $(`.item__3 p`).text(`${config.paragraph_3}`);
})();
