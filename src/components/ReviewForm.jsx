import React, { useEffect, useState } from "react";
import "./styles.css";
import StarRating from "./StarRating";

const ReviewForm = ({ product, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [step, setStep] = useState(1);
  const handleRating = (rating) => {
    setRating(rating);
  };
  const handleSubmit = () => {
    if (reviewText === "" || reviewText.length > 100) {
      alert("enter some comment");
    } else {
      onSubmit({ productId: product.id, rating, reviewText });
    }
  };
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  const handleNextStep = () => {
    if (step == 1 && rating === 0) {
      alert("please select Rating");
    } else {
      setStep((prev) => prev + 1);
    }
  };
  useEffect(() => {
    const savedReview = JSON.parse(
      localStorage.getItem(`product_${product.id}_review`)
    );
    if (savedReview) {
      setRating(savedReview.rating);
      setReviewText(savedReview.reviewText);
    } else {
      setRating(0);
      setReviewText("");
    }
  }, [product]);
  return (
    <div className="review__container">
      <h1>{product.title} Review</h1>
      {step === 1 && (
        <>
          <StarRating initialRating={rating} handleRating={handleRating} />
        </>
      )}
      {step === 2 && (
        <div>
          <p>Enter your Feedback</p>
          <textarea
            value={reviewText}
            minLength={30}
            maxLength={100}
            onChange={(e) => setReviewText(e.target.value)}
          />
          {reviewText.length}/100
        </div>
      )}
      {step === 1 && <button onClick={handleNextStep}>Next</button>}
      {step === 2 && <button onClick={handlePreviousStep}>Previous</button>}
      {step === 2 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default ReviewForm;
