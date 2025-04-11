import React from "react";
import { products } from "../../assets/frontend_assets/assets";


const Lat = () => {
  return (
    <div className="px-4 md:px-6 lg:px-40 mt-30">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <p className="text-xl  text-gray-700 font-medium">
            LATEST<span className="text-xl font-bold ml-1">COLLECTIONS</span>
          </p>
          <span className="w-10 h-px bg-gray-500"></span>
        </div>
        <div className="">
          <p className="md:text-start text-center pt-2 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>
      </div>

      {/* card */}
      <div className="gap-10 grid md:grid-cols-5 mt-10">
        {
          products.slice(0, 10).map((data) =>(
            <div className="" key={data._id}>
              <img src={data.image} alt=""  className=""/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Lat;
