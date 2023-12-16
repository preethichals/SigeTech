import Link from "next/link";
import React from "react";

import Mission from "../components/Mission";
import OurStory from "../components/OurStory";

function page() {
  return (
    <>
      {/* banner */}
      <div className="bg-service">
        <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
          <div className="text-center mt-10 mb-12 p-5">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ">
              <Link href="#" className="font-semibold text-yellow-600">
                <span className="absolute inset-0 ps-2" aria-hidden="true" />{" "}
              </Link>
            </div>
            <div className=" bg-gray-200 mt-4 bg-opacity-70 rounded-lg py-3 px-5">
              <h1 className="my-4 text-4xl font-medium text-gray-900  md:text-5xl lg:text-5xl sm:text-5xl">
                <span className=" text-teal-800 font-medium uppercase tracking-wide ">
                  <span className="text-yellow-500">Welcome to</span>{" "}
                  <span className="text-emerald-600">StemTec</span>
                </span>
              </h1>
              <p className="my-6 sm:text-xl uppercase text-xl tracking-widest border-t-2 font-semibold pt-4 text-neutral-700 text-center leading-loose border-white">
                Where Innovation in Education and Product Development Thrives!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Mission />
      <OurStory />
    </>
  );
}

export default page;
