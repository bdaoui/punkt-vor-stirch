import React from "react";

const Icons = () => {
  return (
    <div className="h-full md:h-screen" id="icons">
      <h1 className="text-center align-middle text-4xl mb-10 underline decoration-pink-800 md:text-5xl m-5">WHAT WE DO</h1>

      <div className="flex flex-col md:flex-row md:justify-center ml-20 md:ml-0 p-10 text-center ">
        <div className="w-40 m-4 lg:m-10">
          <img
            src="https://www.punkt-vor-strich.at/assets/images/pvs_mobilitaetsanalyse.jpeg"
            alt="logo"
            className="w-30"
          />
          <h1 className="text-lg font-bold my-4">Mobilitätsanalyse</h1>
          <p  className="text-base">
            Wir sammeln, analysieren und visualisieren Mobilitätsdaten um die
            Diversität in der Mobilität sichtbar zu machens
          </p>
        </div>

        <div className="w-40 m-4 lg:m-10">
          <img
            src="https://www.punkt-vor-strich.at/assets/images/pvs_mobilitaetsanalyse.jpeg"
            alt="logo"
            className="w-30"
          />
          <h1 className="text-lg font-bold my-4">Co-Creation</h1>
          <p  className="text-base">
            Durch den Einsatz von innovativen Methoden wie Service Design und
            Open Innovation, schaffen wir eine bessere Customer Experience
          </p>
        </div>

        <div className="w-40 m-4 lg:m-10">
          <img
            src="https://www.punkt-vor-strich.at/assets/images/pvs_mobilitaetsanalyse.jpeg"
            alt="logo"
            className="w-30"
          />
          <h1 className="text-lg font-bold my-4">Beratung</h1>
          <p  className="text-base">
            Wir beraten von der Erhebung von Bewegungbaseustern und Anforderungen
            bis hin zum Anstoß der Umsetzung bedarfsgerechter Mobilität
          </p>
        </div>

        <div className="w-40 m-4 lg:m-10">
          <img
            src="https://www.punkt-vor-strich.at/assets/images/pvs_mobilitaetsanalyse.jpeg"
            alt="logo"
            className="w-30"
          />
          <h1 className="text-lg font-bold my-4">Bewusstseinsbildung</h1>
          <p  className="text-base">
            Durch die Sichtbarmachung von Daten wird besseres Bewusstsein
            geschaffen und fundiertere Entscheidungen getroffen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Icons;
