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
    <div className="flex flex-column md:flex-row h:screen">
      <div>
        <h1>Messages</h1>
        <ul>
          {data.map((message) => {
            return (
              <li
                key={message._id}
                onClick={(e) => handleShowMessage(e, message._id)}
              >
                <h3>{message.subject}</h3>
                <h4>{message.email}</h4>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        {toggle[0] && (
          <div>
            <h1>
              {chosenMessage?.name} {chosenMessage?.surname}
            </h1>
            <h2>{chosenMessage?.subject}</h2>
            <p>{chosenMessage?.message}</p>

            <p>{chosenMessage?.email}</p>
            <p>{chosenMessage?.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardMessage;
