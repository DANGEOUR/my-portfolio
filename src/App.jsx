import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import Tech from './Components/Tech'
import Projects from './Components/Projects'
import Clients from './Components/Clients'
import Form from './Components/Form'
import Footer from './Components/Footer'

function App() {

  return (
    <>

      <Navbar/>
      <Hero/>
      <Service/>
      <Tech/>
      <Projects/>
      <Clients/>
      <Form/>
      <Footer/>

     
    </>
  )
}

export default App
