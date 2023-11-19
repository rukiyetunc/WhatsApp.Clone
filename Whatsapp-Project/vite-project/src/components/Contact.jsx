import React, { useState } from "react";
import Persons from "./Persons";
import RoundedBtn from "./Common/RoundedBtn";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { contactData } from "../data/whatsapp";
import Chats from "./Chats";

export default function Contact() {
  const [persons, setPersons] = useState(contactData);

  return (
    // Contact main container
    <div className="flex flex-col overflow-scroll cursor-pointer h-100">
      {/* select contact */}
      <div className="bg-[#202d33] flex justify-between items-center h-[60px] p-2">
        {/* back button */}
        <div className="flex items-center">
        <RoundedBtn icon={<IoMdArrowBack />} />

          {/* Select Contact text */}
          <div className="flex flex-col ml-4">
            <h1 className="text-[#8796a1] ">Select contact</h1>

            {/*Contact number  */}
            <h3 className="text-[#67696b] text-sm">44 contacts </h3>
          </div>
        </div>

        {/* searc button */}
        <div >
          <RoundedBtn icon={<MdOutlineSearch />} />

          {/* more button */}
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      {/* Persons */}
      {persons.map((person) => {
        return (
          <Persons pp={person.pp} name={person.name} status={person.status} />
        );
      })}

    </div>
  );
}
