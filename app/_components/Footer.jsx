"use client";
import Image from "next/image";
import React from "react";
import Jiggle from "./Jiggle";
import Rounded from "./Rounded";
import Contactbox from "./ui/Contactbox";

const Footer = () => {
  const phonelink = () => {
    window.open("tel:+916284607938", "_blank");
  };
  const emaillink = () => {
    window.open("mailto:jaskaran1519@gmail.com", "_blank");
  };

  return (
    <div className=" min-h-screen bg-[#19191c] w-full">
      <div className="w-[80%] mx-auto md:w-[70%]">
        <div className="text-white font-semibold  pt-[12vh] leading-tight text-[4rem] md:text-[6rem]">
          <div className="flex gap-5">
            <Image
              src="/footer.jpg"
              width={200}
              height={200}
              alt="/"
              className="rounded-full items-center w-[6rem] h-[6rem]"
            />

            <h1>Contact</h1>
          </div>
          <h1>Information</h1>
        </div>
        <hr className=" mt-16 text-gray-900" />
        <div className="mt-10 flex flex-wrap gap-10 text-[1.5rem]">
          <Rounded>
            <button
              onClick={emaillink}
              className="bg-[#19191c] text-white border-[1px] border-[#5c5c66] px-[2rem] py-[1rem] rounded-full overflow-hidden"
            >
              <Jiggle>
                <p className="z-10 relative">jaskaran1519@gmail.com</p>
              </Jiggle>
            </button>
          </Rounded>

          <Rounded>
            <button
              onClick={phonelink}
              className="bg-[#19191c] text-white border-[1px] border-[#5c5c66] px-[2rem] py-[1rem] rounded-full overflow-hidden flex justify-center items-center"
            >
              <Jiggle>
                <p className="z-10 relative">+91 6284607938</p>
              </Jiggle>
            </button>
          </Rounded>
          <Contactbox />
        </div>
      </div>
    </div>
  );
};

export default Footer;
