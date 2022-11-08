import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../../Shared/ServiceCard/ServiceCard'

const MyOffer = () => {
  return (
    <div className='container mx-auto py-24'>
        <div className='text-center'>
            <h2 className='text-purple-700 italic text-xl mb-4 font-semibold'>What My Offer</h2>
            <h1 className='text-6xl font-semibold'>Real Wedding Memories <br /> Captured</h1>
            
        </div>
        <div className="grid grid-cols-3 gap-8 my-12">
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
       </div>
       <div className='text-xl text-center hover:text-purple-700 duration-300 font-semibold'>
        <Link to='/services'>See All Services</Link>
       </div>
    </div>
  )
}

export default MyOffer