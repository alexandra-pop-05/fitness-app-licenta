import React, { useEffect, useState } from "react";

// import data
//import { community } from "../../data";

import CommunityIcn from "../../../src/assets/img/community/icons/community-icn.svg";
import CommunitySlider from "./CommunitySlider";
import axios from "axios";

const Community = () => {
  // destructure community data
  //const { testimonials } = community;
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/testimonials");
      const testimonials = res.data;
      setTestimonials(testimonials);

    } catch (error) {
      console.log("Error fetching testimonials:", error);
    }
  };

  return (
    <section className="section relative">
      <div className="container mx-auto">
        <div className="flex">
          {/* section title */}
          <div
            className="section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <img src={CommunityIcn} alt="" />
            <h2 className="h2 section-title">
              Testimonials <span className="text-primary-200">.</span>
            </h2>
          </div>
          {/* slider */}
          <div
            className="absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
