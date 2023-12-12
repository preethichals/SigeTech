import React from 'react'
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Our vision is to be a catalyst for educational transformation, inspiring learners worldwide to explore, innovate, and excel in STEM disciplines.",
  "We strive to empower individuals to become future leaders and problem solvers, contributing to technological advancements and societal progress.",
  
];
function Mission() {
  return (
    <>
      {/* Vision */}
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto bg-gray-700">
            <h3 className="text-3xl border-b-2 pb-4 font-semibold  text-center tracking-wide text-white">
             Empowering Innovation in <span className='text-emerald-500'>'Education' <span className='text-white text-2xl'> & </span>'Product Development'</span>
            </h3>
            <p className=" max-w-6xl mt-6 text-base leading-7 text-gray-100 text-center mx-auto">
At STEMTEC, we&#39;re passionate about revolutionizing education and creating innovative products that
inspire curiosity and excellence in the fields of Science, Technology, Engineering, and Mathematics
(STEM). We&#39;re committed to equipping educators, institutions, and students with cutting-edge tools and
resources that nurture creativity, critical thinking, and hands-on learning experiences.            </p>
            
            
          </div>
          
        </div>
    <div className='bg-gray-700 py-10'>
      
        {/* Mission */}
        <div className='container mx-auto my-auto bg-gray-700'>
        <div className="mx-auto max-w-2xl bg-white  rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto container">
            <h3 className="text-3xl sm:text-3xl font-semibold tracking-wide text-yellow-500">
              Our Mission
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
Our mission is twofold: to deliver unparalleled educational solutions and to design innovative products
that elevate the learning experience. We&#39;re committed to ensuring that our products not only meet but
exceed the standards of excellence, enabling educators and students to explore, experiment, and
innovate with confidence.          </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none font-semibold text-3xl tracking-wide leading-6 text-teal-600">
              Our Vision
              </h4>
              <div className="h-px flex-auto bg-gray-500" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-yellow-500"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-sm items-center">
                <img
                src="mission.jpg"
                alt="Mission"
                className="rounded-lg bg-gray-100 "
              />
              </div>
            </div>
          </div>
        </div>
        </div>
      
        </div>
    </>
  )
}

export default Mission