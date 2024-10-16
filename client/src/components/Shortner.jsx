import React, { useState } from "react";
import { IoIosLink } from "react-icons/io";
import { z } from "zod";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../components/ui/dialog";
import DialogForm from "./DialogForm";
import { Tabs } from "@radix-ui/react-tabs";
import axios from "axios";
import { serverUrl } from "@/helpers/constant";
import { linkSchema } from "@/helpers/formSchema";
import Spinner from "./Spinner";
function Shortner() {
  const [fullUrl, setfullUrl] = useState("");
  const [spinner, setspinner] = useState(false);
  const [dialog, setdialog] = useState(false);
  const [data, setdata] = useState([]);
  const [validationmessage, setvalidationmessage] = useState(false);

  const test = {
    fullUrl: fullUrl,
  };

  const handleclick = async () => {
    try {
      linkSchema.parse(test);
      setvalidationmessage(false);
      setspinner(true);
      const response = await axios.post(`${serverUrl}`, {
        fullUrl: fullUrl,
      });
      let data = response.data;
      setdata(data);
      setdialog(true);
      setspinner(false);
    } catch (error) {
      setvalidationmessage(true);
      setdialog(false);
      setspinner(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleclick();
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
          onClick={handleclick}
          className="bg-[#793fff] text-sm md:text-sm px-3 py-3 sm:px-3 sm:py-3 md:px-4 md:py-3 lg:px-3 lg:py-3 text-white rounded-full font-bold"
        >
          Shorten Now!
        </button>
        <Dialog
          className="w-full h-full"
          open={dialog}
          onOpenChange={setdialog}
        >
          <DialogTitle className="hidden" />
          <DialogContent className=" bg-[#0B0F1B] bg-cover bg-center flex flex-col  h-96 max-w-2xl max-h-[90vh]  border-none rounded-xl shadow-xl">
            <Tabs defaultValue="links" className="w-fit dark ">
              <TabsList className="">
                <TabsTrigger
                  className="text-[#793fff] px-2 py-1 rounded-md font-semibold bg-[#181f29] ml-5 text-xl"
                  value="links"
                >
                  Links
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <DialogDescription className="w-full h-full">
              <DialogForm data={data} />
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex text-red-600 justify-center mt-3">
        <div>{spinner ? <Spinner /> : null}</div>
        <p>{validationmessage ? "This is an Invalid URL" : null}</p>
      </div>
    </div>
  );
}

export default Shortner;
