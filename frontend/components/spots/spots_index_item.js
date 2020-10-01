import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotsIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        const spotId = this.props.spot.id;
        this.props.history.push(`/spots/${spotId}`);
    }

    render() {
        const { name, description, maxGuests, price } = this.props.spot;
        return (
            <div className="spot-index-item" onClick={this.handleClick}>
                <div className='index-item-image'>
                    
                    <img src={this.props.spot.photoUrls[1]} />
                </div>
                <div className="index-item-info">
                    <p className="index-item-name">{name}</p>
                    <p className="index-item-description">{description}</p>
                    <div className='line'></div>
                    <span className="index-item-details">{maxGuests} · guests </span>
                </div>
                <div className='price'>$ {price} / night </div>
            </div>
        );
    }
}

export default withRouter(SpotsIndexItem);
