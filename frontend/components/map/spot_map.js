import React from "react";
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";


class SpotMap extends React.Component {
    

    componentDidMount() {
        debugger
        const mapCenter = {
        center: { 
            lat: this.props.spot.latitude, 
            lng: this.props.spot.longitude 
        },
        zoom: 14,
        };

        const map = ReactDOM.findDOMNode(this.refs.map)
        this.map = new google.maps.Map(map, mapCenter);
        this.createMarker(this.props.spot);

    }

    createMarker(spot) {
        const position = new google.maps.LatLng(spot.latitude, spot.longitude);

        new google.maps.Marker({
        position,
        map: this.map,
        spotId: spot.id,
        });
    }

    render() {
        return (
            <div id="spot-map" ref="map" >
            </div>
        );
    }
}

export default withRouter(SpotMap);