import React from "react";

// import data form the data file
import { about} from "../../data";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

//import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, icon, link } = about;
  return (

    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* section title */}
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={icon} alt="" />
          <h2 className="h2 section-title ">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <p
          className="md:text-body-md mb-12 "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle1}
        </p>
        <p
          className="md:text-body-md mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {subtitle2}
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            className="link flex items-center gap-x-4 hover:gap-x-6 transition-all "
            href="/register"
          >
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </section>

  );
};
