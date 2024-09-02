import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Heading from '../Components/Heading/Heading'
import Superiority from '../Components/Superiority/Superiority.js'
import About from '../Components/About/About.js'
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo.js'
import Video from '../Components/Video/Video.js'
import Causes from '../Components/Causes/Causes.js'
import UpcomingEvent from '../Components/UpcomingEvent/UpcomingEvent.js'
import Team from '../Components/Team/Team.js'
import Footer from '../Components/Footer/Footer.js'
import Faq from '../Components/Faq/Faq.js'
import Testimonial from '../Components/Testionial/Testimonial.js'
import Blog from '../Components/Blog/Blog.js'
import Volunter from '../Components/Volunter/Volunter.js'


const Home = () => {
  return (
  <>
  <Navbar/>
  <Heading/>
  <Superiority/>
  <About/>
  <WhatWeDo/>
  <Volunter/>
  <Video/>
  <Causes/>
  <UpcomingEvent/>
  <Team/>
  <Blog/>
  <Testimonial/>
  <Faq/>
  <Footer/>
 

  </>
  )
}

export default Home