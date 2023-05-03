"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import google from "@/public/icons/download.png";
import gif from "@/public/JavaScript.gif";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      searchValue
    )}`;
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="h-[25rem] justify-center items-center w-full flex p-4">
          <Image
            src={gif}
            alt="js-gif"
            width={1000}
            height={1000}
            className="h-full w-[100%] object-contain pointer-events-none"
          />
        </div>
        <div className="flex justify-center items-center gap-1 w-full">
          <div className="border-[2px] border-[#2f2f2f] px-4 py-2 rounded-md w-[70%] flex justify-start items-center gap-6">
            <Image
              src={google}
              alt="google-logo"
              width={1000}
              height={1000}
              className="w-8 h-8 object-contain pointer-events-none"
            />
            <input
              type="text"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-[100%]"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              onKeyPress={handleKeyPress}
              placeholder="Search the web"
            />
          </div>
          <button
            className="p-3 border-[2px] border-[#2f2f2f] rounded-md"
            onClick={handleSearch}
          >
            <AiOutlineSearch size={25} />
          </button>
        </div>
      </div>
    </>
  );
}
