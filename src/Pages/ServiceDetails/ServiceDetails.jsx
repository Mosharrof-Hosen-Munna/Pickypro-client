import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ReviewCard from "./ReviewCard/ReviewCard";
import ReviewForm from "./ReviewForm/ReviewForm";
import SimilarServiceCard from "./SimilarServiceCard/SimilarServiceCard";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";
import { Dna } from  'react-loader-spinner'


const ServiceDetails = () => {
  const [similarService, setSimilarService] = useState([]);
  const [serviceReviews, setServiceReviews] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  const { service, reviews } = useLoaderData();
  const { image, price, description, title, ratings } = service;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = service.title + ' Service Details'
    setServiceReviews(reviews);
    setIsLoading(true)
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        setIsLoading(false)
        setSimilarService(res.data)})
      .catch((err) => console.log(err));
  }, [service._id]);

  const handleReviewDelete = (id)=>{
    axios.delete(`http://localhost:5000/api/review/delete/${id}`)
    .then(res=>{
      if(res.data.deletedCount ===1){
        const oldReviews = [...serviceReviews]
        const newReviews = oldReviews.filter(review=>review._id !== id)
        setServiceReviews(newReviews)
      }
    })
    .catch(err=>console.log(err))
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


  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="md:flex">
          <div className="md:w-2/3 mr-6">
          <PhotoProvider>
          <PhotoView src={image}>
            <img
              className="  w-full"
              src={image}
              alt="img"
            />
          </PhotoView>
        </PhotoProvider>
            <div className="flex justify-between items-center">
              <h1 className="text-4xl text-purple-700 font-semibold my-8">
                {title}
              </h1>
                <div>
                <h1 className="text-3xl text-purple-700 font-semibold">Price: ${price}</h1>
              <div className="flex items-center">
                <span className="text-xl font-semibold">Ratings: </span>
                <StarRatings
                  rating={parseInt(ratings)}
                  starRatedColor="purple"
                  starDimension="20px"
                  starSpacing="1px"
                  numberOfStars={5}
                  name="rating"
                />
                ({ratings})
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="leading-loose text-lg">
                <span className="text-xl font-semibold">
                  Service Descriptions:
                </span>
                {description.slice(0, 400)}
              </h1>
              <br /> <br />
              <h1 className="leading-loose text-lg">
                
                {description.slice(400)}
              </h1>
            </div>
            {
              !serviceReviews[0] && <div>
                <h1 className="text-center font-semibold text-2xl my-8">No Reviews Yet! Write your first Review.</h1>
              </div>
            }
            {serviceReviews[0] && (
              <div className="mt-12">
                <h1 className="text-3xl font-semibold">All Reviews:</h1>

                {serviceReviews.map((review) => (
                  <ReviewCard handleReviewDelete={handleReviewDelete} review={review} />
                ))}
              </div>
            )}
            <ReviewForm
              service={service}
              serviceReviews={serviceReviews}
              setServiceReviews={setServiceReviews}
            />
          </div>
          <div className="md:w-1/3 ml-6">
            <div>
              <h1 className="text-3xl font-semibold text-purple-700 mb-8">
                Similar Services
              </h1>
              <div>
                {similarService.map((service) => (
                  <SimilarServiceCard service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
