import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import ServiceCard from '../Shared/ServiceCard/ServiceCard'
import ContactMe from './ContactMe/ContactMe'
import MyOffer from './MyOffer/MyOffer'
import Topbanner from './TopBanner/Topbanner'
import WhyChooseMe from './WhyChooseMe/WhyChooseMe'

const Home = () => {

  const services = useLoaderData()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title= 'PickyPro | A professional photography service provider'
  }, [])

  return (
    <div className='mb-12 '>
        <Topbanner/>
       <MyOffer services={services}/>
       <WhyChooseMe/>
       <ContactMe/>
    </div>
  )
}

export default Home