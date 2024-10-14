import React from "react";
import { MdContentCopy } from "react-icons/md";
import { serverUrl } from "@/helpers/constant";
import { useToast } from "@/hooks/use-toast";

function DialogForm({ data }) {
  const { toast } = useToast();
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: text,
      status: "success",
      duration: 3000,
      isClosable: true,
      className:
        "bg-gradient-to-r from-[#1a00c8] to-[#a200ff] text-white border-none",
    });
  };

  return (
    <div className="flex flex-col justify-center gap-6 w-full h-full bg-transparent p-4 md:p-8">
      {/* First Row for "Original" */}
      <div className="flex items-center justify-center w-full gap-4 md:gap-6">
        <span className="text-white font-semibold pr-4 text-lg leading-none">
          Original
        </span>
        <a
          rel="noreferrer noopener"
          href={data.fullUrl}
          target="_blank"
          type="text"
          className="border-none text-[16px] box-border focus:outline-none px-3 py-2 md:py-5 w-full md:w-72 bg-[#181f29] rounded-lg text-white truncate"
        >
          {data.fullUrl}
        </a>
        <button
          onClick={() => handleCopy(data.fullUrl)}
          className="mt-2 md:mt-0"
        >
          <MdContentCopy className="text-xl text-white" />
        </button>
      </div>

      {/* Second Row for "Shortened" */}
      <div className="flex items-center justify-center w-full gap-4 md:gap-6 mt-3">
        <span className="text-white font-semibold text-lg leading-none">
          Shortened
        </span>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href={`${serverUrl}/${data.shortUrl}`}
          type="text"
          className="border-none text-[16px] box-border focus:outline-none px-3 py-2 md:py-5 w-full md:w-72 bg-[#181f29] rounded-lg text-white truncate"
        >
          {`${serverUrl}/${data.shortUrl}`}
        </a>
        <button
          onClick={() => handleCopy(`${serverUrl}/${data.shortUrl}`)}
          className="mt-2 md:mt-0"
        >
          <MdContentCopy className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
}
export default DialogForm;
