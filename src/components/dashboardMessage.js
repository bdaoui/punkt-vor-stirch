import React, { useEffect, useState } from "react";

const DashboardMessage = ({ data }) => {
  const [toggle, setToggle] = useState([false, ""]);
  const [chosenMessage, setChosenMessage] = useState({});

  // select Message and Set Toggler
  
  const handleShowMessage = async (e, id) => {
    await setToggle([!toggle[0], id]);
    setChosenMessage( data.find(message => message._id === id) )
      // console.log(toggle);
      console.log(chosenMessage)
  };

  return (
    <div className="flex flex-col gap-5 md:gap-0 md:flex-row  p-4  h-screen">

      <div className="md:w-1/3 overflow-y-scroll ">
        <h1 className="text-4xl p-4">Messages</h1>
        <ul>
          {data.map((message) => {
            return (
              <li
                key={message._id}
                onClick={(e) => handleShowMessage(e, message._id)}
              >
                <div className="flex flex-col p-2 justify-between align-center text-md border-b-2 border-black">
                    
                    <div className="flex flex-col md:flex-row  md:gap-5 p-2 justify-between align-center text-md">
                        <h4><span className="underline font-medium">From:</span> </h4>
                        <h3><span className="underline font-medium">Subject:</span></h3>
                    </div>

                    <div className="flex flex-col md:flex-row  md:gap-5 p-2 justify-between align-center text-md ">
                        <h4> {message.email}</h4>
                        <h3> {message.subject}</h3>

                    </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

        {toggle[0] && (
          <div className="border-4 border-color-white md:w-2/3 flex flex-col justify-center align-center overflow-y-scroll">
            <h1>
              {chosenMessage?.name} {chosenMessage?.surname}
            </h1>
            <h2><span className="underline font-bold text-xl">Subject:</span> {chosenMessage?.subject}</h2>
            <p>{chosenMessage?.message}</p>
            
            <div className="flex gap-2 justify-center text-lg">
                <p><span className="underline font-medium">Email:</span> {chosenMessage?.email}</p>
                <p><span className="underline font-medium">Phone:</span> {chosenMessage?.phone}</p>
            </div>

          </div>
        )}
    </div>
  );
};

export default DashboardMessage;