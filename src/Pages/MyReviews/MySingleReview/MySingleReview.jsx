import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import SimilarServiceCard from "../../ServiceDetails/SimilarServiceCard/SimilarServiceCard";
import StarRatings from "react-star-ratings";
import axios from "axios";

const MySingleReview = ({ review,index, handleReviewDelete ,handleReviewUpdate}) => {
  
  const [show, setShow] = useState(false);
  const [ratingNumber, setRatingNumber] = useState(review.rating);
  const [service, setService] = useState({});
  const [reviewMessage, setReviewMessage] = useState("");

  useEffect(() => {
    setReviewMessage(review.message);
    axios
      .get(`https://pickypro-server.vercel.app/api/service/${review.serviceId}`)
      .then((res) => setService(res.data.service))
      .catch((err) => console.log(err));
  }, []); 

  useEffect(()=>{
    setReviewMessage(review.message);
    setRatingNumber(review.rating)
  },[review]) 
  
  const handleSaveReview = () => {

    axios
      .put(`https://pickypro-server.vercel.app/api/review/update/${review._id}`, {
        rating: ratingNumber,
        message: reviewMessage,
        time:new Date()
      })
      .then((res) => {
        setShow(false);
        handleReviewUpdate(res.data,index)
      })
      .catch((err) => console.log(err));
  };

  return (
   <div>
     <div className="flex items-start  bg-white shadow-lg rounded-lg shadow-slate-200 p-4 my-8">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={review.author.photoURL} />
        </div>
      </div>
      <div className="ml-8 w-full">
        <div className="flex items-center justify-between">
          <div className="mb-2">
            <h3 className="text-xl font-bold">{review.author.name}</h3>
            <Moment fromNow>{new Date(review.time)}</Moment>
          </div>
          <div className="flex items-center text-rose-600">
            <div>
              <StarRatings
                rating={review.rating}
                starRatedColor="purple"
                starDimension="20px"
                starSpacing="1px"
                numberOfStars={5}
                name="rating"
              />
            </div>
            <div className="ml-1">({review.rating})</div>
          </div>
          <div className="flex">
            <div onClick={()=>handleReviewDelete(review._id)} className="text-lg py-1 px-2 bg-slate-200 rounded-lg font-bold text-red-600 cursor-pointer">
              Delete
            </div>
            <div
              onClick={() => setShow(true)}
              className="text-lg py-1 px-2 bg-slate-200 rounded-lg ml-8 font-bold text-purple-700 cursor-pointer"
            >
              Edit
            </div>
          </div>
        </div>
        {show && (
          <div>
            <StarRatings
              rating={ratingNumber}
              starRatedColor="purple"
              changeRating={(newRating) => setRatingNumber(newRating)}
              numberOfStars={5}
              name="rating"
            />
            <div>
              <div className="w-full my-4">
                <textarea
                  className="textarea text-lg w-full shadow"
                  rows={4}
                  value={reviewMessage}
                  onChange={(e) => setReviewMessage(e.target.value)}
                  placeholder="Don't be Shy! write your own oponion..."
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSaveReview}
                  className="btn bg-purple-700"
                >
                  Save Review
                </button>
              </div>
            </div>
          </div>
        )}
        {!show && (
          <div>
            <p className=" text-lg mb-6 px-3 py-2 bg-slate-200 rounded-md">
              {review.message}
            </p>
          </div>
        )}
        <div className="mt-2">
          <h1 className="text-2xl font-semibold">
            For <span className="text-purple-700">{service.title}</span> service
          </h1>
          {service.description && (
            <SimilarServiceCard isShow={true} service={service}>
              {service.description.slice(0, 200)} ...
            </SimilarServiceCard>
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default MySingleReview;
