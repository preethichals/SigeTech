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
     {/* breadcrumb */}
     <div className='py-4 ps-4'>
<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-white">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
        Home
      </Link>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
        <Link href="/ourservice" className="ms-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Our Services</Link>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
        <span className="ms-1 text-sm underline font-medium text-gray-700 md:ms-2 dark:text-gray-400">Robotics</span>
      </div>
    </li>
  </ol>
</nav>
</div>   
{/* Robotics Lab Setup */}
      <div className=" bg-gray-100">
         <div className="mx-auto max-w-5xl sm:text-center text-center p-4">
          <h2 className="lg:text-5xl font-bold tracking-wide  text-gray-900 sm:text-3xl md:text-3xl flex-wrap">
           <span className=" ms-3 text-3xl  text-gray-600 lg:text-3xl font-bold tracking-wide sm:text-3xl">
             <br/> STEMTEC&#39;s<span className="text-yellow-500 font-bold"> Robotics Lab Setup</span><br/> serves as an innovation-driven space
            </span> 
            <span className="mt-6 ms-3 text-3xl sm:text-3xl text-gray-600 lg:text-3xl font-bold tracking-wide ">
designed to ignite curiosity
and practical exploration in the realm of<br/><span className=" text-emerald-800">robotics and automation.</span> 
            </span>
          </h2>
        </div>
   

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

      <div className="pt-4 pb-3 text-wrap container mx-auto">
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
