import reviewsIndex from './reviews_index';
import { connect } from 'react-redux';
import { fetchReviews, destroyReview } from '../../actions/review_actions'

const mSTP = (state) => {
    return{
        reviews: Object.values(state.entities.reviews),
        spots: state.entities.spots,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchReviews: (userId) => dispatch(fetchReviews(userId)),
        destroyReview: (reviewId) => dispatch(destroyReview(reviewId))
    }
    
}

export default connect(mSTP, mDTP)(reviewsIndex);