import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ReviewCard = ({ review }) => {

  return (
    <div className="flex items-start bg-white shadow-lg rounded-lg shadow-slate-200 p-4 my-4">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/confident-photographer-.jpg" />
        </div>
      </div>
      <div className="ml-8 w-full">
        <div className="flex items-center justify-between">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Mosharrof Hosen Munna</h3>
            <p>january</p>
          </div>
          <div className="flex text-rose-600">
          <FontAwesomeIcon
                  className=" text-purple-700 "
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className=" text-purple-700 "
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className=" text-purple-700 "
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className=" text-purple-700 "
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className=" text-purple-700 "
                  icon={faStar}
                />
                (4.8)
          </div>
          <div className="text-lg font-bold text-red-600 cursor-pointer">
            Delete
          </div>
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto dignissimos quam vel ipsa aspernatur doloribus laudantium praesentium et vero dolore illum amet voluptatibus eaque, sunt distinctio magni ad sit.</p>
      </div>
    </div>
    // <div className="flex items-start bg-white shadow-lg rounded-lg shadow-slate-200 p-4 my-4">
    //   <div className="avatar">
    //     <div className="w-14 rounded-full">
    //       <img src={review.profilePhoto} />
    //     </div>
    //   </div>
    //   <div className="ml-8 w-full">
    //     <div className="flex items-center justify-between">
    //       <div className="mb-4">
    //         <h3 className="text-lg font-bold">{review.name}</h3>
    //         <p>{review.date}</p>
    //       </div>
    //       <div className="flex text-rose-600">
    //       <FontAwesomeIcon
    //               className=" text-purple-700 "
    //               icon={faStar}
    //             />
    //             <FontAwesomeIcon
    //               className=" text-purple-700 "
    //               icon={faStar}
    //             />
    //             <FontAwesomeIcon
    //               className=" text-purple-700 "
    //               icon={faStar}
    //             />
    //             <FontAwesomeIcon
    //               className=" text-purple-700 "
    //               icon={faStar}
    //             />
    //             <FontAwesomeIcon
    //               className=" text-purple-700 "
    //               icon={faStar}
    //             />
    //             (4.8)
    //       </div>
    //     </div>
    //     <p>{review.comment}</p>
    //   </div>
    // </div>
  );
};

export default ReviewCard;