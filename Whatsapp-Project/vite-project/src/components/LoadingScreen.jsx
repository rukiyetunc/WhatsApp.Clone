import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BsWhatsapp } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

export default function LoadingScreen({progress}) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#111a21] w-screen h-screen ">
      {/* whatsapp icon */} 
        <span className="text-[#3d464a] text-6xl my-12">
            <BsWhatsapp/>
        </span>

      {/* loading bar and text */}
      <div className=" flex flex-col justify-evenly items-center h-[150px]">
        {/* loading bar */}
        <ProgressBar
          variant="success"
          now={progress}
          className="bg-[#243138] rounded-lg w-[320px] h-[3px]"
        />
        {/* text section */}
        <div className="flex flex-col items-center">
            {/* whatsapp name */}
            <h1 className="text-[#c6c1c9] text-lg font-medium">WhatsApp</h1>
            
            {/* text */}
            <div className="flex item-center text-[#687782] ">
                {/* lock */}
                <span className="text-sm mr-3 mt-1">
                    <FaLock/>
                </span>

                {/* text */}
                <p>End-to-end encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
}
