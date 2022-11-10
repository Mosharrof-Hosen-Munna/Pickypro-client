import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../../Hooks/useAuth'
import MySingleReview from './MySingleReview/MySingleReview'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dna } from  'react-loader-spinner'


const MyReviews = () => {
  const [reviews,setReviews] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  
  const notify = () => toast("Review successfully deleted");
  const {user} = useAuth()

  useEffect(()=>{
    window.scrollTo(0, 0);
    document.title = 'My reviews | PickyPro Photography'
    setIsLoading(true)
    fetch(`http://localhost:5000/api/reviews/user/${user?.uid}`)
    .then(res=>res.json())
    .then(data=>{
      setIsLoading(false)
      setReviews(data)})
    .catch(err=>console.log(err))
  },[user])

  const handleReviewDelete = (reviewId)=>{
    axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`)
    .then(res=>{
      if(res.data.deletedCount ===1){
        notify()
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
  
  if(isLoading){
    return <div className="container mx-auto ">
      <div className="flex justify-center items-center py-48">
      <Dna
    visible={true}
    height="250"
    width="250"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />
      </div>
    </div>
  }

  if(!reviews[0]){
    return <div className='min-h-screen'>
      <ToastContainer position="bottom-left"/>
      <h1 className='text-center text-4xl font-semibold text-purple-700 py-12 pb-72'>You have no review yet!</h1>
    </div>
  }

  return (
    <section className='py-12 px-4'>
       <ToastContainer position="bottom-left"/>
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