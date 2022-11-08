import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <div className="card rounded-sm shadow-lg shadow-slate-200">
      <div>
        <img
          className="rounded-t rounded-sm"
          src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/confident-photographer-.jpg"
          alt="img"
        />
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
          <Link to={`/courses/details/${45243}`}>
            <div className="flex items-center hover:text-purple-700 duration-300">
              Know Details
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
