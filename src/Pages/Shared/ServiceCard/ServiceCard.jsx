import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import StarRatings from "react-star-ratings";


const ServiceCard = ({service}) => {
  const {title,price,image,ratings,description,_id} = service
  return (
    <div className="card rounded-sm shadow-lg shadow-slate-200">
      <div>
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              className="rounded-t rounded-sm w-full"
              src={image}
              alt="img"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="card-body">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>
          {description.slice(0,100)}...
        </p>
        <div className="text-end flex items-center justify-end">
          ({ratings}){' '}
        <StarRatings
              rating={parseInt(ratings)}
              starRatedColor="purple"
              starDimension="20px"
        starSpacing="1px"
              numberOfStars={5}
              name="rating"
            />
        </div>
            
        <hr />
        <div className="flex justify-between font-semibold text-lg mt-4 mb-auto">
          <div className="text-2xl font-bold text-purple-700"> ${price}</div>
          <Link to={`/service/details/${_id}`}>
            <div className="flex items-center hover:text-purple-700 duration-300">
              Know Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
