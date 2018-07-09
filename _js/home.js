// ====================================================================
// Home - js
// 
// Scripts for the home page
// ====================================================================

(function() {

  // ============================================
  // Document ready
  // ============================================
  $(function() {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      dots: false,
      loop: true
    });
    $('.slider-nav .prev').click(function() {
      owl.trigger('prev.owl.carousel');
    });
    $('.slider-nav .next').click(function() {
      owl.trigger('next.owl.carousel');
    });

  });// end document ready

  // ============================================
  // Example function
  // ============================================
  function example() {}

})();
