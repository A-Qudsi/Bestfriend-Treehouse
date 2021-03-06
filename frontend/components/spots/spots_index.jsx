import React from "react";
import SpotsIndexItem from "./spots_index_item";
import Map from "../map/map";

class SpotsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
      <div className="Spots-div">
        <div className="leftside">
          <div className="Spotspage-header">
            <h1 className="Spots-title">{this.props.spots.length} stays</h1>
            <p className="Spots-header">Stays in New York</p>
            <div className="Spots-button">
              <button>Cancellation Policy</button>
              <button>Type of place</button>
              <button>Price</button>
              <button>Instant Book</button>
              <button>More filters</button>
            </div>
            <p className="Spots-covid">
              Review COVID-19 travel restrictions before you book. Learn more
            </p>
          </div>
          <div className="listings">
            {this.props.spots.map((spot) => (
              <div className="spots" key={spot.id}>
                <SpotsIndexItem spot={spot} />
              </div>
            ))}
          </div>
        </div>
        <Map spots={this.props.spots} updateFilter={this.props.updateFilter} />
      </div>
    );
  }
}

export default SpotsPage;
