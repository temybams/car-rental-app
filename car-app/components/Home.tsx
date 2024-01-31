"use client";

import Image from "next/image";
import React from "react";

function Homepage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Premium Car Rental in Your Area
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20  mt-5">
          {" "}
          Book the selected car effortlessly, Pay for driving only, Book the car Now.
        </h2>{" "}
        <button className="p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all">
          Explore Cars
        </button>
      </div>
      <div>
        <Image
          src="/cary.png"
          alt="car"
          height={800}
          width={650}
          className="w-full object-cover align"
        />
      </div>
    </div>
  );
}

export default Homepage;
