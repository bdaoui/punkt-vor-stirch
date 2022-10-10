import React, { useState } from "react";
import axios from "axios";

const DashboardMessage = ({ data, reload, setReload }) => {
  const [toggle, setToggle] = useState([false, ""]);
  const [chosenMessage, setChosenMessage] = useState({});

  const [targetValueEdit, setTargetValueEdit] = useState("");

  // select Message and Set Toggler
  const handleShowMessage = async (e, id) => {
    e.preventDefault();
    await setToggle([true, id]);
    setChosenMessage(data.find((item) => item._id === id));
  };

  const toggleFalse = () => {
    setToggle([false, ""]);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const id = chosenMessage._id;

    axios
      .post("http://localhost:5005/dashboard/edit", { id, targetValueEdit })
      .then((response) => {
        console.log("edit response", response.data);
        setReload(!reload); //closest adds to new tab but doesnt refresh tabs and adds +1
      })
      .catch((err) => console.log(err));
  };


		const handleDelete = () => {
			const id = chosenMessage._id 

			axios.delete(`http://localhost:5005/dashboard/${id}`)
				.then(response => console.log(response))
		}

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
                    <h4>
                      <span className="underline font-medium">From:</span>{" "}
                    </h4>
                    <h3>
                      <span className="underline font-medium">Subject:</span>
                    </h3>
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
          <svg
            onClick={toggleFalse}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"
										onClick={handleDelete}
										>
  										<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
									</svg>



          <form onSubmit={handleEdit}>
            <fieldset>
              <legend>Please select a mailbox to move to:</legend>
              <div>
                <input
                  type="radio"
                  id="status1"
                  name="status"
                  onClick={(e) => setTargetValueEdit("read")}
                />
                <label for="status1">Read</label>

                <input
                  type="radio"
                  id="status2"
                  name="status"
                  onClick={(e) => setTargetValueEdit("unread")}
                />
                <label for="status2">Unread</label>

                <input
                  type="radio"
                  id="status3"
                  name="status"
                  onClick={(e) => setTargetValueEdit("resolved")}
                />
                <label for="status3">Resolved</label>

                <input
                  type="radio"
                  id="status4"
                  name="status"
                  onClick={(e) => setTargetValueEdit("unresolved")}
                />
                <label for="status4">Unresolved</label>

                <input
                  type="radio"
                  id="status5"
                  name="status"
                  onClick={(e) => setTargetValueEdit("important")}
                />
                <label for="status5">Important</label>
              </div>
              <div>
                <button type="submit" className="border-4 border-black">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <h1>
            {chosenMessage?.name} {chosenMessage?.surname}
          </h1>
          <h2>
            <span className="underline font-bold text-xl">Subject:</span>{" "}
            {chosenMessage?.subject}
          </h2>
          <p>{chosenMessage?.message}</p>

          <div className="flex gap-2 justify-center text-lg">
            <p>
              <span className="underline font-medium">Email:</span>{" "}
              {chosenMessage?.email}
            </p>
            <p>
              <span className="underline font-medium">Phone:</span>{" "}
              {chosenMessage?.phone}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardMessage;
