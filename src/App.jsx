import React from 'react'
import Hero from './component/hero/hero'
import Navbar from './component/navbar/Navbar'
import Programs from './component/programs/programs'
import Title from './component/title/title'
import About from './component/about/about'
import Campus from './component/campus/campus'
import Testimonials from './component/testimonials/testimonials'
import Contact from './component/contact/contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='our program' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonial' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get in Touch'/>
        <Contact/>
      </div>
      
    </div>
  )
}

export default App

