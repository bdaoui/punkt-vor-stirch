import React from "react";

const Intro = () => {
  return (
    <div className="h-full">
      <div className="relative pb-5 h-2/4">
        <img
          src={process.env.PUBLIC_URL + "/pvs_Team_2.jpg"}
          alt="hello world"
          style={{width: "100%" }}
          className="hidden md:block"
        />
        <img
          src={process.env.PUBLIC_URL + "/pvs_Team2.jpg"}
          alt="hello world"
          style={{width: "100%" }}
          className="block md:hidden"
        />
        <h1 className="absolute text-xl md:text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Nachhaltige Mobilität von morgen
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center m-14 md:m-44 lg:m-52 h-2/4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl basis-2/4 underline decoration-pink-800 p-9" >
          Wir bringen es auf den PUNKT.
        </h1>

        <h1 className="text-base md:text-xl text-left basis-2/4">
          Daten sind ein kostbares Gut. Mit ihnen können wir Mobilität erst
          richtig verstehen und gestalten. Bei der Erhebung und Analyse wurde
          bisher nur wenig auf die Diversität innerhalb verschiedener
          Nutzer:innengruppen wie Frauen geachtet. Wir reduzieren diesen Gender
          Data Gap in der Mobilität Schritt für Schritt und ermöglichen dadurch
          bessere und nutzer:innenzentrierte Lösungen und Produkte.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
