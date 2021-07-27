import React, { useState, useEffect } from "react";
import ReviewIndexItem from "./reviews_index_item";

const ReviewsIndex = props => {
  // constructor(props) {
  //   super(props);

  //   this.state = ({
  //     reviews: this.props.reviews,
  //     submitted: false
  //   })
  // }

  // const [reviews, setReviews] = useState(props.reviews);

  useEffect(() => {
    props.fetchReviews(props.spot.id);
  },[])

  // componentDidMount() {
  //   this.props.fetchReviews(this.props.spot.id);
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.reviews !== this.props.reviews) {
  //     this.setState({
  //       reviews: this.props.reviews,
  //     });
  //   }
  // }

  // render() {
    const { reviews } = props;
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

    // debugger;

    return (
      <React.Fragment>
        <p className="reviewsHeader">
          <i className="fas yellow fa-star"></i> {average} {sentenceReview}
        </p>
        <ul className="review-container">
          {reviews.map((review) => (
            <li key={review.id} className="review-item">
              <ReviewIndexItem
                spot={props.spot}
                review={review}
                currentUser={props.currentUser}
                deleteReview={props.deleteReview}
                fetchSpots={props.fetchSpots}
              />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  // }
}

export default ReviewsIndex;
