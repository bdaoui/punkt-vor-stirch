import React from "react";

const Intro = () => {
  return (
    <div class="h-full">

      <div  class="relative pb-5 h-2/4">
      <img src="https://images.unsplash.com/photo-1664829698872-d25e65dc302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
        alt="hello world"
        style={{height: '400px', width: '100%'}}/>
        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Sustainable mobility of tomorrow</h1>
      </div>


      <div class="flex flex-col lg:flex-row justify-between items-center m-14 md:m-44 lg:m-52 h-2/4">
        <h1 class="text-5xl md:text-7xl lg:text-8xl basis-2/4 underline p-9"  >
          We bring it to the POINT.
        </h1>

        <h1 class="text-base md:text-xl text-left basis-2/4">
          Data is a precious commodity. Only with them can we really understand
          and shape mobility. So far, little attention has been paid to the
          diversity within different user groups such as women during the survey
          and analysis. We are reducing this gender data gap in mobility step by
          step, thereby enabling better and user-centered solutions and
          products.
        </h1>

      </div>
    </div>
  );
};

export default Intro;
