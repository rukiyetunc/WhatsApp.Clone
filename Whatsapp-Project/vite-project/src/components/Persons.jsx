import React from "react";

export default function Persons({ pp, name, status }) {
  return (
    // Persons Container
    <div
      className={`flex items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33]  border-t border-neutral-700  w-100 h-100 py-3`}
    >
      {/* profil picture */}
      <img
        src={pp}
        alt="profil-picture"
        className="rounded-full w-[50px] mr-5 "
      />

      {/*name  */}
      <div className="flex flex-col">
        <h1 className="font-medium mb-1 text-white">{name}</h1>

        {/* status */}
        <h3 className="text-xs text-neutral-400">{status}</h3>
      </div>
    </div>
  );
}
