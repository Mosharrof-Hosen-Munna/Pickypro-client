import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import useAuth from "../../../Hooks/useAuth";

const ReviewForm = ({service}) => {
  const [ratingNumber, setRatingNumber] = useState(3);
  const [reviewText, setReviewText] = useState("");

  const { user } = useAuth();

  console.log(user)

  // return a text if user not login
  if (!user) {
    return (
      <div className="text-center text-2xl font-semibold mt-8 hover:text-purple-700">
        <Link to="/login"> Please login to add a new review...</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleReviewSubmit = () => {
    
    if(!reviewText){
        return
    }

    const reviewData = {
        message: reviewText,
        rating: ratingNumber,
        author: {
            name:user.displayName,
            photoURL:user.photoURL ? user.photoURl : 'https://placeimg.com/192/192/people',
            uid: user.uid
        },
        serviceId: service._id,
        time: new Date(),

    }
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-12 mb-4">Write a Review</h1>
      <StarRatings
        rating={ratingNumber}
        starRatedColor="blue"
        changeRating={(newRating) => setRatingNumber(newRating)}
        numberOfStars={5}
        name="rating"
      />
      <div>
        <div className="w-full my-4">
          <textarea
            className="textarea w-full shadow"
            rows={8}
            placeholder="Don't be Shy! write your own oponion..."
            value={reviewText}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button onClick={handleReviewSubmit} className="btn btn-primary">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
