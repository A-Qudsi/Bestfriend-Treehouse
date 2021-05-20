import React, { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reset, setReset] = useState(props.reset)

  function updateStarRating(value) {
      console.log(reset)
    setReset(false)
    setRating(value);
    props.getRating(value);
  }

  if (reset) {
    setRating(null)
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label  key={i}>
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
    </div>
  );
};

export default StarRating;
