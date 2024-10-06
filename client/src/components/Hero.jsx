import React from "react";
import Shortner from "./Shortner";

function Hero() {
  return (
    <div>
      <div className="flex flex-col min-h-screen mt-[-60px] items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r select-none text-transparent py-3 bg-clip-text from-[#793fff] to-[#c118ff] font-extrabold">
          Shorten Your Loooong Links :)
        </h1>
        <h1 className="text-white mt-5 text-sm mx-3 md:text-md md:text-lg font-light  text-center select-none">
          <p>Introducing LinkSlice - The Ultimate Link Shortener.</p>
          <p>Shorten URLs, share links, delve into detailed analytics.</p>
          <p>Effortlessly, All in one platform. </p>
        </h1>
        <Shortner />
      </div>
    </div>
  );
}

export default Hero;
