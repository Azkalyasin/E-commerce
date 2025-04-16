import React from "react";

const Fill = () => {
  return (
    <div className="h-36 min-w-60 pl-4 pt-2 border border-gray-800 mt-17">
      <p className="">Categories</p>
      <div className="pt-2">
        <input type="checkbox" />
        <label htmlFor="" className="">
          Man
        </label>
      </div>

      <div className="block">
        <input type="checkbox" />
        <label htmlFor="" className="">
          Women
        </label>
      </div>

      <div className="block">
        <input type="checkbox" />
        <label htmlFor="" className="">
          Kids
        </label>
      </div>
    </div>
  );
};

export default Fill;
