import React from 'react';
import ReviewIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

  constructor(props) {
      super(props);
  }

    componentDidMount(){
        
        this.props.fetchReviews(this.props.spot.id);
    }

  render() {
    

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

export default ReviewsIndex;