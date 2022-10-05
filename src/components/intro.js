import React from 'react'

const Intro = () => {
  return (
    <div>

      <div  class="relative pb-5">
      <img src="https://images.unsplash.com/photo-1664829698872-d25e65dc302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
        alt="hello world"
        style={{height: '400px', width: '100%'}}/>
        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Sustainable mobility of tomorrow</h1>
      </div>

      <div class="grid grid-cols-2 gap-5 pt-10">
        <h1 class="text-8xl col-span-1 w-90 content-centre">We bring it to the <span class="underline">POINT .</span></h1>
        <h1 class="text-base col-span-1 w-65 content-centre text-left">Data is a precious commodity. Only with them can we really understand and shape mobility. So far, little attention has been paid to the diversity within different user groups such as women during the survey and analysis. We are reducing this gender data gap in mobility step by step, thereby enabling better and user-centered solutions and products.</h1>
        
      </div>


    </div>
  )
}

export default Intro