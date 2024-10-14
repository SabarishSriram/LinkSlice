import React, { useState } from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";
import axios from "axios";
import { serverUrl } from "@/helpers/constant";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LinkTable from "./LinkTable";

function Navbar() {
  const [open, setopen] = useState(false);
  const [Urldata, setUrldata] = useState([]);

  const handleclick = async () => {
    const response = await axios.get(`${serverUrl}/info`);
    let Urldata = response.data;
    setUrldata(Urldata);
    setopen(true);
  };
  return (
    <div className="flex justify-between items-center md:px-7 md:py-5 lg:px-8 lg:py-5 px-5 py-5">
      <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-[#793fff] to-[#c118ff] text-transparent bg-clip-text font-bold">
        LinkSlice
      </h1>
      <div className="flex gap-2">
        <a target="_blank" href="https://github.com/SabarishSriram/LinkSlice">
          <Button className="bg-[#212121] md:gap-3 lg:gap-4 gap-2 md:px-4 px-3 py-5 font-bold">
            <SiGithub size={20} />
            GitHub
          </Button>
        </a>
        <div>
          <Dialog open={open} onOpenChange={setopen}>
            <DialogTrigger>
              <Button
                onClick={handleclick}
                className="bg-[#793fff] hover:bg-[#a335fd] px-3 md:px-4 lg:px-6 py-5 font-bold"
              >
                My Links
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-[#0B0F1B] border-gray-800">
              <DialogHeader className="text-gray-200">All Links</DialogHeader>
              <LinkTable data={Urldata} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
