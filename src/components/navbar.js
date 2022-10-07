import React, {useContext, useState} from "react";
import { AuthContext } from "../context/auth.context";
import { useLocation } from "react-router-dom"
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const {logOutUser, user} = useContext(AuthContext)

  const endpoint = useLocation();
  console.log(endpoint.pathname)

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 bg-white mb-3 drop-shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/"
            >
              <img className="object-scale-down h-6 w-20" src={process.env.PUBLIC_URL + "/pvs_vlogo.png"} alt="logo"/>
            </a>
          


            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavHashLink to={endpoint.pathname ==="/blog" ? "/#icons" : "#icons" } className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Leistungen</span>
                </NavHashLink>

              </li>

              <li className="nav-item">
              <NavHashLink to={endpoint.pathname ==="/blog" ? "/#team" : "#team" } className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Team</span>
              </NavHashLink>
              </li>

              <li className="nav-item">
              <NavHashLink to={endpoint.pathname ==="/blog" ? "/#partner" : "#partner" } className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Partner</span>
              </NavHashLink>
              </li>

              <li className="nav-item">
              <NavHashLink to="/blog" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Bloggen</span>
                  </NavHashLink>
              </li>

              <li className="nav-item">
              <NavHashLink to={endpoint.pathname ==="/blog" ? "/#contact" : "#contact" } className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2 underline">Kontakt</span>
              </NavHashLink>
              </li>

              {user &&

              <li>
              <button className=" hover:bg-red-700 bg-pink text-white text-xs md:ml-5 md:mt-1 p-1 px-2 rounded m-0" onClick={logOutUser}>Log Out</button>

              </li>

              }


            </ul>
            
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;

