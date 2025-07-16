import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "@fontsource/unbounded"; // Default weight (400)
import "@fontsource/unbounded/700.css"; // Weight 700
import './App.css'
import Home from './Componets/Home/Home'
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Footer from './Componets/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Navbar from './Componets/Navbar/Navbar';
import Scroll_Top_All from './Pages/Scroll_TOp_All/Scroll_TOp_All';
import useLocomotiveScroll from './useLocomotiveScroll';
import ScrollToTOp from './Pages/ScrollToTOp/ScrollToTOp';
import CustomCursor from './Pages/CustomCursor/CustomCursor';
import Service_Details_Page from './Pages/Service_Details_Page/Service_Details_Page';
import Help from './Pages/Help/Help';
const App = () => {
  // const scrollRef = useLocomotiveScroll();
  return (
    <div >
      <Router>
        <Navbar/>
        <Scroll_Top_All/>
        {/* <CustomCursor/>  */}
        <ScrollToTOp/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/service/:name' element={<Service_Details_Page />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/help' element={<Help/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
