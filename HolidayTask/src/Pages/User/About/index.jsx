import React from 'react'
import Locater from '../../../Components/User/Locater/index'
import AboutUs from '../../../Components/User/Main/AboutUs'
import LastSlider from  '../../../Components/User/Main/LastSlider'

function index() {
  return (
    <div>
         <Locater location='About' />
         <AboutUs />
         <LastSlider />
    </div>
  )
}

export default index
