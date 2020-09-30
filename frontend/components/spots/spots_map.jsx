import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

// import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  latitude: latLng.lat(),
  longitude: latLng.lng()
});

const mapCenter = {
  center: {
    lat: 40.728009, 
    lng: -73.989565
  }, 
  zoom: 13
};

class SpotsMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapCenter);
    // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    // if (this.props.singleBench) {
    //   this.props.fetchBench(this.props.benchId);
    // } else {
    //   this.registerListeners();
    //   this.MarkerManager.updateMarkers(this.props.benches);
    // }
  }


  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      // this.props.updateFilter('bounds', bounds);
    });

    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
    });
  }


  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(SpotsMap);
