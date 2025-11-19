import React, { useState } from 'react'

const Friends = () => {
    const opt= ["All Friends", "Online", "Close Friends", "Blocked"];
    const flist= [
        {name: "Alice Johnson", status: "online", img: "user1.jpg"},
        {name: "Bob Smith", status: "offline", img: "user2.jpg"},
        {name: "Charlie Brown", status: "online", img: "user3.jpg"},
        {name: "Diana Prince", status: "offline", img: "user4.jpg"},
        {name: "Ethan Hunt", status: "online", img: "user5.jpg"},
        {name: "Fiona Gallagher", status: "offline", img: "user1.jpg"},
        {name: "George Michael", status: "online", img: "user2.jpg"},
        {name: "Hannah Baker", status: "offline", img: "user3.jpg"},
    ];
    const recentFriends= [
        {name: "Ian Somerhalder", img: "user4.jpg"},
        {name: "Jenna Coleman", img: "user5.jpg"},
    ];
    const [optState,setOptState]= useState("All Friends");
  return (
    <>
        <div className='w-full h-full p-8 gap-3 flex flex-col bg-white'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex gap-1 flex-col'>
                    <h1 className='text-2xl font-bold '>Your Friends</h1> 
                    <h2 className='text-lg text-gray-400'>256 Friends</h2>   
                </div>
                <div>
                    <img src="sphere1.png" className='w-15'/>    
                </div>
            </div>
            <div className='bg-white p-4 rounded-xl flex flex-col gap-6'>
                <div className='flex flex-row gap-4 bg-gray-100 p-4 rounded-full w-fit mx-auto'>
                    {opt.map((option, index) => (
                        <button 
                            key={index} 
                            onClick={()=>{setOptState(option)}}
                            className='px-4 py-2 bg-black text-white rounded-full hover:text-green-500 transition-all cursor-pointer hover:bg-black/90'>
                            {option}
                        </button>
                    ))}
                </div>
                {optState==='All Friends' && (<div className='overflow-y-auto thin-scroll flex flex-col gap-4 relative rounded-full'>
                    <div className='shadow-md p-4 rounded-lg bg-gray-100 flex items-center justify-start gap-6'>
                        {recentFriends.map((friend, index) => {
                            return (
                                <>
                                    <div key={index} className='flex flex-col items-center'>
                                        <div className='p-1 rounded-full border border-black'><img src="image.png" className='w-10  rounded-full'/></div>
                                        <span className='text-xs text-black/50'>{friend.name}</span>
                                    </div>
                               </>
                            )
                        })}
                    </div>
                    <span className='absolute top-0 left-[41%] text-gray-500 text-xs'>Recent Friends</span>
                </div>)}
                {optState==='All Friends' && (<div className='overflow-y-auto thin-scroll max-h-[305px] f;ex-1 flex flex-col gap-4'>
                
                    {flist.map((friend, index) => (
                        <div key={index} className='flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <input type="checkbox" />
                                <img src={friend.img} className='h-12 w-12 rounded-full'/>
                                <div className='flex flex-col'>
                                    <span className='font-medium'>{friend.name}</span>
                                    <div className='flex gap-2 items-center justify-start'>
                                        <span
                                            className={`h-3 w-3 rounded-full ${
                                                friend.status === "online" ? "bg-green-500 animate-[pulse-glow_1s_infinite]" : "bg-gray-400"
                                            }`}
                                        />
                                        <span className={` ${
                                                friend.status === "online" ? "text-green-500" : "text-gray-400"
                                            }`}
                                        >
                                                {friend.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>)}
                {optState==='Online' && (<div className='overflow-y-auto thin-scroll max-h-[425px] min-h-[425px] flex flex-col gap-4'>
                    {flist.filter((f)=>f.status==='online').map((friend, index) => (
                        <div key={index} className='flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <input type="checkbox" />
                                <img src={friend.img} className='h-12 w-12 rounded-full'/>
                                <div className='flex flex-col'>
                                    <span className='font-medium'>{friend.name}</span>
                                    <div className='flex gap-2 items-center justify-start'>
                                        <span
                                            className={`h-3 w-3 rounded-full ${
                                                friend.status === "online" ? "bg-green-500 animate-[pulse-glow_1s_infinite]" : "bg-gray-400"
                                            }`}
                                        />
                                        <span className={` ${
                                                friend.status === "online" ? "text-green-500" : "text-gray-400"
                                            }`}
                                        >
                                                {friend.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>)}
            </div>
        </div> 
    </>
  )
}

export default Friends