import React from "react";

const Navbar = () => {
  return (
    <div>
      <header class="bg-white shadow-lg h-24 hidden md:flex">
        <a
          href="/"
          class="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
        >
          <img
            class="object-scale-down h-16 w-36"
            src="https://www.punkt-vor-strich.at/assets/images/pvs_vlogo.png"
            alt="logo"
          />
        </a>
        <nav class="header-links contents font-semibold text-base lg:text-lg">
          <ul class="flex items-center ml-4 xl:ml-8 mr-auto">
            <li class="p-3 xl:p-6">
              <a href="">
                <span>Services</span>
              </a>
            </li>
            <li class="p-3 xl:p-6">
              <a href="">
                <span>Team</span>
              </a>
            </li>
            <li class="p-3 xl:p-6">
              <a href="">
                <span>Partners</span>
              </a>
            </li>
            <li class="p-3 xl:p-6">
              <a href="">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="border flex items-center px-4 lg:px-6 xl:px-8">
          <button class="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
            Contact Us
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
