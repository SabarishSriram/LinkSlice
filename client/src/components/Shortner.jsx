import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dialog, DialogClose } from "./ui/dialog";
import { IoIosLink } from "react-icons/io";
import { z } from "zod";

function Shortner() {
  const [fullUrl, setfullUrl] = useState("https://google.com");

  const linkSchema = z.object({
    fullUrl: z.string().url(),
  });
  const test = {
    fullUrl: fullUrl,
  };

  const handleclick=()=>{
    try {
      linkSchema.parse(test);
      console.log("Valid URL");
    } catch (error) {
      console.log("Invalid URL");
    }
  }

  
  return (
    <div className="flex px-1 py-1 focus-within:border-[#793fff]  mt-6 bg-[#181E29] items-center justify-center rounded-full border-[#323E59] border-2">
      <div className="p-3">
        <IoIosLink className="text-white text-lg md:text-xl lg:text-2xl" />
      </div>

      <input
        onChange={(e) => setfullUrl(e.target.value)}
        value={fullUrl}
        placeholder="Enter your link"
        className="w-44 sm:w-52 md:w-60 bg-transparent focus:outline-none text-white lg:w-80 focus:border-hidden border-none text-sm sm:text-sm md:text-md lg:text-md"
      />
      <button 
      onClick={handleclick}
      className="bg-[#793fff] text-sm md:text-sm px-3 py-3 sm:px-3 sm:py-3 md:px-4 md:py-3 lg:px-3 lg:py-3 text-white rounded-full font-bold">
        Shorten Now!
      </button>
    </div>
  );
}

export default Shortner;
