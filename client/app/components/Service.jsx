
import Link from "next/link";
import React from "react";

const management = [
  {
    name: "Course",
    imageUrl: "cloud-2.jpg",
  },{
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
      
      <div className=" bg-neutral-200">
        <div className=" mx-auto text-center pb-4">
          <div className="mx-auto text-center container bg-neutral-200 pb-1">
            <p className="pt-4  font-medium text-gray-700 ">
              <span className="  text-2xl sm:text-2xl tracking-widest uppercase font-semibold">
                During this program,{" "}
              </span>{" "}
            </p>
            <p className=" font-medium text-gray-800 mt-2 mb-4">
              <span className="tracking-wide">
                The Students will learn all the
              </span>{" "}
              <span className="text-xl font-extrabold uppercase tracking-widest text-emerald-700">
                ' Basic Tools '
              </span>{" "}
              <span className="tracking-wide">to build an </span>
              <span className="text-xl font-extrabold uppercase tracking-widest text-emerald-700">
                Autonomous Robotic System.
              </span>
              
            </p>
          </div>

          <div className="mx-auto container  sm:px-6 sm:py-2 lg:px-8 bg-neutral-200 ">
            <div className="relative isolate overflow-hidden bg-white px-6 pt-4 shadow-xl sm:rounded-3xl sm:px-4 md:pt-4 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-7xl text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-center">
                {/* Image */}
               
                  <div className="bg-white py-6 sm:py-6 ">
                    <div className="mx-auto grid  px-6 lg:px-4">
                      <ul
                        role="list"
                        className=" mx-auto grid grid-flow-row justify-stretch gap-12  sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 xl:col-span-2"
                      >
                        {management.map((person) => (
                          <li key={person.name} className="mx-auto justify-items-center">
<h2 className=" text-lg cursor-pointer rounded-md tracking-widest bg-yellow-500 px-2 py-1 text-mg font-medium uppercase text-gray-900 hover:text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">                           {person.name}
                            </h2>
                            <Link href="#"><img
                              className="mx-auto h-50 w-auto mt-4 rounded-lg border-2 border-neutral-400 p-3"
                              src={person.imageUrl}
                              alt="Your Company"
                            /></Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* course banner */}
      <div className=" bg-technology py-8">
        <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
          <div className="text-center mt-10 mb-12 p-5">
            <div className=" bg-gray-800 mt-4 bg-opacity-70 rounded-lg py-3 px-5">
              <h1 className="text-4xl font-medium text-gray-900 dark:text-white md:text-5xl lg:text-5xl sm:text-5xl">
                <span className=" uppercase leading-relaxed text-neutral-100">
                  Courses <br />
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 mx-auto">
        <h4 className="text-4xl block  py-4 text-center bg-yellow-500   font-semibold tracking-widest uppercase  text-neutral-800 sm:text-4xl">
          Course We Offer
        </h4>
       <p className=" uppercase mt-2 container mx-auto  sm:text-2xl text-xl tracking-widest font-semibold py-4 text-neutral-100 text-center leading-loose ">
          " Full-Stack Robot Developer "
        </p>

        <p className="mt-2 pb-4 container mx-auto text-md sm:text-md leading-loose text-neutral-100 font-normal text-center tracking-widest">
          Discover how a real-world robotic system works, build electromechanical systems, enable autonomous operation ability, 
          <span className="font-semibold">
            {" "}
            This program focuses mainly on
          </span>{" "}
          <span className="text-yellow-500 font-semibold ">
            {" "}
            'The process of building a physical robotic system'{" "}
          </span>{" "}
          and break the barrier between online courses and reality.
        </p>
        </div>
         <div className=" bg-neutral-200">
        <div className=" mx-auto text-center pb-4">
          <div className="mx-auto text-center container bg-neutral-200 pb-1">
            <p className="pt-4  font-medium text-gray-700 ">
              <span className="  text-xl sm:text-xl tracking-widest uppercase font-semibold">
                During this program,{" "}
              </span>{" "}
            </p>
            <p className=" font-medium text-gray-800 mt-2 mb-4">
              <span className="tracking-wide">
                The Students will learn all the
              </span>{" "}
              <span className="text-xl font-extrabold uppercase tracking-widest text-emerald-700">
                ' Basic Tools '
              </span>{" "}
              <span className="tracking-wide">to build an </span>
              <span className="text-xl font-extrabold uppercase tracking-widest text-emerald-700">
                Autonomous Robotic System.
              </span>
              
            </p>
          </div>

         
        </div>
      </div>
    </>
  );
}

export default Service;
