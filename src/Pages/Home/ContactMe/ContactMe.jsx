import React from "react";
import weddingImg from "../../../images/elegant-wedding.jpg";

const ContactMe = () => {
  return (
    <section className="md:py-24 px-4 py-12">
      <div className="container mx-auto">
        <div className="md:flex">
          <div className="w-full md:w-2/4 mb-8 md:mb-0">
            <h1 className="md:text-6xl text-4xl text-center md:text-start mb-4 font-semibold ">
              I'd love to hear from you
            </h1>
            <p className="text-lg text-purple-700 text-center md:text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              rerum.
            </p>
            <div className="mt-12">
              <div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input w-full max-w-lg  shadow"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input w-full max-w-lg shadow"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your phone"
                      className="input w-full max-w-lg  shadow"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Subject"
                      className="input w-full max-w-lg shadow"
                    />
                  </div>
                </div>
                <div className="w-full my-4">
                  <textarea
                    className="textarea w-full shadow"
                    rows={6}
                    placeholder="Write your comment"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button className="btn bg-purple-700">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/4 md:ml-8">
            <div className="w-5/6 mx-auto text-center">
              <img
                className=" p-12 border-t-8 border-purple-700 rounded-t-full"
                src={weddingImg}
                alt=""
              />
              <div className="shadow-md">
                <h1 className="text-2xl font-semibold text-purple-700">
                  GRAVITATION IS NOT RESPONSIBLE FOR PEOPLE FALLING IN LOVE.
                </h1>
                <h4 className="text-xl font-semibold py-3">—Albert Einstein</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
