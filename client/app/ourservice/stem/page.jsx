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
      <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-600  ">
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
        <Link href="/ourservice" className="ms-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ms-2  ">Our Services</Link>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
        <span className="ms-1 text-sm underline font-medium text-gray-700 md:ms-2 ">Stem-Lab-Setup</span>
      </div>
    </li>
  </ol>
</nav>
</div>   
  {/* banner */}
          <div className="bg-service1">
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
                    <span className=" text-red-600 font-medium uppercase tracking-wide ">
                      STEM Lab Setup
                    </span>
                  </h1>
                  <p className="my-6 sm:text-xl uppercase text-xl tracking-widest border-t-2 font-semibold pt-4 text-yellow-800 text-center leading-loose border-gray-500">
                    Intricately design to provide an engaging and interactive
                    learning environment
                  </p>
                </div>
              </div>
            </div>
          </div>
 {/* Stem Lab Setup */}
      <div className=" bg-gray-200">
       <h4 className="text-4xl block  px-2 py-4 text-center bg-yellow-500 font-semibold tracking-widest uppercase  text-neutral-700 sm:text-4xl">
          
        </h4> 
       
        <p className="ps-6 py-4 mt-5  container mx-auto text-lg sm:text-base leading-loose text-neutral-800 font-medium tracking-wide">
          STEMTEC&#39;s STEM Lab Setup is intricately designed to provide an
          engaging and interactive learning environment specifically for school
          students, aimed at nurturing curiosity, fostering exploration, and
          enabling hands-on application across various scientific disciplines.
          <br /> <br /> This meticulously crafted space, curated with younger
          learners in mind, encompasses:
        </p>

        <ul>
          <li className="ps-6 py-4  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
              Diverse Learning Stations :
            </span>{" "}
            Strategically designed to cater to students at different levels of
            understanding, the STEM Lab comprises distinct learning stations
            that focus on fundamental scientific principles. These stations
            offer a myriad of interactive experiments and activities, aiming to
            impart a practical understanding of scientific concepts in engaging
            and relatable ways.
          </li>
          <li className="ps-6 pb-8  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
              Innovative Technological Tools:
            </span>{" "}
            Integrating innovative tools and resources suitable for younger
            learners, the lab introduces foundational technological elements
            without overwhelming complexity. It employs age-appropriate
            technological aids that encourage active participation, inviting
            students to explore and experiment with scientific ideas in an
            accessible manner.
          </li>
        
        
          <li className="ps-6 py-4  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
              Project-Based Learning Platforms:
            </span>{" "}
            Emphasizing project-based learning, the lab nurtures creativity and
            problem-solving skills among students. These projects, aligned with
            school curriculum, empower students to apply theoretical knowledge
            practically, fostering critical thinking and collaboration skills
            essential for their academic journey.
          </li>
          <li className="ps-6 py-4  container mx-auto text-base sm:text-md leading-loose text-neutral-800 font-normal tracking-wide">
            <span className="text-emerald-700 font-bold uppercase me-1 text-lg">
              Adaptable Configurations for School Curriculum:
            </span>{" "}
            Through close collaboration with educators, our team ensures
            seamless alignment of the STEM Lab Setup with school curriculum.
            This flexibility allows for tailored configurations that complement
            classroom teachings, providing supplementary and immersive learning
            experiences.
          </li>
        </ul>
      </div>

      <div className="pt-4 pb-0 text-wrap container mx-auto">
        <p className="mt-2 p-4 container mx-auto text-md sm:text-md leading-loose text-neutral-800 font-normal text-center tracking-widest">
          Catering explicitly to school students, STEMTEC&#39;s STEM Lab Setup
          aspires to ignite a passion for science, technology, engineering, and
          mathematics.
          <span className="font-semibold">
            {" "}
            By offering engaging, age- appropriate, and hands-on learning
            experiences,
          </span>{" "}
          <span className="text-yellow-500 font-semibold ">
            {" "}
            the lab aims to inspire young minds, nurturing their spirit of
            inquiry, exploration,
          </span>{" "}
          and a lifelong interest in STEM subjects.
        </p>
      </div>
      <div className="mx-auto sm:px-3 sm:py-2 lg:px-4 bg-white ">
        <div className="relative isolate overflow-hidden bg-white px-6 sm:rounded-3xl sm:px-4 md:pt-0 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-7xl text-center lg:mx-0 lg:flex-auto lg:text-center">
            {/* Image */}

            <div className="bg-white py-1 sm:py-1 container mx-auto ">
              <div className="mx-auto py-4 grid  px-6 lg:px-4">
                <ul
                  role="list"
                  className=" mx-auto container text-center grid grid-flow-row justify-stretch gap-4 lg:grid-cols-4 sm:grid-cols-2  sm:gap-4 xl:col-span-2"
                >
                  {management.map((person) => (
                    <li
                      key={person.name}
                      className="mx-auto justify-items-center"
                    >
                      <Link href="#">
                        <Image
                          className="mx-auto h-50 w-auto mt-4 shadow-xl rounded-lg border-2 border-neutral-300 p-2"
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
