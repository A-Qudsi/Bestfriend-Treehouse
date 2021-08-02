import * as ReviewApiUtil from "../util/review_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  };
};

export const receiveReview = ({ review }, isUpdated ) => {
  return {
    type: RECEIVE_REVIEW,
    review,
    isUpdated
  };
};

export const removeReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    reviewId: review.review.id,
    review: review.review
  };
};

export const fetchReviews = (spotId) => (dispatch) =>
  ReviewApiUtil.fetchReviews(spotId).then((reviews) =>
    dispatch(receiveReviews(reviews))
  );

export const fetchReview = (review) => (dispatch) =>
  ReviewApiUtil.fetchReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const createReview = (review) => (dispatch) =>
  ReviewApiUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const updateReview = (review) => (dispatch) =>
  ReviewApiUtil.updateReview(review).then((review) =>
    dispatch(receiveReview(review, true))
  );

export const deleteReview = (reviewId) => (dispatch) =>
  ReviewApiUtil.deleteReview(reviewId).then((reviewId) =>
    dispatch(removeReview(reviewId))
  );
