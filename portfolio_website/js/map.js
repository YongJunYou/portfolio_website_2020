"use strict";

function initMap() {
  const myLatLng = {
    lat: 37.558,
    lng: 127.0468
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!"
  });
}
