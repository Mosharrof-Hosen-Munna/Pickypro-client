import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../../Shared/ServiceCard/ServiceCard'

const MyOffer = ({services}) => {
  return (
    <div className='container mx-auto py-24 px-4'>
        <div className='text-center'>
            <h2 className='text-purple-700 italic text-xl mb-4 font-semibold'>What My Offer</h2>
            <h1 className='text-3xl md:text-6xl font-semibold'>Real Wedding Memories <br /> Captured</h1>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12">
        {
          services.map(service=><ServiceCard service={service}/>)
        }
       </div>
       <div className='text-xl text-center hover:text-purple-700 duration-300 font-semibold'>
        <Link to='/services'>See All Services</Link>
       </div>
    </div>
  )
}

export default MyOffer