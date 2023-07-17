import React from "react";

export default function Gallery(){
    return(
        <>
        <div className="bg-black flex items-center justify-center">
          <div className="block text-center md:w-4/5 xl:pl-4 xl:pr-4">
            <h1 className="block mb-6 pl-20 pr-20 mt-6 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80  text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
              Gallery
            </h1>
            <p className="text-white pl-14 pr-14 sm:pl-60 sm:pr-60 xl:pl-80 xl:pr-80 font-normal text-base leading-7 tracking-tight sm:tracking-wider">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src={require("../photos/gallery1.png")}
                  alt="photo"
                ></img>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src={require("../photos/gallery2.png")}
                  alt="photo"
                ></img>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src={require("../photos/gallery3.png")}
                  alt="photo"
                ></img>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src={require("../photos/gallery4.png")}
                  alt="photo"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block max-w-7xl mx-auto px-4 lg:px-4 py-12">
          <div className="grid grid-cols-3">
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src={require("../photos/gallery5.png")}
                  alt="photo"
                ></img>
              </div>
            </div>
            <div className="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src={require("../photos/gallery6.png")}
                  alt="photo"
                ></img>
              </div>
            </div>
            <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  className="object-center object-cover h-auto w-full"
                  src={require("../photos/gallery7.png")}
                  alt="photo"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <a
            href="#"
            className=" w-36 justify-center inline-flex items-center border-2 p-3 text-sm font-medium text-center text-white border-white "
          >
            See more
          </a>
        </div>
        </>
    );
}