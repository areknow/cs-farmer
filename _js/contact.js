// ====================================================================
// About - js
// 
// Scripts for the about page
// ====================================================================

(function() {

  // ============================================
  // Document ready
  // ============================================
  $(function() {

    initMap()

  });// end document ready

  // ============================================
  // Start google map
  // ============================================
  var map;
  function initMap() {
    var coordinates = {lat: 42.33142699999999, lng: -83.0457538};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 12
    });
    var image = '/assets/images/map-pin.svg';
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: image
    });
    var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}];
    map.setOptions({ styles: styles });
  }

})();
