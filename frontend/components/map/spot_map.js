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
        this.setMarker(this.props.spot);

    }

    setMarker(spot) {
        const position = new google.maps.LatLng(spot.latitude, spot.longitude);
        const image = {
            url: 'https://bestfriend-treehouse-seeds.s3.amazonaws.com/treehouselogoMapIcon.png',
        }

        new google.maps.Marker({
        position,
        map: this.map,
        spotId: spot.id,
        icon: image
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