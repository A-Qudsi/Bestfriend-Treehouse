import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  latitude: latLng.lat(),
  longitude: latLng.lng()
});

const mapCenter = {
  center: {
    lat: 40.7609395, 
    lng: -73.9874663
  }, 
  zoom: 13
};

class SpotsMap extends React.Component {

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, mapCenter);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
    
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.updatefilter("bounds", bounds);
    });
    
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }


  render() {
    
    return (
      <div id="map" ref="map">
      </div>
    );
  }
}

export default withRouter(SpotsMap);