import React from 'react'
import ServiceCard from '../Shared/ServiceCard/ServiceCard'
import ContactMe from './ContactMe/ContactMe'
import MyOffer from './MyOffer/MyOffer'
import Topbanner from './TopBanner/Topbanner'
import WhyChooseMe from './WhyChooseMe/WhyChooseMe'

const Home = () => {
  return (
    <div className='mb-12'>
        <Topbanner/>
       <MyOffer/>
       <WhyChooseMe/>
       <ContactMe/>
    </div>
  )
}

export default Home