import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../../Hooks/useAuth'
import MySingleReview from './MySingleReview/MySingleReview'

const MyReviews = () => {
  const [reviews,setReviews] = useState([])
  
  const {user} = useAuth()

  useEffect(()=>{
    fetch(`http://localhost:5000/api/reviews/user/${user?.uid}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setReviews(data)})
    .catch(err=>console.log(err))
  },[user])

  const handleReviewDelete = (reviewId)=>{
    axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`)
    .then(res=>{
      if(res.data.deletedCount ===1){
        const oldReviews = [...reviews]
        const newReviews = oldReviews.filter(review=>review._id !== reviewId)
        setReviews(newReviews)
      }
    })
    .catch(err=>console.log(err))
  }
  const handleReviewUpdate = (review,index)=>{
    const newReviews = [...reviews]
    newReviews[index] = review
    setReviews(newReviews)
  }

  if(!reviews[0]){
    return <div className='min-h-screen'>
      <h1 className='text-center text-4xl font-semibold text-purple-700 py-12 pb-72'>You have no review yet!</h1>
    </div>
  }

  return (
    <section className='py-12'>
        <div className="container mx-auto">
            <div>
                <h1 className='text-4xl font-semibold'>My All Reviews</h1>
                <div className="w-1/12 p-1 bg-purple-700 mt-3"></div>
            </div>
            <div className='mt-4 w-3/4 mx-auto'>
               {
                reviews.map((review,index)=><MySingleReview handleReviewUpdate={handleReviewUpdate} index={index} handleReviewDelete={handleReviewDelete} review={review}/>)
               }
            </div>
        </div>
    </section>
  )
}

export default MyReviews