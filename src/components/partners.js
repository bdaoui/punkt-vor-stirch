import React from 'react'

const Partners = () => {
  return (
    <div className="h-full bg-gray-100 my-10 mx-4">
      <div className='text-center mb-10'>
        <h1 className='text-3xl mb-4'>Gemeinsam Stark</h1>
        <p className='text-base text-gray-500'>Gemeinsam mit unseren Kooperationspartnern schaffen und gestalten wir ein neues und inklusiveres Bild der Mobilität.</p>
      </div>

      <div className='flex flex-col md:flex-row justify-center'>
        <img className='object-scale-down h-20 my-4 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/wim_Logo.png"
        alt="logo" />
        <img className='object-scale-down h-20 my-4 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/triply_Logo.png"
        alt="logo" />
        <img className='object-scale-down h-10 my-4 md:mt-6 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/zgis_logo.png"
        alt="logo" />
        <img className='object-scale-down h-10 my-4 md:mt-5 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/carployee_logo.png"
        alt="logo" />
        <img className='object-scale-down h-20 my-4 md:mt-2 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/FFG_Logo.png"
        alt="logo" />
      </div>


    </div>
  )
}

export default Partners