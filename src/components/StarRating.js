import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return <div>{[...Array(5)].fill(<FaStar size={20} />)}</div>;
};

export default StarRating;
