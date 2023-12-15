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
 
];

function page() {
  return (
    <>
    {/* breadcrumb */}
     <div className='py-4 ps-4'>
<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600  ">
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
        <Link href="/ourservice" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2  ">Our Services</Link>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 ">3D-Printing</span>
      </div>
    </li>
  </ol>
</nav>
</div>
 {/* banner */}
          <div className=" bg-technology">
            <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
              <div className="text-center mt-10 mb-12 p-5">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ">
                  <Link href="#" className="font-semibold text-yellow-600">
                    <span
                      className="absolute inset-0 ps-2"
                      aria-hidden="true"
                    />{" "}
                  </Link>
                </div>
                <div className=" bg-gray-200 mt-4 bg-opacity-70 rounded-lg py-3 px-5">
                  <h1 className="my-4 text-4xl font-medium text-gray-900  md:text-5xl lg:text-5xl sm:text-5xl">
                    <span className=" text-teal-800 font-medium uppercase tracking-wide ">
                     3D Printing Services
                    </span>
                  </h1>
                  <p className="my-6 sm:text-xl uppercase text-xl tracking-widest border-t-2 font-semibold pt-4 text-neutral-700 text-center leading-loose border-white">
                    An innovation hub, providing an immersive platform for
students
                  </p>
                </div>
              </div>
            </div>
          </div>
{/* 3D printing solutions */}
      <div className=" bg-gray-200">
        <h4 className="text-4xl block  px-2 py-4 text-center bg-yellow-500 font-semibold tracking-widest uppercase  text-neutral-700 sm:text-4xl">
          
        </h4> 
       <div className="mx-auto max-w-5xl sm:text-center text-center p-2">
          <h2 className="lg:text-5xl font-bold tracking-wide  text-gray-900 sm:text-3xl md:text-3xl flex-wrap">
           <span className=" text-3xl  text-gray-600 lg:text-3xl font-bold tracking-wide sm:text-3xl">
              STEMTEC offers precise and customized
            </span> 
            <span className=" text-3xl sm:text-3xl text-gray-600 lg:text-3xl font-bold tracking-wide ">
             <span className="text-yellow-500 font-bold"> 3D printing solutions</span> tailored to diverse industry needs.
            </span>
          </h2>
        </div>
        <p className="ps-6 pt-1 mt-2  container mx-auto text-2xl sm:text-2xl lg:leading-loose sm:leading-normal text-gray-700 font-medium tracking-wide">
          Our
team employs advanced technology to deliver high-quality 3D prints for various applications.
        </p>

        <ul>
          <li className="ps-6 py-4  container mx-auto border-b-2 border-gray-400 text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold me-1 uppercase text-lg ">
              Precision and Tailored Printing -
            </span>{" "}
           Using cutting-edge 3D printing technology, we ensure accuracy and reliability in every print. Our services
cover rapid prototyping, detailed modeling, and more, providing efficient and precise printing solutions.
          </li>
          
          <li className="ps-6 py-8  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
              Customized Solutions Across Industries
            </span>{" "}
           STEMTEC&#39;s 3D printing services cater to industries such as product design, engineering, healthcare, and
more. We collaborate closely with clients to understand their needs, delivering prints that meet specific
project goals and industry standards.
          </li>
         
         {/* Collaborative Research Spaces */}
          <li className="px-6 pb-4  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
        Reliable 3D Printing Solutions
            </span>{" "}
            Partnering with STEMTEC means reliable access to professional 3D printing services. Whether for
prototyping new designs or creating intricate models, our commitment is to deliver high-quality 3D
prints that foster innovation and streamline project workflows.
          </li>
        
        </ul>
      </div>

      <div className="pt-4 pb-1 text-wrap container mx-auto">
        <p className="mt-2 p-4 container mx-auto text-md sm:text-md leading-loose text-neutral-800 font-normal text-center tracking-widest">
          STEMTEC&#39;s AI Lab Setup aims to equip students with a solid foundation in AI, 
          <span className="font-semibold">
            {" "}
           nurturing their
interest and proficiency in this rapidly evolving field. By providing a 
          </span>{" "}
          <span className="text-yellow-500 font-semibold ">
            {" "}
         blend of theoretical
knowledge, practical experimentation, collaborative research opportunities, and ethical
discussions, 
          </span>{" "}
         the lab prepares students to responsibly navigate the complexities of AI in their
academic and professional pursuits.
        </p>
      </div>
      <div className="mx-auto sm:px-3 sm:py-1 lg:px-4 bg-white ">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-4 sm:rounded-3xl sm:px-4 md:pt-4 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-7xl text-center lg:mx-0 lg:flex-auto lg:py-0 lg:text-center">
            {/* Image */}

            <div className="bg-white py-1 sm:py-1 container mx-auto ">
              <div className="mx-auto py-4 grid  px-6 lg:px-4">
                <ul
                  role="list"
                  className=" mx-auto grid grid-flow-row justify-stretch gap-4 lg:grid-cols-4  sm:grid-cols-2  sm:gap-4 xl:col-span-2"
                >
                  {management.map((person) => (
                    <li
                      key={person.name}
                      className="mx-auto justify-items-center"
                    >
                      <Link href="#">
                        <Image
                          className="mx-auto h-50 w-auto mt-1 shadow-xl rounded-lg border-2 border-neutral-300 p-2"
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
