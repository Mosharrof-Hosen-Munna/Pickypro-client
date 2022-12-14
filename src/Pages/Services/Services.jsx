import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dna } from  'react-loader-spinner'
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services,setServices] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title= 'Services | Making Precious Moments of Wedding.'

    axios.get('https://pickypro-server.vercel.app/api/services')
    .then(res=>{
      setServices(res.data)
      setIsLoading(false)})
    .catch(err=>console.log(err))

  }, [])

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
        <div className="text-start">
          <h2 className="text-purple-700 text-center md:text-start italic text-2xl mb-4 font-semibold">
            My Services
          </h2>
          <h1 className="md:text-5xl text-center md:text-start text-3xl font-semibold ">
            Making Precious Moments <br className="mt-4 block"/> of Wedding.
          </h1>
          <div className="md:w-1/12 w-3/12 mx-auto md:mx-0 p-1 bg-purple-700 mt-3"></div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
             {  services.map(service=><ServiceCard service={service}/>)}
        </div>
      </div>
    </section>
  );
};

export default Services;
