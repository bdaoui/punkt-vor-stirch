import React, { useState } from "react";

const DashboardMessage = ({ data }) => {
  const [toggle, setToggle] = useState([false, ""]);
  const [chosenMessage, setChosenMessage] = useState({});

  // select Message and Set Toggler

  const filteredMessage =  data.filter(async (message) => message._id === toggle[1]);
  
  const handleShowMessage = async (e, id) => {
      
      await setChosenMessage(filteredMessage[0]);  
      await setToggle([!toggle[0], id]);

    console.log("Is this Firing up?");
    console.log(toggle);
    console.log(filteredMessage[0]);
    console.log(data)
  };

  return (
    <div className="flex flex-col gap-5 md:gap-0 md:flex-row  p-4 border-4 border-black max-h-[80vh]">

      <div className="border-4 border-black border-solid md:w-1/3 overflow-y-scroll ">
        <h1 className="text-4xl p-4">Messages</h1>
        <ul>
          {data.map((message) => {
            return (
              <li
                key={message._id}
                onClick={(e) => handleShowMessage(e, message._id)}
              >
                <div className="flex flex-col md:flex-row gap-2 md:gap-5 p-2 justify-center align-center text-lg border border-black">
                    <h4><span className="underline font-medium">From:</span> {message.email}</h4>
                    <h3><span className="underline font-medium">Subject:</span> {message.subject}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

        {toggle[0] && (
          <div className="border-4 border-color-white md:w-2/3 flex flex-col justify-center align-center">
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
