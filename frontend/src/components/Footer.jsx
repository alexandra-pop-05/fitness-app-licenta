import React from "react";
import { IconButton } from "@mui/material";


// import footer data
import { footer } from "../data";
import { bgcolor } from "@mui/system";

export const Footer = () => {
  // destructure footer data
  const { logo, socials } = footer;
  return (
    <footer className="bg-neutral-400 h-[100px] md:h-[150px] px-[20px]">
      <div
        className="container mx-screen h-full flex-col md:flex-row-reverse justify-between items-center md:items-end md:pb-[50px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >

        {/* logo */}
        <div className="flex-shrink-0 md:order-2 flex justify-center md:justify-start">
        <a href="/" >
          <img className="h-[30px] md:h-[60px] mr-4 mt-6" src={logo} alt="" />
        </a>
        </div>

        {/* social media icons */}
        <div className="flex-grow-1 flex justify-end md:justify-end items-end  md:order-2  md:mt-0">
          {socials.map((social) => (
            <IconButton key={social.link} href={social.link} target="_blank" >
              <social.icon style={{color: "white"}}/>
            </IconButton>
          ))}
        </div>

      </div>
    </footer>
  );
};
