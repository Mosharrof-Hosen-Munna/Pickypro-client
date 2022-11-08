import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SimilarServiceCard = ({children}) => {
  return (
    <div className='card shadow-lg my-4 rounded-md shadow-slate-200 p-2'>
        <div className='flex'>
            <div className='w-1/3'>
                <img className='w-full rounded-md' src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/confident-photographer-.jpg" alt="" />
            </div>
            <div className='ml-4 w-2/3'>
                <h1 className='font-semibold text-xl'>Video Shooting</h1>
                <div className='mt-2'>
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
                <div className='text-lg'>
                    {children}
                </div>
                <div className='mt-2 font-semibold'>
                   <Link to='/home'> See more Details</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SimilarServiceCard