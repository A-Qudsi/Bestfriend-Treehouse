// import React from react;

// const ReviewEditForm = (props) => {
//     const [rating, setRating] = useState(props.review.rating);
//     const [body, setBody] = useState(props.review.body);

//     const updateBodyHandler = event => {
//         setBody(event.currentTarget.value);
//     }

//     const updateRatingHandler = event => {
//         setRating(event.currentTarget.value);
//     }

//     return (
//         <form className="reviewForm">
//             <div className="reviewsFormDiv">
//                 <input
//                     className="reviewsBodyTextarea"
//                     type="textarea"
//                     value={body}
//                     onChange={updateBodyHandler}
//                 />
//             </div>
//             <div className="reviewsRatingDiv">
//                 <StarRating />
//             </div>
//             <button className="submit-button" onClick={(e) => submitReview(e)}>
//                 Submit Review
//             </button>
//         </form>
//     )
// }

// export default ReviewEditForm;
