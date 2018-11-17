function showMap() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(52.2272148, 21.0844792),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(52.2268148, 21.0843592),
    icon: "https://maps.google.com/mapfiles/kml/shapes/poi.png",
    map: map,
  });
}

google.maps.event.addDomListener(window, 'load', showMap);
