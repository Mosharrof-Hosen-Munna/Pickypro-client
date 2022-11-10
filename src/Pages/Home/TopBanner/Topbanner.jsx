import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../images/home-banner.jpg'

const Topbanner = () => {
  return (
    <div className='py-52' style={{background: `url(${banner})`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className='container mx-auto px-4'>
          <div className='flex md:justify-end justify-center'>
          <div className=' w-full md:w-1/2'>
            <h1 className=' text-3xl md:text-5xl font-semibold text-center md:text-end text-white'>I am here to help you to remember the best days.</h1>
            <p className='text-center md:text-end text-lg text-white font-semibold md:text-slate-200 my-4'>In photography there is a reality so subtle that it becomes more real than reality. There is one thing the photograph must contain, the humanity of the moment.</p>
            <div className='text-center md:text-end'>
            <Link to='/services'><button className='btn bg-purple-700 btn-lg'>Take Service</button></Link>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Topbanner