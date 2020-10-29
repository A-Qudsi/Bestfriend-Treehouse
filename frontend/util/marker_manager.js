export default class MarkerManager {
  constructor(map, handleMarkerClick) {
    this.map = map;
    this.markers = {};
    this.handleMarkerClick = handleMarkerClick;
  }

  updateMarkers(spots) {
    const spotsObj = {};

    spots.forEach((spot) => {
      spotsObj[spot.id] = spot;
      if (!this.markers[spot.id]) this.createMarker(spot);
    });

    Object.keys(this.markers).forEach((spotId) => {
      if (!spotsObj[spotId]) this.removeMarker(this.markers[spotId]);
    });
  }

  createMarker(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });

    marker.addListener("click", () => this.handleMarkerClick(spot));

    this.markers[marker.spotId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}
