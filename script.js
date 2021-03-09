$(document).ready(function () {
  (function carouselConfig() {
    config.forEach((el) => {
      if (el.from.isBefore(moment()) && el.to.isAfter(moment())) {
        let itemDiv = $('<div/>', {
          class: 'item',
        }).appendTo('.owl-carousel');

        let firstItemDiv = $('<div/>').appendTo(itemDiv);

        let h = document.createElement('h3');
        h.innerHTML = `${el.title}`;

        let p = document.createElement('p');
        p.innerHTML = `${el.paragraph}`;

        firstItemDiv.append(h, p);

        $('<div/>', {
          class: 'img',
          css: {
            backgroundImage: `url(${el.imageUrl})`,
          },
        }).appendTo(itemDiv);
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
