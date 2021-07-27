import React, { useState, useEffect } from "react";
import ReviewIndexItem from "./reviews_index_item";

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      reviews: this.props.reviews
    })
  }

  // const [reviews, setReviews] = useState(props.reviews)

  componentDidMount() {
    this.props.fetchReviews(this.props.spot.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviews !== this.props.reviews) {
      this.setState({
        reviews: this.props.reviews,
      });
    }
  }

  render() {
    const { reviews } = this.state;
    debugger;

    let total = 0;
    reviews.forEach((rev) => (total += rev.rating));

    let average;
    if (reviews.length) {
      average = (total / reviews.length).toFixed(2);
    } else {
      average = "No reviews yet";
    }

    let strReviews =
      reviews.length === 0 ? "" : reviews.length === 1 ? "review" : "reviews";

    let sentenceReview = reviews.length
      ? " · " + reviews.length + ` ${strReviews}`
      : "";

    debugger;

    return (
      <React.Fragment>
        <p className="reviewsHeader">
          <i className="fas yellow fa-star"></i> {average} {sentenceReview}
        </p>
        <ul className="review-container">
          {reviews.map((review) => (
            <li key={review.id} className="review-item">
              <ReviewIndexItem
                spot={this.props.spot}
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
