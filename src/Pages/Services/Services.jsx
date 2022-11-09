import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {

  const services = useLoaderData()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title= 'Services | Making Precious Moments of Wedding.'
  }, [])

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-start">
          <h2 className="text-purple-700 italic text-2xl mb-4 font-semibold">
            My Services
          </h2>
          <h1 className="text-5xl font-semibold leading-tight">
            Making Precious Moments <br /> of Wedding.
          </h1>
          <div className="w-1/12 p-1 bg-purple-700 mt-3"></div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map(service=><ServiceCard service={service}/>)}
        </div>
      </div>
    </section>
  );
};

export default Services;
