import React from 'react'
import MySingleReview from './MySingleReview/MySingleReview'

const MyReviews = () => {
  return (
    <section className='py-12'>
        <div className="container mx-auto">
            <div>
                <h1 className='text-4xl font-semibold'>My All Reviews</h1>
                <div className="w-1/12 p-1 bg-purple-700 mt-3"></div>
            </div>
            <div className='mt-4 w-3/4 mx-auto'>
                <MySingleReview/>
                <MySingleReview/>
                <MySingleReview/>
                <MySingleReview/>
                <MySingleReview/>
            </div>
        </div>
    </section>
  )
}

export default MyReviews