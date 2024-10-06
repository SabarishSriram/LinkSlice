import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoIosLink } from "react-icons/io";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import DialogForm from "./DialogForm";

function Shortner() {
  const [fullUrl, setfullUrl] = useState("https://google.com");
  const [validation, setvalidation] = useState("");
  const [dialog, setdialog] = useState(false);

  const linkSchema = z.object({
    fullUrl: z.string().url(),
  });

  const test = {
    fullUrl: fullUrl,
  };

  const handleclick = () => {
    try {
      console.log(linkSchema.parse(test));
      setdialog(true);
      setvalidation("");
      console.log(dialog);
    } catch (error) {
      setdialog(false);
      setvalidation("Invalid Url");
      console.log(dialog);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleclick();
      console.log("Enter key pressed");
    }
  };

  return (
    <div>
      <div className="flex px-1 py-1 focus-within:border-[#793fff] mt-8 bg-[#181E29] items-center justify-center rounded-full border-[#323E59] border-2">
        <div className="p-3">
          <IoIosLink className="text-white text-lg md:text-xl lg:text-2xl" />
        </div>

        <input
          onChange={(e) => setfullUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          value={fullUrl}
          placeholder="Enter your link"
          className="w-44 sm:w-52 md:w-60 bg-transparent focus:outline-none text-white lg:w-80 focus:border-hidden border-none text-sm sm:text-sm md:text-md lg:text-md"
        />
        <button
          open={dialog}
          onopenchange={setdialog}
          onClick={handleclick}
          className="bg-[#793fff] text-sm md:text-sm px-3 py-3 sm:px-3 sm:py-3 md:px-4 md:py-3 lg:px-3 lg:py-3 text-white rounded-full font-bold"
        >
          Shorten Now!
        </button>
        <Dialog className="w-full h-full"  open={dialog} onOpenChange={setdialog}>
          <DialogContent className="bg-[#0B0F1B] p-10  border-none rounded-lg shadow-lg">
            <DialogDescription className="w-full h-full">
              <DialogForm/>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <p className="text-center mt-3 text-red-600">{validation}</p>
      </div>
    </div>
  );
}

export default Shortner;
