import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./ReviewCard/ReviewCard";
import ReviewForm from "./ReviewForm/ReviewForm";
import SimilarServiceCard from "./SimilarServiceCard/SimilarServiceCard";

const ServiceDetails = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="md:flex">
          <div className="md:w-2/3 mr-6">
            <div>
              <img
                src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/confident-photographer-.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-4xl text-purple-700 font-semibold my-4">Video Shooting</h1>
              <div className="flex items-center">
                <span className="text-xl font-semibold">Ratings: {" "}</span>
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
            </div>
            <div className="mt-4">
              <h1 className="leading-loose text-lg"><span className="text-xl font-semibold">Service Descriptions:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magnam perspiciatis necessitatibus nam deleniti voluptatibus maiores eaque sed cum. Aliquid doloribus sunt necessitatibus harum rem ex adipisci soluta recusandae veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a enim voluptas deleniti accusantium, non veniam obcaecati ipsam consectetur? Praesentium eum repellendus consequatur itaque quasi nobis magni incidunt accusamus numquam!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi ab delectus eligendi quisquam cum reiciendis vero laboriosam, aperiam voluptas obcaecati aut, enim porro cupiditate voluptates. Aut cupiditate saepe animi. </h1> <br /> <br />
              <h1 className="leading-loose text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magnam perspiciatis necessitatibus nam deleniti voluptatibus maiores eaque sed cum. Aliquid doloribus sunt necessitatibus harum rem ex adipisci soluta recusandae veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a enim voluptas deleniti accusantium, non veniam obcaecati ipsam consectetur? Praesentium eum repellendus consequatur itaque quasi nobis magni incidunt accusamus numquam!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi ab delectus eligendi quisquam cum reiciendis vero laboriosam, aperiam voluptas obcaecati aut, enim porro cupiditate voluptates. Aut cupiditate saepe animi. </h1>
            </div>
            <div className="mt-12">
              <h1 className="text-3xl font-semibold">All Reviews:</h1>

              <ReviewCard/>
              <ReviewCard/>
              <ReviewCard/>
            </div>
            <ReviewForm/>
          </div>
          <div className="md:w-1/3 ml-6">
            <div>
              <h1 className="text-3xl font-semibold text-purple-700 mb-8">Similar Services</h1>
              <div>
                <SimilarServiceCard/>
                <SimilarServiceCard/>
                <SimilarServiceCard/>
                <SimilarServiceCard/>
                <SimilarServiceCard/>
                <SimilarServiceCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
