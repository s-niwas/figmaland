import React from "react";

export default function Contents() {
  return (
    <div style={{backgroundColor:'#181818'}}>
    <div className=" pt-28 m-2 md:p-20 md:pt-0 md:m-0" >
      <div className=" flex items-center justify-center" >
        <div className="block text-center md:w-4/5  " >
        <h1 className="block mb-4 font-graphik text-5xl font-normal leading-16 tracking-tight leading-none  text-white md:text-5xl lg:text-6xl ">
             Contents
          </h1>
          <div className="flex justify-center">
          <p className="text-white lg:w-96 w-72 font-graphik font-normal text-base leading-7 tracking-wide sm:tracking-wider">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-10 p-10 space-y-5 lg:space-y-0">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <div className="p-5">
              <h5 className="mb-2 text-center text-2xl font-medium tracking-tight text-black ">
                Work
              </h5>

              <p className="mb-3 text-center md:pl-10 md:pr-10 font-normal text-gray-400 ">
                Ever wondered if you're too reliant on a client for work? Slate
                helps you identify .
              </p>
              <div className="flex justify-center pt-5 m-10">
                <a
                  href="/signup"
                  className="justify-center w-36 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white font-graphik  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Sign Up
                </a>
              </div>
              <div className=" lg:pt-10">
                <img
                  className="rounded-t-lg"
                  src={require("../photos/MacbookPro.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow  ">
            <div className="p-5 justify-center">
            <div className="flex justify-center">
              <h5 className="mb-2 w-36  md:w-fit mt-4 text-center text-2xl font-medium tracking-tight text-black ">
                Design with real data
              </h5>
              </div>

              <p className="mb-3 text-center md:pl-10 md:pr-10 font-normal text-gray-400 ">
                Ever wondered if you're too reliant on a client for work? Slate
                helps you identify .
              </p>
              <div className="flex justify-center pt-5 m-10">
                <a
                  href="/signup"
                  className=" w-36 justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white font-graphik  bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Try For Free
                </a>
              </div>

              <img
                className="rounded-t-lg"
                src={require("../photos/Notifications.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
