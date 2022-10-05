import React from 'react'

const Statistics = () => {
  return (
    <div class="flex flex-col h-full m-14 md:m-30 lg:mx-80"> 
    
      <div class= "flex flex-col text-center mb-24"> 
        <p class="text-base md:text-2xl">Es zahlt sich aus, einen genaueren Blick auf die derzeitige Situation in der Mobilität zu werfen. Nur so können Angebote diverser und nachhaltiger gestaltet werden!</p>
        <p class="underline text-4xl md:text-5xl m-5">fact check</p>

      </div>

      <div class="flex justify-between justify-items-start flex-col md:flex-row flex-wrap text-base text-left">

        <div class="md:w-1/2 lg:w-1/4">
          <h1 class="text-base md:text-5xl mb-2">30%</h1>
          <h2 class="font-bold	text-sm">DER CO2-EMISSIONEN</h2>
          <p class="text-gray-500">sind global betrachtet auf den Verkehr zurückzuführen</p>
        </div>

        <div class="md:w-1/2 lg:w-1/4">
          <h1 class="text-base md:text-3xl mb-2">62</h1>
          <h2 class="font-bold	text-sm">OF AUTHORIZED CARS</h2>
          <p class="text-gray-500">are approved for men in Germany. Women rely on public transport</p>
        </div>

        <div class="md:w-1/2 lg:w-1/4">
          <h1 class="text-base md:text-3xl mb-2">18</h1>
          <h2 class="font-bold	text-sm">THE CAR-SHARING USER</h2>
          <p class="text-gray-500">are women, a potential that can be strengthened through more practicability</p>
        </div>

        <div class="md:w-1/2 lg:w-1/4">
          <h1 class="text-base md:text-3xl mb-2">71</h1>
          <h2 class="font-bold	text-sm">HIGHER RISK</h2>
          <p class="text-gray-500">for women to be injured in traffic accidents, because offers are not tailored to them</p>
        </div>
      
      </div>

    
    </div>
  )
}

export default Statistics