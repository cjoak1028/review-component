import React from "react";
import "../css/ReviewSection.css";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";

const SAMPLE_DATA = [
  {
    first: "Michael",
    last: "Hong",
    review: "I hate this course!",
    rating: 4,
  },
  {
    first: "David",
    last: "Kim",
    review: "I love this course!",
    rating: 3,
  },
  {
    first: "Jenny",
    last: "Kim",
    review: "I failed this course!",
    rating: 2,
  },
];

const ReviewSection = () => {
  return (
    <div className="review-section">
      <ReviewForm />
      <ReviewsList data={SAMPLE_DATA} />
    </div>
  );
};

export default ReviewSection;
