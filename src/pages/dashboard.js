import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardMessage from "../components/dashboardMessage";

const Dashboard = () => {
  // Options available in model

  const options = [
    { value: 1, text: "Unread" },
    { value: 2, text: "Read" },
    { value: 3, text: "Resolved" },
    { value: 4, text: "Unresolved" },
    { value: 5, text: "Important" },
  ];

  const [openTab, setOpenTab] = useState(1);
  const [selected, setSelected] = useState(options[0].value);


  // States for tabs

  const [unread, setUnread] = useState([]);
  const [read, setRead] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [unresolved, setUnresolved] = useState([]);
  const [important, setImportant] = useState([]);

  // Axios request to get all messages and filter them by status

  useEffect(() => {
    axios.get("http://localhost:5005/dashboard").then((response) => {
      response.data.forEach((message) => {
        switch (message.status) {
          case "unread":
            setUnread((prev) => [...prev, message]);
            break;
          case "read":
            setRead((prev) => [...prev, message]);
            break;
          case "resolved":
            setResolved((prev) => [...prev, message]);
            break;
          case "unresolved":
            setUnresolved((prev) => [...prev, message]);
            break;
          case "important":
            setImportant((prev) => [...prev, message]);
            break;
          default:
            setUnread((prev) => [...prev, message]);
        }
      });
    });
    
  }, []);

  useEffect(() => {
    setOpenTab(selected);
  }, [selected]);

  const handleChange = async (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <h1 className="w-full text-5xl underline decoration-pink mt-10 py-10">
        Welcome to the dashboard
      </h1>
      <div className="sm:hidden">
        <select
          id="tabs"
          className="bg-pink border border-gray-300 text-white sm:text-sm focus:ring-pink/75 focus:border-pink/50 block w-full p-2.5 my-3 "
          onChange={handleChange}
          value={selected}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>

      <ul className="hidden text-sm font-medium text-center text-white rounded-lg divide-x divide-gray-200 shadow sm:flex ">
        <li className="w-full">
          <button
            className="inline-block p-4 my-5 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded "
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
          >
            Unread
          </button>
        </li>

        <li className="w-full">
          <button
            className="inline-block p-4 my-5 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded"
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
          >
            Read
          </button>
        </li>
        <li className="w-full">
          <button
            className="inline-block p-4 my-5 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded"
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
          >
            Resolved
          </button>
        </li>
        <li className="w-full">
          <button
            className="inline-block p-4 my-5 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded"
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
          >
            Unresolved
          </button>
        </li>
        <li className="w-full">
          <button
            className="inline-block p-4 my-5 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded"
            aria-current="page"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(5);
            }}
          >
            Important
          </button>
        </li>
      </ul>

      <div className="h-full bg-pink/75" id="1">
        <section className={openTab === 1 ? "block" : "hidden"}>
          <DashboardMessage data={unread} />
        </section>
        <section className={openTab === 2 ? "block" : "hidden"}>
          <DashboardMessage data={read} />
        </section>
        <section className={openTab === 3 ? "block" : "hidden"}>
          <DashboardMessage data={resolved} />
        </section>
        <section className={openTab === 4 ? "block" : "hidden"}>
          <DashboardMessage data={unresolved} />
        </section>
        <section className={openTab === 5 ? "block" : "hidden"}>
          <DashboardMessage data={important} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
