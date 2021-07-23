import React from "react";
import ReviewIndexItem from "./reviews_index_item";

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
    };
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.spot.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviews != this.props.reviews) {
      this.setState({
        reviews: this.props.reviews,
      });
    }
  }

  render() {
    const { reviews } = this.state;
    let total = 0;
    reviews.forEach((rev) => (total += rev.rating));
    let average = (total / reviews.length).toFixed(2);

    return (
      <React.Fragment>
        <p className="reviewsHeader">
          <i className="fas yellow fa-star"></i> {average} · {this.props.reviews.length} reviews
        </p>
        <ul className="review-container">
          {this.props.reviews.map((review) => (
            <li key={review.id} className="review-item">
              <ReviewIndexItem
                review={review}
                currentUser={this.props.currentUser}
                deleteReview={this.props.deleteReview}
              />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ReviewsIndex;
