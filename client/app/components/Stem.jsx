import Link from "next/link";
import React from "react";

function Stem() {
  return (
    <>
    <div className="container mx-auto">
 

 

        {/* Stem Lab Setup */}
        <div className="grid mt-6 w-full grid-cols-1 bg-white p-8 rounded-3xl  items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mx-auto">
          <div className=" max-w-xl sm:col-span-8 md:col-span-8 text-center lg:col-span-7 my-auto mx-auto container ">
            <h2 className="text-2xl text-center sm:text-2xl pt-4 text-yellow-500 tracking-wide uppercase font-semibold">
              Stem Lab Setup
            </h2>
            <h2 className=" text-center leading-loose font-bold border-b-2 border-neutral-300 pb-1  mt-3 tracking-widest text-gray-800 ">
              LAB Setup with Intricately Design
            </h2>
            <h2 className="text-center lg:px-12 font-medium mt-2 mb-4  text-gray-500 leading-loose sm:px-12">
              STEMTEC&#39;s STEM Lab Setup is intricately designed to provide an
              engaging and interactive learning environment <span className="font-semibold text-emerald-700">' Specifically for School Students '</span>
            </h2>

            <button className="hover:bg-yellow-500  hover:border-gray-400  border-2 tracking-widest text-base  transition scroll-smooth hover:text-gray-50 shadow-xl rounded-lg bg-yellow-400 px-4 py-2 inline-block font-semibold uppercase text-gray-900 ">
              <Link href="/ourservice/stem"> More Details </Link>
            </button>
          </div>
          <div className="aspect-h-3 aspect-w-2 overflow-hidden  bg-white sm:col-span-4 md:col-span-4 lg:col-span-5 rounded-image">
            <img
              src="/cloud-5.jpg"
              alt=""
              className="object-cover object-center "
            />
          </div>
        </div>

        {/* AI Lab Setup */}
        <div className="grid my-6  w-full grid-cols-1 bg-gray-600 p-8  items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mx-auto">
           <div className="aspect-h-3 aspect-w-2 overflow-hidden  bg-white sm:col-span-4 md:col-span-4 lg:col-span-5 rounded-image">
            <img
              src="/learn.webp"
              alt=""
              className="object-cover object-center "
            />
          </div>
          <div className="max-w-xl sm:col-span-8 md:col-span-8 text-center lg:col-span-7 my-auto mx-auto container ">
            <h2 className="text-2xl text-center sm:text-2xl pt-4 text-emerald-300 tracking-wide uppercase font-semibold">
             AI Lab Setup
            </h2>
            <h2 className=" text-center leading-loose font-bold border-b-2 border-neutral-300 pb-1  mt-3 tracking-widest text-gray-100 ">
              AI LAB Setup an Innovation Hub
            </h2>
            <h2 className="text-center lg:px-12 font-medium mt-2 mb-4  text-white leading-loose sm:px-12">
              An immersive platform for
students to explore the diverse facets of <span className="font-semibold text-yellow-500">' Artificial Intelligence (AI) and Machine Learning '</span>
            </h2>

            <button className="hover:bg-yellow-500  border-gray-400 hover:border-gray-200  border-2 tracking-widest text-base  transition scroll-smooth hover:text-gray-50 rounded-lg bg-yellow-400 px-4 py-2 inline-block font-semibold uppercase text-gray-900 ">
              <Link href="/ourservice/AI-lab"> More Details </Link>
            </button>
          </div>
         
        </div>

        {/* Robotics Lab Setup */}
         <div className="grid  w-full grid-cols-1 bg-white p-8 rounded-3xl  items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mx-auto">
          <div className="max-w-xl sm:col-span-8 md:col-span-8 text-center lg:col-span-7 my-auto mx-auto container ">
            <h2 className="text-2xl text-center sm:text-2xl pt-4 text-yellow-500 tracking-wide uppercase font-semibold">
              Robotics Lab Setup
            </h2>
            <h2 className=" text-center leading-loose font-bold border-b-2 border-neutral-300 pb-1  mt-3 tracking-widest text-gray-800 ">
             innovation-driven space designed 
            </h2>
            <h2 className="text-center lg:px-6 font-medium mt-2 mb-4  text-gray-500 leading-loose sm:px-12">
             Ignite curiosity
and Practical exploration in the realm of Robotics and Automation.
            </h2>

            <button className="hover:bg-yellow-500  hover:border-gray-400  border-2 tracking-widest text-base  transition scroll-smooth hover:text-gray-50 shadow-xl rounded-lg bg-yellow-400 px-4 py-2 inline-block font-semibold uppercase text-gray-900 ">
              <Link href="/ourservice/robotics"> More Details </Link>
            </button>
          </div>
          <div className="aspect-h-3 aspect-w-2 overflow-hidden  bg-white sm:col-span-4 md:col-span-4 lg:col-span-5 rounded-image">
            <img
              src="/cloud-1.jpg"
              alt=""
              className="object-cover object-center "
            />
          </div>
        </div>

        {/* PCB Design */}
          <div className="grid my-6  w-full grid-cols-1 bg-gray-600 p-8  items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mx-auto">
           <div className="aspect-h-3 aspect-w-2 overflow-hidden  bg-white sm:col-span-4 md:col-span-4 lg:col-span-5 rounded-image">
            <img
              src="/cloud-1.jpg"
              alt=""
              className="object-cover object-center "
            />
          </div>
          <div className="max-w-xl sm:col-span-8 md:col-span-8 text-center lg:col-span-7 my-auto mx-auto container ">
            <h2 className="text-2xl text-center sm:text-2xl pt-4 text-emerald-300 tracking-wide uppercase font-semibold">
              PCB Design Services
            </h2>
            <h2 className=" text-center leading-loose font-bold border-b-2 border-neutral-300 pb-1  mt-3 tracking-widest text-gray-100 ">
              Tailored PCB (Printed Circuit Board) Design
            </h2>
            <h2 className="text-center lg:px-6 font-medium mt-2 mb-4  text-white leading-loose sm:px-12">
              PCB (Printed Circuit Board) design solutions meticulously crafted to meet
diverse industry needs
            </h2>

            <button className="hover:bg-yellow-500  border-gray-400 hover:border-gray-200  border-2 tracking-widest text-base  transition scroll-smooth hover:text-gray-50 rounded-lg bg-yellow-400 px-4 py-2 inline-block font-semibold uppercase text-gray-900 ">
              <Link href="/ourservice/pcb"> More Details </Link>
            </button>
          </div>
         
        </div>
     

        {/* 3D Printing Service */}
       <div className="grid  w-full grid-cols-1 bg-white p-8 rounded-3xl  items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mx-auto">
          <div className=" max-w-xl sm:col-span-8 md:col-span-8 text-center lg:col-span-7 my-auto mx-auto container ">
            <h2 className="text-2xl text-center sm:text-2xl pt-4 text-yellow-500 tracking-wide uppercase font-semibold">
             3D Printing Services
            </h2>
            <h2 className=" text-center leading-loose font-bold border-b-2 border-neutral-300 pb-1  mt-3 tracking-widest text-gray-800 ">
                 We offers precise and customized 3D printing solutions tailored to diverse industry needs.
            </h2>
            <h2 className="text-center lg:px-6 font-medium mt-2 mb-4  text-gray-500 leading-loose sm:px-12">
 Our
team employs advanced technology to deliver high-quality 3D prints for various applications.
            </h2>

            <button className="hover:bg-yellow-500  hover:border-gray-400  border-2 tracking-widest text-base  transition scroll-smooth hover:text-gray-50 shadow-xl rounded-lg bg-yellow-400 px-4 py-2 inline-block font-semibold uppercase text-gray-900 ">
              <Link href="/ourservice/3d-printing"> More Details </Link>
            </button>
          </div>
          <div className="aspect-h-3 aspect-w-2 overflow-hidden  bg-white sm:col-span-4 md:col-span-4 lg:col-span-5 rounded-image">
            <img
              src="/cloud-1.jpg"
              alt=""
              className="object-cover object-center "
            />
          </div>
        </div>
 
   </div>
    </>
  );
}

export default Stem;
