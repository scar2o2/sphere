import React from 'react'
import { FiSearch } from "react-icons/fi";

const Chats = () => {
  return (
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

        <div className='flex flex-col gap-3 overflow-y-auto w-full'>
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer w-full'>
                    <img src={`user${(index % 5) + 1}.jpg`} alt="Profile" className='h-10 w-10 rounded-full' />
                    <div>
                        <h2 className='font-medium'>User {(index % 5) + 1}</h2>
                        <p className='text-sm text-gray-500'>Last message preview...</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Chats
