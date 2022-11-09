import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const SimilarServiceCard = ({ children, service }) => {
  const { image, price, description, title, ratings } = service;
  return (
    <div className="card shadow-lg my-4 rounded-md shadow-slate-200 p-2">
      <div className="flex">
        <div className="w-1/3">
          <img
            className="w-full rounded-md"
            src={image}
            alt=""
          />
        </div>
        <div className="ml-4 w-2/3">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p>{description.slice(0,70)}...</p>
          <div className="mt-2">
            <StarRatings
              rating={parseInt(ratings)}
              starRatedColor="purple"
              starDimension="20px"
              starSpacing="1px"
              numberOfStars={5}
              name="rating"
            />
            ({ratings})
          </div>
          <div className="text-lg">{children}</div>
          <div className="mt-2 font-semibold">
            <Link to={`/service/details/${service._id}`}> See more Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarServiceCard;
