

var stateCircle;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(37.09024, -95.712891),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Construct the circle for each value in statemap.
  // Note: We scale the area of the circle based on the population.
  for (var state in statemap) {
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpastate: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpastate: 0.35,
      map: map,
      center: statemap[state].center,
      radius: statemap[state].population * 500000
    };
    // Add the circle for this state to the map.
    stateCircle = new google.maps.Circle(populationOptions);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

