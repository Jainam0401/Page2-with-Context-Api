import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { PiNumberCircleTwoFill } from "react-icons/pi";

function Formbar({ setCurrentSection }) { // Add setCurrentSection as a prop
 return (
    <div className="flex items-center text-base">
      <button
        onClick={() => setCurrentSection('pickup')} // Update the current section
       
        className="inline-flex items-center text-black hover:text-rose-600 hover:underline"
      >
        <div className="flex items-center ">
          <AiFillCheckCircle className="mr-2 text-rose-600" />
          <span>Pick up Address</span>
        </div>
        <MdOutlineHorizontalRule className="ml-4 w-10" />
     </button>
      <button
        onClick={() => setCurrentSection('buyer')} // Update the current section
      
        className="inline-flex items-center hover:underline ml-4"
      >
        <div className="flex items-center">
          <PiNumberCircleTwoFill className="mr-2 text-rose-600 " />
          <span className=" text-black">Buyer Address</span>
        </div>
     </button>
    </div>
 );
}

export default Formbar;
