import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const About = () => {
  return (
    <div className="px-4 md:px-6 lg:px-40 mt-8">
      {/* Section: About Us Intro */}
      <div className="text-center mb-10">
        <h1 className="text-2xl text-gray-400">
          ABOUT <span className="text-black font-medium">US</span>
        </h1>
      </div>

      <div className="flex md:flex-row flex-col gap-16 items-center">
        <img src={assets.about_img} alt="About" className="max-h-96 rounded-md" />
        <div className="text-center md:text-start">
          <p className="mb-6">
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p className="mb-6">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <h2 className="font-semibold text-lg mb-2">Our Mission</h2>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Section: Why Choose Us */}
      <div className="mt-40">
        <h1 className="text-2xl text-start text-gray-400 mb-12">
          WHY <span className="text-black font-medium">CHOOSE US</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Quality Assurance</h2>
            <p>
              We ensure that every product we offer meets the highest standards of quality. Our dedicated team carefully evaluates each item to provide the best value and satisfaction for our customers.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Convenience</h2>
            <p>
              With a user-friendly platform and secure payment methods, shopping with us is easy and hassle-free. Browse, order, and receive your items — all from the comfort of your home.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Exceptional Customer Service</h2>
            <p>
              Our support team is always ready to help. Whether you have a question, need assistance, or require after-sales support, we’re here to ensure a smooth experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
