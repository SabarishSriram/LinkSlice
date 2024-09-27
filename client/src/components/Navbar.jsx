import React from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";

function Navbar() {
  return (
    <div className="flex justify-between items-center md:px-7 md:py-5 lg:px-8 lg:py-5 px-5 py-5">
      <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-[#793fff] to-[#c118ff] text-transparent bg-clip-text font-bold">
        LinkSlice
      </h1>
      <div className="flex gap-2">
        <a href="https://github.com/SabarishSriram/LinkSlice">
          <Button className="bg-[#212121] md:gap-3 lg:gap-4 gap-2 md:px-4 px-3 py-5 font-bold">
            <SiGithub size={20} />
            GitHub
          </Button>
        </a>
        <div>
          <Button className="bg-[#c118ff] px-3 md:px-4 lg:px-6 py-5 font-bold">My Links</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
