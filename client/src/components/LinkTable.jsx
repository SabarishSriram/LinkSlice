import React, { useEffect } from "react";
import { HiExternalLink } from "react-icons/hi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaTrash } from "react-icons/fa6";
import axios from "axios";
import { serverUrl } from "@/helpers/constant";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

function LinkTable({ data }) {
  const { toast }=useToast()
  const [urls, setUrls] = useState(data);
  console.log(data);
  console.log(urls);

  const deleteUrl = async (id) =>{
    await axios.delete(`${serverUrl}/${id}`);
    setUrls(urls.filter((url) => url.id !== id));
    toast({
      title: "URl has been deleted successfully",
      status: "success",
      duration: 3000,
      isclosable: true,
      className:
        "bg-gradient-to-r from-[#1a00c8] to-[#a200ff] text-white border-none",
    });
  };
  const navUrl = (url) => {
    window.open(`${serverUrl}/${url}`, "_blank");
  };
  

  return (
    <div>
      <div className="max-h-[400px] custom-scrollbar overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-[#000000]">
                <TableHead className="text-gray-400">Full URL</TableHead>
                <TableHead className="text-gray-400">Short URL</TableHead>
                <TableHead className="text-center text-gray-400">
                  Clicks
                </TableHead>
                <TableHead className="text-center text-gray-400">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((url) => (
                <TableRow
                  key={url.id}
                  className="border-gray-800 hover:bg-[#000000]"
                >
                  <TableCell className="max-w-[300px] truncate text-gray-300">
                    {url.fullUrl}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {url.shortUrl}
                  </TableCell>
                  <TableCell className="text-center text-gray-300">
                    {url.click}
                  </TableCell>
                  <TableCell className="flex justify-center items-center gap-4 text-gray-300">
                    <FaTrash
                      onClick={() => deleteUrl(url._id)}
                      className="text-red-700 text-[18px] cursor-pointer"
                    />
                    <HiExternalLink
                      onClick={() => navUrl(url.shortUrl)}
                      className="text-green-700 text-[25px] cursor-pointer"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
    </div>
  );
}

export default LinkTable;
