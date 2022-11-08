import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SimilarServiceCard from '../../ServiceDetails/SimilarServiceCard/SimilarServiceCard';

const MySingleReview = () => {
  return (
    <div className="flex items-start  bg-white shadow-lg rounded-lg shadow-slate-200 p-4 my-8">
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
          <div className='flex'>
          <div className="text-lg py-1 px-2 bg-slate-200 rounded-lg font-bold text-red-600 cursor-pointer">
            Delete
          </div>
          <div className="text-lg py-1 px-2 bg-slate-200 rounded-lg ml-8 font-bold text-purple-700 cursor-pointer">
            Edit 
          </div>
          
          </div>
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto dignissimos quam vel ipsa aspernatur doloribus laudantium praesentium et vero dolore illum amet voluptatibus eaque, sunt distinctio magni ad sit.</p>

        <div className='mt-2'>
            <h1 className='text-xl font-semibold'>For <span className='text-purple-700'>Video Shooting</span> service</h1>
            <SimilarServiceCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi molestias fuga praesentium eaque beatae odit pariatur, repellendus, minus animi ut necessitatibus debitis natus? Cum iure consequatur excepturi sit voluptatem error voluptate quasi ipsum laudantium, perferendis eum beatae iste tempore optio, eius expedita fuga. Temporibus cum deleniti, ducimus nam pariatur reiciendis.</SimilarServiceCard>
        </div>
      </div>
    </div>
  )
}

export default MySingleReview