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
    const image = {
        url: 'https://bestfriend-treehouse-seeds.s3.amazonaws.com/treehouselogoMapIcon.png',
    }
    const position = new google.maps.LatLng(spot.latitude, spot.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id,
      icon: image
    });

    // marker.addListener("click", () => this.handleMarkerClick(spot));
    this.markers[marker.spotId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}
