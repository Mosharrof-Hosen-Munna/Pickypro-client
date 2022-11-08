import React from "react";
import chooseMeImg from "../../../images/choose-me.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheck, faCamera, faHeadset } from '@fortawesome/free-solid-svg-icons'

const WhyChooseMe = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img className="w-full p-0 md:px-44" src={chooseMeImg} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <h3 className=" text-purple-700 italic text-2xl font-semibold">
                Why Choose Me
              </h3>
              <h1 className="text-6xl font-semibold mb-8 mt-6">
                Adding the memories of every moment
              </h1>
              <div className="flex items-start my-6">
                <div className="mr-4">
                <FontAwesomeIcon className="p-4 text-purple-700 bg-slate-300 rounded-full text-3xl " icon={faCheck}/>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-2 text-purple-700">Professional</h1>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptates quidem mollitia exercitationem a?</p>
                </div>
              </div>
              <div className="flex items-start my-6">
                <div className="mr-4">
                <FontAwesomeIcon className="p-4 text-purple-700 bg-slate-300 rounded-full text-3xl " icon={faCamera}/>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-2 text-purple-700">Experienced Photography</h1>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptates quidem mollitia exercitationem a?</p>
                </div>
              </div>
              <div className="flex items-start my-6">
                <div className="mr-4">
                <FontAwesomeIcon className="p-4 text-purple-700 bg-slate-300 rounded-full text-3xl " icon={faHeadset}/>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-2 text-purple-700">Support 24/7</h1>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptates quidem mollitia exercitationem a?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
