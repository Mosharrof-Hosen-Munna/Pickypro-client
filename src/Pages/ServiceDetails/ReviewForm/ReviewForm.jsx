import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import useAuth from "../../../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewForm = ({ service,serviceReviews,setServiceReviews }) => {
  const [ratingNumber, setRatingNumber] = useState(3);
  const [reviewText, setReviewText] = useState("");

  const { user } = useAuth();

  const notify = () => toast("Review successfully submitted!");

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

  const handleReviewSubmit = (e) => {
    if (!reviewText) {
      return;
    }

    const reviewData = {
      message: reviewText,
      rating: ratingNumber,
      author: {
        name: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      },
      serviceId: service._id,
      time: new Date(),
    };

    axios
      .post("https://pickypro-server.vercel.app/api/review/create", reviewData, {
        headers:{
          authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      .then((res) => {
        notify()
        const newServiceReviews = [res.data,...serviceReviews]
        setServiceReviews(newServiceReviews)

        setReviewText('')
        console.log(res.data)})
      .catch((err) => console.log(err));
    
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-12 mb-4">Write a Review</h1>
      <ToastContainer position="bottom-left"/>
      <StarRatings
        rating={ratingNumber}
        starRatedColor="purple"
        changeRating={(newRating) => setRatingNumber(newRating)}
        numberOfStars={5}
        name="rating"
      />
      <div >
        <div className="w-full my-4">
          <textarea
            className="textarea text-lg w-full shadow"
            rows={8}
            placeholder="Don't be Shy! write your own oponion..."
            value={reviewText}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button onClick={handleReviewSubmit} className="btn bg-purple-700">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
