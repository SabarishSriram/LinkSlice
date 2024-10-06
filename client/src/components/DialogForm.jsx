import React from "react";
import { MdContentCopy } from "react-icons/md";

function DialogForm() {
  return (
    <div className="flex flex-col w-full h-full bg-red-400 items-center justify-center ">
      <div className="flex items-center justify-start mt-3 w-full gap-10  ">
        <p className="text-white font-semibold pr-5  text-lg">Original</p>
        <input type="text" className="border-none box-border focus:outline-none px-3 py-3 w-72 bg-[#181f29] rounded-lg text-white " />
        <button>
          <MdContentCopy className="text-xl text-white" />
        </button>
      </div>
      <div className="flex mt-3 gap-10 items-center">
        <p className="text-white justify-start items-center font-semibold text-lg">Shortened</p>
        <input type="text" className="border-none box-border focus:outline-none px-3 py-3 w-72 bg-[#181f29] rounded-lg text-white " />
        <button>
          <MdContentCopy className="text-xl text-white" />
        </button>
      </div>
      
    </div>
  );
}

export default DialogForm;
