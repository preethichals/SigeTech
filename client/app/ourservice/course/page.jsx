import Link from "next/link";
import React from "react";
import Image from 'next/image'


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
   <div>
  <div classname="bg-white py-24 sm:py-32">
    <h4 className="text-4xl block  ps-8 py-4 bg-slate-100 font-semibold tracking-widest uppercase  text-neutral-800 sm:text-4xl">
         Stem Lab Setup
      </h4>
        <p className=" uppercase mt-2 container mx-auto  sm:text-2xl text-xl tracking-widest font-semibold py-4 text-neutral-800 text-center leading-loose ">
          " Full-Stack Robot Developer "
        </p>

<p className="mt-2 p-4 container mx-auto text-md sm:text-md leading-loose text-neutral-800 font-normal text-center tracking-widest">
            This program equips the participants to think and innovate new
            robotic products that can be deployed to solve or automate a
            real-world problem.<span className="font-semibold"> This program focuses mainly on</span>  <span className="text-yellow-500 font-semibold "> 'The process of
            building a physical robotic system' </span> all the way from problem
            identification, Idea generation to developing a physical system that
            can be deployed in real-time.{" "}
          </p>
  </div>
 

    <div className=" bg-technology">
        <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
           
          <div className="text-center mt-10 mb-12 p-5">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ">
           Courses We Offer, Project Consultation and Development, 
              <a href="#" className="font-semibold text-yellow-600">
                <span className="absolute inset-0 ps-2" aria-hidden="true" /> View Our Services <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className=" bg-gray-200 mt-4 bg-opacity-70 rounded-lg py-3 px-5">
           
              <h1 className="mb-4 text-4xl font-medium text-gray-900 dark:text-white md:text-5xl lg:text-5xl sm:text-5xl">
                <span className="text-transparent leading-relaxed bg-clip-text bg-gradient-to-l to-yellow-500 from-teal-800">
                  Learn, Build and Deploy <br />
                </span>{" "}
                <span className=" text-teal-800 font-medium tracking-tight">
                  Robotic Technology
                </span>
              </h1>
              <p className="my-6 sm:text-xl uppercase text-xl tracking-widest font-semibold pt-4 text-neutral-700 text-center leading-loose border-t border-gray-300">
                To Automate Your Real-World Environment
              </p>
            </div>

             
          </div>
        </div>

      </div>

       <div classname="pt-4 pb-3 text-wrap container">
   
<p className="mt-2 p-4 container mx-auto text-md sm:text-md leading-loose text-neutral-800 font-normal text-center tracking-widest">
            This program equips the participants to think and innovate new
            robotic products that can be deployed to solve or automate a
            real-world problem.<span className="font-semibold"> This program focuses mainly on</span>  <span className="text-yellow-500 font-semibold "> 'The process of
            building a physical robotic system' </span> all the way from problem
            identification, Idea generation to developing a physical system that
            can be deployed in real-time.{" "}
          </p>
  </div>
        <div className="mx-auto container  sm:px-6 sm:py-2 lg:px-8 bg-white ">
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
                        <li
                          key={person.name}
                          className="mx-auto justify-items-center"
                        >
                          <h2 className=" text-lg cursor-pointer rounded-md tracking-widest bg-yellow-500 px-2 py-1 text-mg font-medium uppercase text-gray-900 hover:text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            {" "}
                            {person.name}
                          </h2>
                          <Link href="#">
                            <Image
                              className="mx-auto h-50 w-auto mt-4 rounded-lg border-2 border-neutral-400 p-3"
                              src={person.imageUrl} width={500} height={500}
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
</div>

  );
}

export default page;
