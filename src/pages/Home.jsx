import React, { useState } from "react";
import { RiChat3Line, RiGroupLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { MdPersonAddAlt } from "react-icons/md";
import { FiSettings, FiSun, FiMoon } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Chats from "./Chats.jsx";

const Home = () => {
    const aL = ["chats", "groups", "friends", "requests", "settings", "profile"];
    const [pState, setPState] = useState("chats");
    const [isDark, setIsDark] = useState(true);

    return (
        <>
            <div className="bg-black/90 absolute left-0 top-0 bottom-0 w-15">
                <div className="flex flex-col justify-between h-full">

                    {/* ---- TOP ICONS ---- */}
                    <div className="flex flex-col items-center space-y-8 text-white text-2xl">

                        {/* Chats */}
                        <RiChat3Line
                        onClick={() => setPState("chats")}
                        title={aL[0]}
                        className={`cursor-pointer mt-5 hover:text-green-500 ${
                            pState === "chats" ? "text-white" : "text-gray-500"
                        }`}
                        />

                        {/* Groups */}
                        <RiGroupLine
                        onClick={() => setPState("groups")}
                        title={aL[1]}
                        className={`cursor-pointer hover:text-green-500 ${
                            pState === "groups" ? "text-white" : "text-gray-500"
                        }`}
                        />

                        {/* Friends */}
                        <FaUserFriends
                        onClick={() => setPState("friends")}
                        title={aL[2]}
                        className={`cursor-pointer hover:text-green-500 ${
                            pState === "friends" ? "text-white" : "text-gray-500"
                        }`}
                        />

                        {/* Requests */}
                        <MdPersonAddAlt
                        onClick={() => setPState("requests")}
                        title={aL[3]}
                        className={`cursor-pointer hover:text-green-500 ${
                            pState === "requests" ? "text-white" : "text-gray-500"
                        }`}
                        />

                        {/* Settings */}
                        <FiSettings
                        onClick={() => setPState("settings")}
                        title={aL[4]}
                        className={`cursor-pointer hover:text-green-500 ${
                            pState === "settings" ? "text-white" : "text-gray-500"
                        }`}
                        />
                    </div>

                    {/* ---- BOTTOM ICONS ---- */}
                    <div className="flex items-center justify-center flex-col mb-5 gap-5">

                        {/* Profile Pic */}
                        <img
                        src="user1.jpg"
                        className="h-6 w-6 rounded-full cursor-pointer"
                        onClick={() => setPState("profile")}
                        />

                        {/* Dark / Light Mode */}
                        {isDark ? (
                        <FiSun
                            className="text-white text-2xl cursor-pointer hover:text-yellow-400"
                            onClick={() => setIsDark(false)}
                        />
                        ) : (
                        <FiMoon
                            className="text-white text-2xl cursor-pointer hover:text-blue-500"
                            onClick={() => setIsDark(true)}
                        />
                        )}

                        {/* Profile */}
                        <CgProfile
                        onClick={() => setPState("profile")}
                        title={aL[5]}
                        className={`cursor-pointer text-2xl hover:text-green-500 ${
                            pState === "profile" ? "text-white" : "text-gray-500"
                        }`}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 relative left-15 w-[calc(100%-3.75rem)] min-h-screen ">
                {/* Main content based on pState */}
                {pState === "chats" && <Chats/>}
            </div>
        </>
    );
};

export default Home;
