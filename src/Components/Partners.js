import React from "react";

export default function Partners() {
  return (
    <div className="md:p-40 p-20 py-40 md:py-20" style={{backgroundColor:'#181818'}}>
      <div className="flex items-center justify-center" style={{backgroundColor:'#181818'}}>
        <div className="block justify-center content-center text-center md:w-4/5 xl:pl-4 xl:pr-4">
        <h1 className="block mb-4  font-graphik text-5xl font-normal leading-16 tracking-wide   leading-none  text-white md:text-5xl lg:text-6xl ">
           Partners
          </h1>
          <div className="flex justify-center">
          <p className="text-white lg:w-96 w-72 font-graphik font-normal text-base leading-7 tracking-wide sm:tracking-wider">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <div className="p-9">
        <img className=" max-w-2xl hidden object-center object-cover lg:block h-auto"
          src={require("../photos/Brands1.png")}
          alt="photo"
        ></img>
        <img
          className=" w-48 max-w-sm object-center object-cover lg:hidden h-auto "
          src={require("../photos/Brands2.png")}
          alt="photo"
        ></img>
      </div>
      </div>
      <div className="flex justify-center ">
          <a
            href="#"
            className=" w-36 justify-center inline-flex items-center border-2 p-3 text-sm font-medium text-center text-white font-graphik  border-white "
          >
            All Partners
          </a>
        </div>
    </div>
  );
}
