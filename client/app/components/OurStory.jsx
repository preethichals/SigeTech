import React from "react";
import OurTeam from "./OurTeam";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  {
    name: "The founders of SiGeTech are a group of researchers who trained in the field of robotics and have made numerous innovative contributions to the scientific community. The team realised that even though there are numerous educational robotic systems available in the commercial market, there is a huge gap in providing continuous technical support to aid learners in excel as innovators",
    value: "12",
  },
  {
    name: "Formed a team with fine researchers and engineers to start a new venture that focuses on developing robotic kits which enforce as a tool for educators and learners enabling future innovators. ",
    value: "300+",
  },
  {
    name: "Formulated innovative robotic course pedagogy that brings in multidisciplinary culture for the learned who learn all the way from problem identification, mechanical design, electronics, and software to solve a real-world problem.",
    value: "40",
  },
  {
    name: "Collude with top professors, researchers, and entrepreneurs to form a global robotic research channel that can help universities and research across countries. ",
    value: "Unlimited",
  },
];

function OurStory() {
  return (
    <>
      <h4 className="text-4xl text-center font-medium tracking-widest uppercase bg-neutral-700  text-white sm:text-4xl py-3">
        Our Story
      </h4>

      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          {/* global robotic research channel */}
          <div class="flex ">
            <div class="flex-initial w-72 mx-2 hidden lg:block md:block xl:block">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
            </div>
            <div class="flex-auto w-3/4 ">
              <p className=" uppercase mt-2 bg-neutral-200 sm:text-2xl text-xl tracking-widest font-semibold py-4 text-neutral-800 text-center leading-loose ">
                Founded SiGeTech
              </p>
              <div className=" p-4 ">
                <p className="mt-2 mb-4 text-md sm:text-md leading-loose  text-neutral-800 font-normal  tracking-widest">
                  Collude with top professors, researchers, and entrepreneurs to
                  form a global robotic research channel that can help
                  universities and research across countries.
                </p>
              </div>
            </div>
          </div>{" "}
          {/* global robotic research channel */}
          <div class="flex ">
            <div class="flex-initial w-72 mx-2 hidden lg:block md:block xl:block">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
            </div>
            <div class="flex-auto w-3/4 ">
              <p className=" uppercase mt-2 bg-neutral-200 sm:text-2xl text-xl tracking-widest font-semibold py-4 text-neutral-800 text-center leading-loose ">
                Founded SiGeTech
              </p>
              <div className=" p-4 ">
                <p className="mt-2 mb-4 text-md sm:text-md leading-loose  text-neutral-800 font-normal  tracking-widest">
                  Collude with top professors, researchers, and entrepreneurs to
                  form a global robotic research channel that can help
                  universities and research across countries.
                </p>
              </div>
            </div>
          </div>
          {/* global robotic research channel */}
          <div class="flex ">
            <div class="flex-initial w-72 mx-2 hidden lg:block md:block xl:block">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
            </div>
            <div class="flex-auto w-3/4 ">
              <p className=" uppercase mt-2 bg-neutral-200 sm:text-2xl text-xl tracking-widest font-semibold py-4 text-neutral-800 text-center leading-loose ">
                Founded SiGeTech
              </p>
              <div className=" p-4 ">
                <p className="mt-2 mb-4 text-md sm:text-md leading-loose  text-neutral-800 font-normal  tracking-widest">
                  Collude with top professors, researchers, and entrepreneurs to
                  form a global robotic research channel that can help
                  universities and research across countries.
                </p>
              </div>
            </div>
          </div>{" "}
          {/* global robotic research channel */}
          <div class="flex ">
            <div class="flex-initial w-72 mx-2 hidden lg:block md:block xl:block">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
            </div>
            <div class="flex-auto w-3/4 ">
              <p className=" uppercase mt-2 bg-neutral-200 sm:text-2xl text-xl tracking-widest font-semibold py-4 text-neutral-800 text-center leading-loose ">
                Founded SiGeTech
              </p>
              <div className=" p-4 ">
                <p className="mt-2 mb-4 text-md sm:text-md leading-loose  text-neutral-800 font-normal  tracking-widest">
                  Collude with top professors, researchers, and entrepreneurs to
                  form a global robotic research channel that can help
                  universities and research across countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* core value */}
      <div className="bg-gray-700 py-6 sm:py-6">
        <h2 className="text-3xl font-bold pb-5 tracking-tight text-center text-gray-100 sm:text-4xl border-b-2 border-gray-400">
          Our Core Value
        </h2>

        <div className="pb-6">
          <div className="mx-auto max-w-7xl px-2 lg:px-12">
            <div className="mx-auto text-gray-100 mt-10 grid max-w-lg tracking-wider font-medium text-lg grid-cols-3 md:grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              
             <p>Fearless Creation</p>
              <p>Continuous Improvement</p>
              <p>Quality Delivery</p>
              <p>Customer Driven</p>
              <p>Endless Collaboration</p>
              <p>Mentorship</p>
              <p>See It Happen</p>
              <p>Towards Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <OurTeam />
    </>
  );
}

export default OurStory;
