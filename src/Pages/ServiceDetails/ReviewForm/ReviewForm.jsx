import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import useAuth from '../../../Hooks/useAuth';

const ReviewForm = () => {
    const [ratingNumber,setRatingNumber] = useState(3)

    const {user } = useAuth()

    if(!user){
        return (
            <div className='text-center text-2xl font-semibold mt-8 hover:text-purple-700'>
                <Link to='/login'>  Please login to add a new review...</Link>
            </div>
        )
    }
  return (
    <div>
        <h1 className="text-3xl font-semibold mt-12 mb-4">Write a Review</h1>
        <StarRatings
          rating={ratingNumber}
          starRatedColor="blue"
          changeRating={(newRating)=>setRatingNumber(newRating)}
          numberOfStars={5}
          name='rating'
        />
        <div>
          <div className="w-full my-4">
            <textarea
              className="textarea w-full shadow"
              rows={8}
              placeholder="Don't be Shy! write your own oponion..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="btn btn-primary">Submit Review</button>
          </div>
        </div>
    </div>
  )
}

export default ReviewForm