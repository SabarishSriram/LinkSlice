import React from "react";
import { MdContentCopy } from "react-icons/md";

function DialogForm() {
  return (
    <div className="flex flex-col justify-center gap-6 w-full h-full bg-transparent">
      {/* First Row for "Original" */}
      <div className="flex items-center justify-center w-full gap-6">
        <p className="text-white font-semibold pr-4 text-lg leading-none">
          Original
        </p>
        <a
          type="text"
          className="border-none box-border focus:outline-none px-3 py-6 w-80 bg-[#181f29] rounded-lg text-white"
        ></a>
        <button>
          <MdContentCopy className="text-xl text-white" />
        </button>
      </div>

      {/* Second Row for "Shortened" */}
      <div className="flex items-center justify-center w-full mt-3 gap-6">
        <p className="text-white font-semibold text-lg leading-none">
          Shortened
        </p>
        <a
          type="text"
          className="border-none box-border focus:outline-none px-3 py-6 w-80 bg-[#181f29] rounded-lg text-white"
        ></a>
        <button>
          <MdContentCopy className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
}

export default DialogForm;
