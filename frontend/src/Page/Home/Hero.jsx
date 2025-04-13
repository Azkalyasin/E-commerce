import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="px-4 md:px-6 lg:px-40 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Kiri: Text Section */}
        <div className="text-center md:text-start flex-1">
          {/* OUR BESTSELLERS */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="w-10 h-px bg-gray-500"></span>
            <p className="text-xs tracking-widest text-gray-600 font-medium">OUR BESTSELLERS</p>
          </div>

          {/* Latest Arrivals */}
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Latest Arrivals</h1>

          {/* SHOP NOW */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <p className="text-sm font-semibold text-gray-700">SHOP NOW</p>
            <span className="w-10 h-px bg-gray-500"></span>
          </div>
        </div>

        {/* Kanan: Gambar Hero */}
        <div className="flex-1">
          <img src={assets.hero_img} alt="Hero" className="w-full max-h-[400px] object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
