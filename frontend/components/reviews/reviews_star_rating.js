import React, { useState, Fragment } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  function updateStarRating(value) {
    setRating(value);
    props.getRating(value);
  }

  return (
    <Fragment>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => updateStarRating(ratingValue)}
            />
            <i
              className={
                ratingValue <= (hover || rating)
                  ? "fas yellow fa-star"
                  : "fas gray fa-star"
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </Fragment>
  );
};

export default StarRating;
