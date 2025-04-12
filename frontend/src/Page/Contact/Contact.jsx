import React from "react";
import Subscribe from "../../Components/Subscribe";
import { assets } from "../../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-40 mt-8">
        {/* Section: Contact Us Intro */}
        <div className="text-center mb-10">
          <h1 className="text-2xl text-gray-400">
            CONTACT <span className="text-black font-medium">US</span>
          </h1>
        </div>

        <div className="flex md:flex-row flex-col gap-16 items-center">
          <img src={assets.contact_img} alt="About" className="max-h-96 rounded-md" />
          <div className="text-center md:text-start">
            <p className="mb-6">54709 Willms Station Suite 350, Washington, USA</p>
            <p className="mb-6">Tel: (415) 555‑0132</p>
            <h2 className="font-semibold text-lg mb-2">Careers at Forever</h2>
            <p>Learn more about our teams and job openings.</p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Contact;
