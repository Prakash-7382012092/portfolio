import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skillls from './components/Skillls'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skillls/>
      <About/>
      <Project/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App