import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = () => {
  return (
    <div className="card rounded-sm shadow-lg shadow-slate-200">
      <div>
        <PhotoProvider>
          <PhotoView src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/confident-photographer-.jpg">
            <img
              className="rounded-t rounded-sm"
              src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/confident-photographer-.jpg"
              alt="img"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="card-body">
        <h1 className="text-2xl font-bold">Video Shooting</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas modi
          tempore, explicabo optio quia illo?
        </p>
        <hr />
        <div className="flex justify-between font-semibold text-lg mt-4 mb-auto">
          <div className="text-xl font-bold text-purple-700"> 50$</div>
          <Link to={`/service/details/${45243}`}>
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
