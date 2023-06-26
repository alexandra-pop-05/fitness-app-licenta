import React from "react";
import { shopBanner } from "../data";

export const ShopBanner = () => {
    const { titlePart1, titlePart2, subtitle, image } = shopBanner;
    return (
      <section className="relative">
        <div
          className="absolute w-full h-full bg-center bg-cover opacity-80"  
          style={{ backgroundImage: `url(${image})` }}
        >
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 mb-3">
          <h1 className="text-5xl font-bold text-white mb-4 mt-10">
            {titlePart1} <span className="text-primary-200">{titlePart2}</span>
          </h1>
          <p className="text-2xl text-white mb-8">{subtitle}</p>
          
        </div>
      </section>
    );
  };

