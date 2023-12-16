import Link from "next/link";
import React from "react";
import Image from "next/image";

const management = [
  {
    name: "Course",
    imageUrl: "cloud-2.jpg",
  },
  {
    name: "Stem Lab Setup",
    imageUrl: "cloud-2.jpg",
  },
  {
    name: "AI Lab Setup",
    imageUrl: "cloud-2.jpg",
  },
  {
    name: "Robotics Lab Setup",
    imageUrl: "cloud-2.jpg",
  },
  {
    name: "PCB Design",
    imageUrl: "cloud-2.jpg",
  },
  {
    name: "3D Printing Service",
    imageUrl: "cloud-2.jpg",
  },
];
function Service() {
  return (
    <>
    
      <div className="bg-white">
        <div className=" mx-auto text-center">
          <div className="mx-auto text-center  bg-neutral-200  px-4 pb-1">
            <p className="pt-8 font-medium text-gray-700 ">
              <span className="  text-2xl sm:text-2xl tracking-widest uppercase font-semibold">
              Lorem ipsum dolor sit amet,{" "}
              </span>{" "}
            </p>
            <p className=" font-medium text-gray-800 mt-2 mb-4">
              <span className="tracking-wide">
                consectetur adipiscing elit
              </span>{" "}
              <span className="text-xl font-extrabold uppercase tracking-widest text-emerald-700">
                ' Sed do eiusmod '
              </span>{" "}
              <span className="tracking-wide">to build an </span>
              <span className="text-xl font-extrabold uppercase tracking-widest text-yellow-500">
                voluptate velit esse cillum dolore
              </span>
            </p>
            <p className="mt-2 p-4 container mx-auto text-md sm:text-md leading-loose text-neutral-800 font-normal text-center tracking-widest">
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
          </div>

      
        </div>
      </div>
     
    </>
  );
}

export default Service;
