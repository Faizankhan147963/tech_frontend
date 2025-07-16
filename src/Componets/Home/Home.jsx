import React from 'react'
import Banner from '../../Pages/Banner/Banner'
import OurDeveloper from '../../Pages/OurDeveloper/OurDeveloper'
import Testimonial from '../../Pages/Testimonial/Testimonial'
import NEWS from '../../Pages/NEWS/NEWS'
import Home_Services from '../../Pages/Home_Services/Home_Services'
import Our_Work from '../../Pages/Our_Work/Our_Work'
import useLocomotiveScroll from '../../useLocomotiveScroll'
import Our_Portfolio from '../../Pages/Our_Portfolio/Our_Portfolio'
import Why_Choose_us from '../../Pages/Why_Choose_us/Why_Choose_us'
import Our_Process from '../../Pages/Our_Process/Our_Process'

const Home = () => {
  const scrollRef = useLocomotiveScroll();
  return (
    <div>
      <Banner/>
      <Home_Services/>
      <Our_Work/>
     
      <Our_Portfolio/>

      {/* <OurDeveloper/>  */}
      <Testimonial/>
     
      <NEWS/>
      {/* <Our_Process/> */}
    </div>
  )
}

export default Home
