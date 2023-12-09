import Link from "next/link";
import React from "react";
import Image from "next/image";

const management = [
  {
    name: "Course",
    imageUrl: "/cloud-2.jpg",
  },
  {
    name: "Stem Lab Setup",
    imageUrl: "/cloud-2.jpg",
  },
  {
    name: "AI Lab Setup",
    imageUrl: "/cloud-2.jpg",
  },
  {
    name: "Robotics Lab Setup",
    imageUrl: "/cloud-2.jpg",
  },
  {
    name: "PCB Design",
    imageUrl: "/cloud-2.jpg",
  },
  {
    name: "3D Printing Service",
    imageUrl: "/cloud-2.jpg",
  },
];

function page() {
  return (
    <>
      <div classname=" bg-gray-100">
        <h4 className="text-4xl block  px-2 py-4 text-center bg-yellow-500   font-semibold tracking-widest uppercase  text-neutral-800 sm:text-4xl">
          Robotics Lab Setup
        </h4>
        <p className="ps-6 py-4 mt-5  container mx-auto text-lg sm:text-base leading-loose text-neutral-800 font-medium tracking-wide">
          STEMTEC&#39;s Robotics Lab Setup serves as an innovation-driven space designed to ignite curiosity
and practical exploration in the realm of robotics and automation.
          <br /> <br />  This dynamic learning
environment encompasses:
        </p>

        <ul>
          <li className="ps-6 py-4  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
          Comprehensive Robotics Platforms:
            </span>{" "}
            Featuring a diverse range of robotics platforms
tailored for various skill levels, the lab enables students to interact with robotics
systems, from basic to advanced configurations. These platforms serve as a foundation
for students to explore robotics concepts and experiment with diverse functionalities.
          </li>
          <li className="ps-6 pb-8  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
              Practical Experimentation Zones:
            </span>{" "}
           Equipped with experimentation zones, students
engage in hands-on activities to program and control robots, gaining practical skills in
robotics. These zones allow for experimentation with sensors, actuators, and
programming languages, fostering a deeper understanding of robotic mechanisms.
          </li>
          {/* banner */}
          <div className=" bg-technology">
            <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
              <div className="text-center mt-10 mb-12 p-5">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ">
                  <a href="#" className="font-semibold text-yellow-600">
                    <span
                      className="absolute inset-0 ps-2"
                      aria-hidden="true"
                    />{" "}
                  </a>
                </div>
                <div className=" bg-gray-200 mt-4 bg-opacity-70 rounded-lg py-3 px-5">
                  <h1 className="my-4 text-4xl font-medium text-gray-900 dark:text-white md:text-5xl lg:text-5xl sm:text-5xl">
                    <span className=" text-teal-800 font-medium uppercase tracking-wide ">
                      Robotics Lab Setup
                    </span>
                  </h1>
                  <p className="my-6 sm:text-xl uppercase text-xl tracking-widest border-t-2 font-semibold pt-4 text-neutral-700 text-center leading-loose border-white">
                    Practical Exploration in the realm of robotics and automation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <li className="ps-6 py-4 mt-4  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
             Industry Collaboration and Practical Applications:
            </span>{" "}
            The lab facilitates partnerships with
industry experts, exposing students to real-world applications and practices. This
collaboration offers insights into current industry trends, challenges, and opportunities,
enhancing students&#39; readiness for future endeavors in the field of robotics.
          </li>
         
        </ul>
      </div>

      <div classname="pt-4 pb-3 text-wrap container">
        <p className="mt-2 p-4 container mx-auto text-md sm:text-md leading-loose text-neutral-800 font-normal text-center tracking-widest">
          STEMTEC&#39;s Robotics Lab Setup aims to inspire and empower students to explore the realms of robotics.

          <span className="font-semibold">
            {" "}
            By offering diverse robotics platforms, 
          </span>{" "}
          <span className="text-yellow-500 font-semibold ">
            {" "}
           practical experimentation zones, industry collaborations, and
innovation spaces, 
          </span>{" "}
          <span className="font-semibold">the lab cultivates students&#39; curiosity and proficiency in robotics, preparing them for
the challenges and innovations shaping the future of automation.</span>
        </p>
      </div>
      <div className="mx-auto sm:px-3 sm:py-2 lg:px-4 bg-white ">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-4 sm:rounded-3xl sm:px-4 md:pt-4 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-7xl text-center lg:mx-0 lg:flex-auto lg:py-4 lg:text-center">
            {/* Image */}

            <div className="bg-white py-3 sm:py-3 ">
              <div className="mx-auto grid  px-6 lg:px-4">
                <ul
                  role="list"
                  className=" mx-auto grid grid-flow-row justify-stretch gap-8  sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 xl:col-span-2"
                >
                  {management.map((person) => (
                    <li
                      key={person.name}
                      className="mx-auto justify-items-center"
                    >
                      <Link href="#">
                        <Image
                          className="mx-auto h-50 w-auto mt-4 shadow-xl rounded-lg border-2 border-neutral-300 p-3"
                          src={person.imageUrl}
                          width={500}
                          height={500}
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
      </div>
    </>
  );
}

export default page;
