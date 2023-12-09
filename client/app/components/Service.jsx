import Link from "next/link";
import React from "react";

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
        <div className=" mx-auto text-center pb-4">
          <div className="mx-auto text-center  bg-neutral-200 pb-1">
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

          {/* <div className="mx-auto container  sm:px-6 sm:py-2 lg:px-8 bg-white ">
            <div className="relative isolate overflow-hidden bg-white px-6 pt-4 shadow-xl sm:rounded-3xl sm:px-4 md:pt-4 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-7xl text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-center">
             

                <div className="bg-white py-6 sm:py-6 ">
                  <div className="mx-auto grid  px-6 lg:px-4">
                    <ul
                      role="list"
                      className=" mx-auto grid grid-flow-row justify-stretch gap-12  sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 xl:col-span-2"
                    >
                      {management.map((person) => (
                        <li
                          key={person.name}
                          className="mx-auto justify-items-center"
                        >
                          <h2 className=" text-lg cursor-pointer rounded-md tracking-widest bg-yellow-500 px-2 py-1 text-mg font-medium uppercase text-gray-900 hover:text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            {" "}
                            {person.name}
                          </h2>
                          <Link href="#">
                            <img
                              className="mx-auto h-50 w-auto mt-4 rounded-lg border-2 border-neutral-400 p-3"
                              src={person.imageUrl}
                              alt="Your Company"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
     
    </>
  );
}

export default Service;
