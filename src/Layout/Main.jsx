import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Pages/Shared/Footer/Footer'
import Navigation from '../Pages/Shared/Navigation/Navigation'

const Main = () => {
  return (
    <div >
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main