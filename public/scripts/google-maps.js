function initMap() {
  var currentEvent = window.data.currentEvent;
  var events = window.data.events;
  window.data.map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: currentEvent.latitude,
      lng: currentEvent.longitude
    },
    zoom: 7
  });
  var list = getDOMList();
  list[0].className = 'bold';

  events.forEach(addMarker);
}

function addMarker (point) {
   var marker = new google.maps.Marker({
    position: {
      lat: point.latitude,
      lng: point.longitude
    },
    map: window.data.map,
    title: point.summary
  });
}

function showMarker (element) {
  var lat = element.getAttribute('data-lat');
  var lng = element.getAttribute('data-lng');
  window.data.map.setCenter({
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  });

  var list = getDOMList();
  list.forEach(function (el) { el.className = '';});
  element.className = 'bold';
}

function getDOMList () {
  var nodeList = document.getElementsByTagName('li');
  return Array.prototype.slice.call(nodeList);
}
