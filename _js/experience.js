// ====================================================================
// Experience - js
// 
// Scripts for the about page
// ====================================================================

(function() {

  // ============================================
  // Document ready
  // ============================================
  $(function() {

    var hash = window.location.hash;
    if(hash) {
      $('html, body').scrollTop($(hash).offset().top);
      history.replaceState(null, null, ' ');
    }

    // Default options for sliders
    owlOptions = {
      items: 1,
      dots: false,
      loop: true
    }

    // Healthcare slider
    var healthCareSlider = $('.healthcare-slider .owl-carousel');
    healthCareSlider.owlCarousel(owlOptions);
    $('.healthcare-slider .prev').click(function() { healthCareSlider.trigger('prev.owl.carousel'); });
    $('.healthcare-slider .next').click(function() { healthCareSlider.trigger('next.owl.carousel'); });

    // Hospitality slider
    var hospitalitySlider = $('.hospitality-slider .owl-carousel');
    hospitalitySlider.owlCarousel(owlOptions);
    $('.hospitality-slider .prev').click(function() { hospitalitySlider.trigger('prev.owl.carousel'); });
    $('.hospitality-slider .next').click(function() { hospitalitySlider.trigger('next.owl.carousel'); });

    // Commercial slider
    var commercialSlider = $('.commercial-slider .owl-carousel');
    commercialSlider.owlCarousel(owlOptions);
    $('.commercial-slider .prev').click(function() { commercialSlider.trigger('prev.owl.carousel'); });
    $('.commercial-slider .next').click(function() { commercialSlider.trigger('next.owl.carousel'); });

    // Other slider
    var otherSlider = $('.other-slider .owl-carousel');
    otherSlider.owlCarousel(owlOptions);
    $('.other-slider .prev').click(function() { otherSlider.trigger('prev.owl.carousel'); });
    $('.other-slider .next').click(function() { otherSlider.trigger('next.owl.carousel'); });

  });// end document ready

  // ============================================
  // Example function
  // ============================================
  function example() {}

})();
