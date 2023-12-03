import React from "react";

import Mission from "../components/Mission";
import OurStory from "../components/OurStory";


function page() {
  return (
    <>
    <div className=" py-24 sm:py-32 bg-about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="lg:text-5xl font-bold tracking-wide text-gray-900 sm:text-4xl flex-wrap">
            Translate Robotic Technology
            <span className="mt-6 ms-3 md:text-3xl leading-8 text-gray-600 lg:text-3xl font-bold tracking-wide sm:text-2xl">
              as a Tool for Learners and Educators to Engender Futerustic
              Innovators
            </span>
          </h2>
        </div>
   
      </div>
    </div>

     <Mission/>
    <OurStory/>
    </>
  );
}

export default page;
