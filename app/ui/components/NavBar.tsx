// NavBar.tsx
'use client'
import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
// import SidebarButtonStuff from "./SidebarButtonStuff";

type SidebarState = boolean;

export default function NavBar() {
  const [sideBar, setSidebar] = useState<SidebarState>(false);

  return (
    <nav className="relative bg-white border-b border-gray-200 flex items-center p-4 z-10">
      <a href="/" className="">
        <img
          src="https://shypbuddy.in/images/logo.png"
          className="h-8"
          alt="Flowbite Logo"
        />
      </a>
      <FaBell className="text-xl cursor-pointer ml-auto" />
      <img
        className="h-8 w-8 ml-4 cursor-pointer rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User Avatar"
      />
      <GiHamburgerMenu 
        className="text-xl ml-4 cursor-pointer md:hidden" 
        onClick={() => setSidebar(!sideBar)}
      />
      {/* <SidebarButtonStuff openOrClose={sideBar} setSidebar={setSidebar} /> */}
    </nav>
  );
}
