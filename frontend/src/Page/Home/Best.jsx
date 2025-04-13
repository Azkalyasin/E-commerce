import React from "react";
import { products } from "../../assets/frontend_assets/assets";
import { assets } from "../../assets/frontend_assets/assets";

const Best = () => {
  const bestSeller = products.filter((data) => data.bestseller === true).slice(0, 5);
  return (
      <div className="px-4 md:px-6 lg:px-40 mt-30">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <p className="text-xl  text-gray-700 font-medium">
              BEST<span className="text-xl font-bold ml-1">SELLER</span>
            </p>
            <span className="w-10 h-px bg-gray-500"></span>
          </div>
          <div className="">
            <p className="md:text-start text-center pt-2 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
          </div>
        </div>

        {/* card */}
        <div className="gap-10 grid md:grid-cols-5 mt-10">
          {bestSeller.map((data) => (
            <div className="" key={data._id}>
              <img src={data.image} alt="" className="" />
            </div>
          ))}
        </div>

        {/* icons */}
        <div className="flex flex-col md:flex-row items-center justify-around mt-60">
          <div className="flex flex-col items-center">
            <img src={assets.exchange_icon} alt="" className="h-10" />
            <h1 className="mt-4 font-medium">Easy Exchange Policy</h1>
            <p className="mt-1 text-gray-500">We offer hassle free  exchange policy</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={assets.quality_icon} alt="" className="h-10" />
            <h1 className="mt-4 font-medium">7 Days Return Policy</h1>
            <p className="mt-1 text-gray-500">We provide 7 days free return policy </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={assets.support_img} alt="" className="h-10" />
            <h1 className="mt-4 font-medium">Best Customer Support</h1>
            <p className="mt-1 text-gray-500">We provide 24/7 customer support</p>
          </div>
        </div>
      </div>
  );
};

export default Best;
