import React, {useState} from 'react'


const Team = () => {
  
const [showSocial, setShowSocial] = useState([false, ""]);

const handleHover = (member) =>{
  console.log(showSocial)
 if(!showSocial[0]){ setShowSocial([true, member]) }

}


  return (
    <div flex flex-col text-center >

        <h1>Hinter den Kulissen</h1>
        <p class="text-center p-10 lg:px-96">Wir sind ein Team aus Expertinnen mit langjähriger Erfahrung in Forschung, Innovation und Technologie mit Schwerpunkt Mobilität. Wir verstehen uns als Begleiterinnen und Ermöglicher. Auf der Reise wollen wir alle Bedürfnisse - soziologisch, ökonomisch und ökologisch - mitnehmen und nutzbar machen.</p>


      <div class="flex flex-col md:flex-row justify-between items-center mt-24 px-10 md:px-96" >

        <div onMouseOver={ (e) => handleHover("Lina")}  onMouseLeave={(e) => setShowSocial([false, ""])}>
            <img src={process.env.PUBLIC_URL+"/pvs_Team_Lina_Portrait.jpg"} alt="Lina MOSSHAMMER" class={(showSocial[0]  && showSocial[1] === "Lina" ? "max-w-xs opacity-60" : "max-w-xs")} />
            <h2 class="font-bold	text-lg">Lina MOSSHAMMER</h2>
            <h3 class="text-gray-500">Chief Executive Officer</h3>
            <h3 class="text-gray-500">Co-Founder</h3>

            {showSocial[0] && showSocial[1] === "Lina" &&  
              <div class="relative inset-x-3 bottom-80  flex  ">
              <a href='https:linkedin.com'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="  text-red fill-current  w-5 absolute right-2/4  ">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
          
                </svg>
                </a>

                <a href='https:twitter.com'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" fill-black  w-5 absolute left-1/3   ">
                
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
                </a>
              </div>
            }
        </div>

        <div onMouseOver={ (e) => handleHover("Claudia")}  onMouseLeave={(e) => setShowSocial([false, ""])}>
            <img src={process.env.PUBLIC_URL+"/pvs_Team_Claudia_Portrait.jpg"} alt="Claudia FALKINGER" class={(showSocial[0]  && showSocial[1] === "Claudia"? "max-w-xs opacity-60" : "max-w-xs")} />
            <h2 class="font-bold	text-lg">Claudia FALKINGER</h2>
            <h3 class="text-gray-500">Chief Strategy Officer</h3>
            <h3 class="text-gray-500">Co-Founder</h3>

            {showSocial[0] && showSocial[1] === "Claudia" &&  
              <div class="relative inset-x-3 bottom-80  flex  ">
              <a href='https:linkedin.com'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="  text-red fill-current  w-5 absolute right-2/4 ">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
          
                </svg>
              </a>

              <a href='https:twitter.com'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" fill-black  w-5 absolute  left-1/3 ">
                
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
              </a>
                
              </div>
            }
          
        </div>

        <div onMouseOver={ (e) => handleHover("Nadin")}  onMouseLeave={(e) => setShowSocial([false, ""])}>
            <img src={process.env.PUBLIC_URL+"/pvs_Team_Nadin_Portrait2.jpg"} alt="Nadin BRUNNHOFER" class={(showSocial[0] && showSocial[1] === "Nadin" ? "max-w-xs opacity-60" : "max-w-xs")} />
            <h2 class="font-bold	text-lg">Nadin BRUNNHOFER</h2>
            <h3 class="text-gray-500">Chief Technology Officer</h3>
            <h3 class="text-gray-500">Co-Founder</h3>

            {showSocial[0] && showSocial[1] === "Nadin" &&  
              <div class="relative inset-x-3 bottom-80  flex">

                <a href='https:linkedin.com'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="  text-red fill-current  w-5 absolute right-2/4 ">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
          
                  </svg>
                </a>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" fill-black  w-5 absolute  left-1/3">
                
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
                
              </div>
            }
          
        </div>
        
      </div>
    </div>
  )
}

export default Team