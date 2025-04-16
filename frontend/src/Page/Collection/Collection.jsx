import React from "react";
//import { useState } from "react";
import { products } from "../../assets/frontend_assets/assets";
import Fill from "../../Components/Fill";

//const allCategori = ["All", "Men", "Kids", "Women"];

const Collection = () => {
  //const [kategori, setKategori] = useState("All");

  //const byCategory = setKategori === "All" ? kategori : products.filter((item) => item.category === kategori);

  return (
    <div className="px-4 md:px-6 lg:px-40 mt-8 flex flex-col ">
      <div className="flex flex-row justify-between gap-8">
        <Fill />
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <p className="text-xl  text-gray-700 font-medium">ALL<span className="text-xl font-bold ml-1">COLLECTIONS</span></p>
            <span className="w-10 h-px bg-gray-500"></span>
          </div>
          <div className="gap-10 grid md:grid-cols-5 mt-10">
            {products.map((data) => (
              <div className="md:text-center flex flex-col" key={data._id}>
                <img src={data.image} alt="" className="" />
                <p className="">{data.name}</p>
                <p className="">{data.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
