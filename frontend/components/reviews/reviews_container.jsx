import reviewsIndex from './reviews_index';
import { connect } from 'react-redux';
import { fetchReviews, destroyReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    debugger
    return{
        spot: ownProps.spot,
        // reviews: Object.values(ownProps.spot.reviews),
    }
}

const mDTP = dispatch => {
    return {
        fetchReviews: (userId) => dispatch(fetchReviews(userId)),
        destroyReview: (reviewId) => dispatch(destroyReview(reviewId))
    }
    
}

export default connect(mSTP, mDTP)(reviewsIndex);