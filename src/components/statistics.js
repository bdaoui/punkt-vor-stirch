import React from "react";

const Statistics = () => {
  return (
    <div class="flex flex-col h-full m-14 md:m-30 lg:mx-80">
      <div class="flex flex-col text-center mb-24">
        <p class="text-base md:text-2xl">
          Es zahlt sich aus, einen genaueren Blick auf die derzeitige Situation
          in der Mobilität zu werfen. Nur so können Angebote diverser und
          nachhaltiger gestaltet werden!
        </p>
        <p class="underline text-4xl md:text-5xl m-5">Faktencheck</p>
      </div>

      <div class="flex justify-between justify-items-start flex-col md:flex-row flex-wrap text-base text-left">
        <div class="md:w-1/2 lg:w-1/4">
          <h1 class="text-base md:text-5xl mb-2">30%</h1>
          <h2 class="font-bold	text-sm">DER CO2-EMISSIONEN</h2>
          <p class="text-gray-500">
            sind global betrachtet auf den Verkehr zurückzuführen
          </p>
        </div>

        <div class="md:w-1/2 lg:w-1/4">
          <h1 class="text-base md:text-3xl mb-2">62%</h1>
          <h2 class="font-bold	text-sm">DER ZUGELASSENEN AUTOS</h2>
          <p class="text-gray-500">
            sind in Deutschland auf Männer zugelassen. Frauen setzen auf den
            öffentlichen Verkehr
          </p>
        </div>

        <div class="md:w-1/2 lg:w-1/4">
          <h1 class="text-base md:text-3xl mb-2">18%</h1>
          <h2 class="font-bold	text-sm">DER CAR-SHARING USER</h2>
          <p class="text-gray-500">
            sind Frauen, ein Potential das durch mehr Praktikabilität gestärkt
            werden kann
          </p>
        </div>

        <div class="md:w-1/2 lg:w-1/4">
          <h1 class="text-base md:text-3xl mb-2">71</h1>
          <h2 class="font-bold	text-sm">HÖHERES RISIKO</h2>
          <p class="text-gray-500">
            für Frauen bei Verkehrsunfällen verletzt zu werden, denn Angebote
            sind nicht auf sie zugeschnitten
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
