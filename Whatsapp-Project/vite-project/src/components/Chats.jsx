import React, { useEffect, useState } from 'react'
import {ImFolderDownload} from 'react-icons/im';
import { chatsData } from '../data/whatsapp';
import Chat from './Chat';

export default function Chats({filter}) {

    const [chats, setChats] = useState(chatsData);

    // filter unread messages
    useEffect(() => {
      const newChat = filter ? chatsData.filter((chat) => chat.unreadMsgs): chatsData; 
      setChats(newChat);
    },[filter] )

  return (
    // Chats main container
    <div className='flex flex-col overflow-scroll cursor-pointer h-100'>
      {/* Archived container */}
      <div className='flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]'>
        
        {/* icon and text container */}
        <div className=' flex justify-around items-center w-[15px]'>
            {/* icon */}
            <span className='text-emerald-500 text-lg p-2 ' >
             <ImFolderDownload/>
            </span>
            {/* Archived */}
            <h1 className='text-white text-sx w-0'>Archived</h1>
        </div>

        {/* number of archived chats */}
        <p className='text-emerald-500 text-xs font-light'>8</p>
        
        </div>
     {/* Chat */}

        {chats.map((chat, i) => {
            return (
                <Chat
                  
                  pp={chat.pp}
                  contact={chat.contact}
                  msg={chat.msg}
                  time={chat.time}
                  unreadMsgs={chat.unreadMsgs}
                  active={i === 0}
                />
            )
        })}

    </div>

  );
}
