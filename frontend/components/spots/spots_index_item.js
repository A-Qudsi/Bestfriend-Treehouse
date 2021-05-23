import React from "react";
import { Link } from "react-router-dom";

class SpotsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spotId = this.props.spot.id;
    const { name, description, maxGuests, price, average_rating } = this.props.spot;
    return (
      <Link to={`/spots/${spotId}`} key={spotId}>
        <div className="spot-index-item">
          <div className="index-item-image">
            <img src={this.props.spot.photoUrls[1]} />
          </div>
          <div className="index-item-info">
            <div className='index-item-header'>
              <p className="index-item-name">{name}</p>
              {average_rating} <i className="fas yellow fa-star"></i>
            </div>
            <p className="index-item-description">{description}</p>
            <div className="line"></div>
            <span className="index-item-details">{maxGuests} · guests </span>
          </div>
          <div className="price">$ {price} / night </div>
        </div>
      </Link>
    );
  }
}

export default SpotsIndexItem;
