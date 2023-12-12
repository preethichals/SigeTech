import React from "react";

import Mission from "../components/Mission";
import OurStory from "../components/OurStory";


function page() {
  return (
    <>
    <div className=" py-24 sm:py-32 bg-about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
         
          <h2 className="text-4xl font-bold text-center tracking-wide text-gray-900  flex-wrap">
           Welcome to STEMTEC
            <span className="mt-6 ms-3 text-3xl leading-8 text-gray-600  font-bold tracking-wide sm:text-3xl">
             <br/> Where Innovation in Education and Product Development Thrives!
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
