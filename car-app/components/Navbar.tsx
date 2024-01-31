"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px] "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Image src="/car.png" alt="logo" width={40} height={40} />
      <div className=" hidden md:flex gap-5">
        <motion.h2 className="hover:bg-blue-500 px-4 cursor-pointer p-2 rounded-full hover:text-white">
          Home
        </motion.h2>
        <h2 className="hover:bg-blue-500 px-4 cursor-pointer p-2 rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-blue-500 px-4 cursor-pointer p-2 rounded-full hover:text-white">
          Contact Us
        </h2>
      </div>
      <UserButton />
    </motion.div>
  );
}

export default Navbar;
