import React from 'react'
import AppStore from '../component/AppStore'
import CategoriesGuide from '../component/CategoriesGuide'
import Navbar from '../component/Navbar'

const LandingPage = () => {
  return (
    <>
   <Navbar/>
   <CategoriesGuide/>
   <div className='h-[1000px] flex justify-center'>
  render the context here
   </div>
   <AppStore/>
    </>
  )
}

export default LandingPage