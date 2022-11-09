import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./ReviewCard/ReviewCard";
import ReviewForm from "./ReviewForm/ReviewForm";
import SimilarServiceCard from "./SimilarServiceCard/SimilarServiceCard";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";

const ServiceDetails = () => {
  const [similarService, setSimilarService] = useState([]);
  const [serviceReviews, setServiceReviews] = useState([]);
  const { service, reviews } = useLoaderData();
  const { image, price, description, title, ratings } = service;

  useEffect(() => {
    window.scrollTo(0, 0);

    setServiceReviews(reviews);

    axios
      .get("http://localhost:5000/api/services")
      .then((res) => setSimilarService(res.data))
      .catch((err) => console.log(err));
  }, [service._id]);

  console.log(serviceReviews);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="md:flex">
          <div className="md:w-2/3 mr-6">
            <div>
              <img className="w-full" src={image} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-4xl text-purple-700 font-semibold my-4">
                {title}
              </h1>
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
            <div className="mt-4">
              <h1 className="leading-loose text-lg">
                <span className="text-xl font-semibold">
                  Service Descriptions:
                </span>{" "}
                {description.slice(0, 400)}{" "}
              </h1>{" "}
              <br /> <br />
              <h1 className="leading-loose text-lg">
                {" "}
                {description.slice(400)}{" "}
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
                  <ReviewCard review={review} />
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