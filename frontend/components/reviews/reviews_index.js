import React from 'react';
import ReviewIndexItem from './reviews_index_item';

class ReservationsIndex extends React.Component {
  constructor(props) {
      super(props);
  }

    componentDidMount(){
        debugger
      this.props.fetchReviews(this.props.spot.id);
    }

  render() {
    debugger
    return(
        <ul className='review-container'>
          { this.props.reviews.map( (review) => 
          <li key={review.id} className="review-item">
            <ReviewIndexItem 
                review = {review} />
            </li>)
          }
        </ul>
    )
  }
  
}

export default ReservationsIndex;