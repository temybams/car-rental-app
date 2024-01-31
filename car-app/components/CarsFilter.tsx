"use client";

import React from "react";

function CarsFilters() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Car Catalog</h2>
        <h2>Explore cars you might like</h2>
      </div>
      <div className="flex gap-5">
        <select
          defaultValue="option1"
          className="select select-bordered w-full max-w-xs"
        >
          <option value="option1">Price</option>
          <option value="option2">Min to Max</option>
          <option value="option3">Max to Min</option>
        </select>

        <select
        defaultValue="option1"
          className="select
         select-bordered w-full md:block max-w-xs hidden "
        >
          <option value="option1">
            Manufactural
          </option>
          <option value="option2">Honda</option>
          <option value="option3">Hyundai</option>
          <option value="option4">BMW</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFilters;
