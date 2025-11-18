import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";

const Groups = () => {
  return (
    <div className='w-full h-full flex flex-row'>
        <div className='absolute bottom-0 top-0 w-72 bg-white p-6 flex flex-col gap-4 overflow-x-hidden'>
            <h1 className='text-2xl font-medium'>Chats</h1>

            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-gray-100 text-gray-700 pl-4 pr-8 py-2 rounded-lg outline-none"
                />
                <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            <div className='flex flex-col gap-3 overflow-y-auto small-scroll thin-scroll w-full'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer w-full'>
                        <img src={`user${(index % 5) + 1}.jpg`} alt="Profile" className='h-10 w-10 rounded-full' />
                        <div>
                            <h2 className='font-medium'>Group {(index % 5) + 1}</h2>
                            <p className='text-sm text-gray-500'>Last message preview...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='bg-gray-100 fixed left-87 top-0 bottom-0 right-0 flex flex-col'>
            {/* Chat area */}
            <div className='flex flex-row justify-between border-b border-gray-300 items-center w-full'>
                <div className=' px-6 py-4 flex items-center'>
                    <img src="" className='h-10 w-10 rounded-full' />
                    <div className='flex flex-col'>
                        <span className='font-medium ml-4'>Group Name</span>
                        <span className='text-sm text-gray-500 ml-4'>3 Online</span>
                    </div>
                </div>
                <div className='px-6 py-4 flex items-center relative flex-row gap-5'>
                    <FiSearch className="text-4xl hover:bg-white p-1 rounded-full cursor-pointer" />
                    <FiInfo className="text-4xl hover:bg-white p-1 rounded-full cursor-pointer" />
                    <FiMoreVertical className="text-4xl hover:bg-white p-1 rounded-full cursor-pointer"/>
                </div>
            </div>
            <div className='flex-1 pl-6 pt-6 pb-6 overflow-y-auto thin-scroll'>
                {/* Chat messages will go here */}
                <div className='flex flex-col gap-4'>
                    {Array.from({ length: 15 }).map((_, index) => (
                        <div key={index} className={`max-w-xs p-2 pb-1 rounded-lg ${index % 2 === 0 ? 'bg-green-200 text-black self-end' : 'bg-white text-gray-800 self-start'}`}>
                            <p>This is message number {index + 1}</p>
                            <p className='text-end text-[10px]'>12:30</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=''>
                {/* Message input area */}
                <div className='w-full p-2 border-t border-gray-300 bg-gray-100 flex items-center gap-4'>
                    <div className='flex gap-3'>
                        <button className='ml-2 text-gray-700 hover:text-green-500 cursor-pointer rounded-full hover:bg-black/75 p-1'><FiPaperclip className="text-lg" /></button>
                        <button className='text-gray-700 hover:text-green-500 cursor-pointer rounded-full hover:bg-black/75 p-1'><BsEmojiSmile className="text-lg" /></button>
                    </div>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full bg-gray-100 text-gray-700 pr-4 py-2 rounded-lg outline-none"
                    />
                    <button className='text-gray-700 hover:text-green-500 cursor-pointer rounded-full hover:bg-black/75 p-1 mr-2'>
                        <FiSend className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Groups
