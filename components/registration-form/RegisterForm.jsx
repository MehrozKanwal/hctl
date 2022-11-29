import React from "react";
import { FaAccusoft } from "react-icons/fa";

function RegisterForm() {
  return (
    <div className="container-sm text-center m-10 ">
      <h1 className=" text-4xl mb-10 font-semibold text-appColor">Job Seeker </h1>
      <div className="grid grid-cols-2  gap-4">
        <div>
          <label class="relative block">
            <span class="absolute inset-y-0  flex items-center pl-2">
              <FaAccusoft />
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <div>
          <label class="relative block">
            <span class="absolute inset-y-0  flex items-center pl-2">
              <FaAccusoft />
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
