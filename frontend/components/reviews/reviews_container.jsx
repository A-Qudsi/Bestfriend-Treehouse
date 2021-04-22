import ReviewsIndex from './reviews_index';
import { connect } from 'react-redux';
import { fetchReviews, destroyReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    debugger
    return{
        spot: ownProps.spot,
        reviews: ownProps.spot.review_ids.map(review_id => state.entities.reviews[review_id]).filter(review => review),
    }
}

const mDTP = dispatch => {
    return {
        fetchReviews: (userId) => dispatch(fetchReviews(userId)),
        destroyReview: (reviewId) => dispatch(destroyReview(reviewId))
    }
    
}

export default connect(mSTP, mDTP)(ReviewsIndex);