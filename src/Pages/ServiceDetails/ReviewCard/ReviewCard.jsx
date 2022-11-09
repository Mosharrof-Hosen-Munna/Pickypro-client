import React from "react";
import StarRatings from "react-star-ratings";
import Moment from 'react-moment';
import useAuth from "../../../Hooks/useAuth";
const ReviewCard = ({ review,handleReviewDelete }) => {
  const {author, message,rating,time,_id} = review

  const {user } = useAuth()

  return (
    <div className="flex items-start bg-white shadow-lg rounded-lg shadow-slate-200 p-4 my-4">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={author.photoURL} />
        </div>
      </div>
      <div className="ml-8 w-full">
        <div className="flex items-center justify-between">
          <div className="mb-4">
            <h3 className="text-xl font-bold">{author.name}</h3>
            <Moment fromNow>{new Date(time)}</Moment>
          </div>
          <div className="flex text-rose-600">
          <StarRatings
              rating={parseInt(rating)}
              starRatedColor="purple"
              starDimension="20px"
        starSpacing="1px"
              numberOfStars={5}
              name="rating"
            />
                ({rating})
          </div>
          {user.uid === author.uid && <div onClick={()=>handleReviewDelete(review._id)} className="text-lg px-2 py-1 bg-slate-200 rounded-md font-bold text-red-600 cursor-pointer">
            Delete
          </div>}
        </div>
        <p className=" text-lg mb-6 px-3 py-2 bg-slate-200 rounded-md">{message}</p>
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