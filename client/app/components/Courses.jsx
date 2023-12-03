import Link from "next/link";
import React from "react";

function Courses() {
  return (
    <>
     <div className="bg-gray-700 mx-auto">
      <h4 className="text-4xl block  py-4 text-center bg-yellow-500   font-semibold tracking-widest uppercase  text-neutral-800 sm:text-4xl">
         Robotic Course We Offer 
      </h4>
        <p className=" uppercase mt-2 container mx-auto  sm:text-2xl text-xl tracking-widest font-semibold py-4 text-neutral-100 text-center leading-loose ">
          " Full-Stack Robot Developer "
        </p>

<p className="mt-2 pb-4 container mx-auto text-md sm:text-md leading-loose text-neutral-100 font-normal text-center tracking-widest">
            This program equips the participants to think and innovate new
            robotic products that can be deployed to solve or automate a
            real-world problem.<span className="font-semibold"> This program focuses mainly on</span>  <span className="text-yellow-500 font-semibold "> 'The process of
            building a physical robotic system' </span> all the way from problem
            identification, Idea generation to developing a physical system that
            can be deployed in real-time.{" "}
          </p>
          </div>
    <div className=" bg-neutral-200">
     
      <div className=" mx-auto text-center pb-4">
        
        <div className="mx-auto text-center container bg-neutral-200 pb-1">
          
          <p className="pt-4  font-medium text-gray-700 ">
            <span className="  text-xl sm:text-xl tracking-widest uppercase font-semibold">
              During this program, </span>{" "} 
          
   
            
          </p>
          <p className=" font-medium text-gray-800 mt-2 mb-4">
            
            
            <span className="tracking-wide">
              The Students will learn all the
            </span>{" "}
            <span className="text-xl font-extrabold uppercase tracking-widest text-emerald-700">
              ' Basic Tools '
            </span>{" "}
            <span className="tracking-wide">to build an </span><span className="text-xl font-extrabold uppercase tracking-widest text-emerald-700">Autonomous Robotic System.</span>
          <span
            href="#"
            className=" cursor-pointer rounded-md tracking-widest ms-3 bg-yellow-500 px-2 py-1 text-mg font-medium uppercase text-gray-900 hover:text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View Course
          </span>
          </p>
        </div>

        <div className="mx-auto container  sm:px-6 sm:py-2 lg:px-8 bg-neutral-200 ">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-4 shadow-xl sm:rounded-3xl sm:px-4 md:pt-4 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-7xl text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-center">
              {/* Image */}
              <div className="flex">
                <div className="flex-auto">
                  <Link href="/ourservice/course"><img
                    src="course-img.png"
                    alt="course-imgae"
                    className="h-full w-auto object-cover object-center"
                  /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      </div>
    </>
  );
}

export default Courses;
