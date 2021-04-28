import React from 'react';
import Pictures from './spot_show_pictures';
import ReservationForm from '../reservations/reservation_form';
import SpotBody from './spot_body';
import ReviewForm from '../reviews/reviews_form';
import ReviewContainer from '../reviews/reviews_container'
import SpotMap from '../map/spot_map'

class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    render() {
        debugger
        if (!this.props.spot)  return null;
        const { spot } = this.props;
        
        
        return (
            <div className='showpagediv'>
                <div className='showpageheader'>                 
                    <h1 className='showpagename'>{spot.name}</h1>
                </div>
                <div className='address'>
                    <div className='addressleft'> 
                        <i className="fas fa-star spot-star"></i><span>{spot.average_rating} {spot.address} {spot.city}</span>
                    </div>
                    <div className='addressright'>
                        <div className='faviconsright'>
                            <i className="fas fa-upload"></i> Share
                            <i className="far fa-heart"></i> Save
                        </div>
                    </div>
                </div>
                <Pictures spot={spot} />
                <div className='spotsShowBodyContainer'>
                        <SpotBody spot={spot} />
                    <div className='spotsShowRightSide'>
                        <ReservationForm 
                            spot={spot} 
                            currentUser={this.props.currentUser} 
                            history={this.props.history} 
                            openModal={this.props.openModal}
                            createReservation={this.props.createReservation}
                        />
                    </div>
                </div>
                <div>
                    <ReviewContainer
                        spot = {spot} 
                    />
                </div>
                <div className = 'reviewContainer'>
                    <ReviewForm 
                        spot={spot} 
                        currentUser={this.props.currentUser} 
                        openModal={this.props.openModal}
                        createReview={this.props.createReview}
                    />
                </div>

                    <SpotMap 
                        spot ={spot}
                    />

            </div>
        );
    };
};
export default SpotShow;
