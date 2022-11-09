import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
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
  return (
    <section className='py-12'>
        <div className="container mx-auto">
            <div>
                <h1 className='text-4xl font-semibold'>My All Reviews</h1>
                <div className="w-1/12 p-1 bg-purple-700 mt-3"></div>
            </div>
            <div className='mt-4 w-3/4 mx-auto'>
               {
                reviews.map(review=><MySingleReview review={review}/>)
               }
            </div>
        </div>
    </section>
  )
}

export default MyReviews