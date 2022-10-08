import React from 'react'
import Contact from '../components/contact';
import Icons from '../components/icons';
import Intro from '../components/intro';
import Partners from '../components/partners';
import Statistics from '../components/statistics';
import Team from "../components/team"

const Landing = () => {
  return (
    <div className='bg-zinc-50 h-100vh'>
      <Intro />
      <Statistics />
      <Icons /> 
      <Team /> 
      <div className='bg-gray-100 mt-10 mb-0 py-10'>
      <Partners />
      <Contact />
      </div>
    </div>
  )
}

export default Landing