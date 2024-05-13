import Image from "next/image";
import React from "react";
import Jiggle from "./Jiggle";

const Footer = () => {
  return (
    <div className=" h-[100vh] bg-[#19191c] w-full">
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
          <Jiggle>
            <button className="bg-[#19191c] text-white border-[1px] border-[#5c5c66] px-[2rem] py-[1rem] rounded-full overflow-hidden">
              <Jiggle>jaskaran1519@gmail.com</Jiggle>
            </button>
          </Jiggle>
          <Jiggle>
            <button className="bg-[#19191c] text-white border-[1px] border-[#5c5c66] px-[2rem] py-[1rem] rounded-full overflow-hidden">
              <Jiggle>+91 6284607938</Jiggle>
            </button>
          </Jiggle>
        </div>
      </div>
    </div>
  );
};

export default Footer;
