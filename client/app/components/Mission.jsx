import React from 'react'
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "We envision a student community that can inspire from our practical education through robotics technology to innovate products that can solve real-world problems.",
  "We want to convert the process of problem-solving into a fun-filled experience. ",
  
];
function Mission() {
  return (
    <>
    <div className='bg-gray-700 pt-20'>
        {/* Mission */}
        <div className='container mx-auto my-auto bg-gray-700'>
        <div className="mx-auto max-w-2xl bg-white  rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto container">
            <h3 className="text-3xl sm:text-3xl font-semibold tracking-wide text-yellow-500">
              Our Mission
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We establish robotics as a tool to enable multidisciplinary culture among the students at all levels leads to generate not just engineers but the innovators
            </p>
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
        {/* Vision */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto bg-gray-700">
            <h3 className="text-3xl font-semibold  text-center tracking-wide text-white">
              We're <span> Engineers </span><span>| Researchers |</span><span> Innovators</span>
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-100 text-center">
              SiGeTech is a technical expert in providing innovative technology solutions to empower the industry, academic institutions and research labs. With the elite team of Researchers, Engineers, and Entrepreneurs across the world, we provide the best technical solution for your organisation. Our expertise is in cutting-edge technologies spanning across robotics, AI, IoT, and Informative security. SiGeTech supports setting up advanced research labs, connecting R&D partnerships with universities and industries, hardware & software solutions for robotics challenges and technical consultation.
            </p>
            
            
          </div>
          
        </div>
        </div>
    </>
  )
}

export default Mission