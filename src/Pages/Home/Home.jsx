import React from 'react'
import ServiceCard from '../Shared/ServiceCard/ServiceCard'
import MyOffer from './MyOffer/MyOffer'
import Topbanner from './TopBanner/Topbanner'
import WhyChooseMe from './WhyChooseMe/WhyChooseMe'

const Home = () => {
  return (
    <div className='mb-12'>
        <Topbanner/>
       <MyOffer/>
       <WhyChooseMe/>
    </div>
  )
}

export default Home