import React, {useEffect} from 'react'
import { HashLink } from 'react-router-hash-link';
import Contact from '../components/contact';
import Icons from '../components/icons';
import Intro from '../components/intro';
import Partners from '../components/partners';
import Statistics from '../components/statistics';
import Team from "../components/team"

const Landing = () => {
  
  let yOffset = window.scrollY
  console.log(yOffset)

  useEffect(() => {

  }, )


  return (
    <div className='bg-zinc-50 h-100vh relative'>
      <Intro />
      <Statistics />
      <Icons /> 
      <Team /> 
      <div className='bg-gray-100 mt-10 mb-0 py-10'>
      <Partners />
      <Contact />
      
     


      </div>

      <HashLink smooth to="/#top">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10  bottom-20 right-10 fixed">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </HashLink>

    </div>
  )
}

export default Landing