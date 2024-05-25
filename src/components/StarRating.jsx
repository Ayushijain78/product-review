import React, { useState } from "react";
import "./styles.css";

const StarRating = ({ initialRating, handleRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div>
      <h3>Star Rating</h3>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            onClick={() => handleRating(ratingValue)}
            onMouseOver={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            <span
              className={`star ${
                ratingValue <= (hover || initialRating) ? "on" : "off"
              }`}
            >
              ★
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
