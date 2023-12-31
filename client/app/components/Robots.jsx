import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Technology and Tools",
  description:
    "Digital technology and tools play a crucial role in the IT (Information Technology) industry",
  keywords:
    "Cloud Technology, Internet of Things, Blockchain, Digital Technology, Books,Computing, Artificial intelligence, models, streaming analytics, digital twins, cloud-native computing, edge and serverless computing, reliability engineering, microservices architecture, quantum computing, event-driven architecture,5G/6G",
};
const callouts = [
  {
    name: "Learn",
    description:
      "Are you passionate about Robotic Technologies but never got the opportunity to learn it through a correct channel?",
    imageSrc: "/learn.webp",
    imageAlt: "learn",
    href: "#",
  },
  {
    name: "Product",
    description:
      "Are you exited about Robots but didn't find the right product to start your exploratory journey?",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt: "product",
    href: "#",
  },
  {
    name: "Service",
    description:
      "Are you disappointed with the services that you have got so far in terms of robot development and R&D consultation?",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "service",
    href: "#",
  },
];

function Robots() {
  return (
    <>
      <div className=" bg-technology">
        <div className="mx-auto max-w-2xl py-14 sm:py-10 lg:py-15">
          <div className="text-center mt-10 mb-12 p-5">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 bg-white text-gray-600 ">
              Courses We Offer, Project Consultation and Development,
              <Link
                href="/ourservice"
                className="font-semibold text-yellow-600"
              >
                <span className="absolute inset-0 ps-2" aria-hidden="true" />{" "}
                View Our Services <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className=" bg-white mt-4 bg-opacity-80 rounded-lg py-3 px-5">
              <h1 className="mb-4 text-4xl font-medium text-gray-900  md:text-5xl lg:text-5xl sm:text-5xl">
                <span className=" leading-relaxed text-gray-700 ">
                  Learn, Build and Deploy <br />
                </span>{" "}
                <span className=" text-emerald-800 font-medium tracking-tight">
                  Robotic Technology
                </span>
              </h1>
              <p className="my-6 sm:text-xl uppercase text-xl tracking-widest font-semibold pt-4 text-neutral-700 text-center leading-loose border-t border-gray-500">
                To Automate Your Real-World Environment
              </p>
            </div>
          </div>
        </div>

        {/* Three Category */}
        <div className=" bg-white pb-6">
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-2 sm:py-4 lg:max-w-none lg:py-2">
              <div className="mx-auto my-1 p-6  rounded-lg">
                <h4 className="text-3xl text-center font-light tracking-widest capitalize bg-emerald-600 text-gray-100 sm:text-2xl py-3">
                  Is your robotic thirst ever been served properly?
                </h4>
                <p className="mt-6 uppercase sm:text-xl text-xl tracking-widest font-semibold pt-4 text-neutral-800 text-center leading-loose border-t border-gray-400">
                  We are here to serve you with robots
                </p>
              </div>

              <div className="mt-2  space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div
                    key={callout.name}
                    className="group relative bg-neutral-200 rounded-xl p-4 border-2 border-gray-300"
                  >
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full object-cover object-center p-1"
                      />
                    </div>

                    <h3 className="mt-6 rounded-lg hover:text-slate-100 hover:bg-emerald-700 border-b-2 border-yellow-500 text-center font-semibold tracking-widest text-xl uppercase mb-2 p-1 text-teal-800 bg-white">
                      <Link href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </Link>
                    </h3>
                    <p className="text-base font-medium  text-emerald-900 text-center tracking-wide pt-1 px-3 leading-relaxed">
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Robots;
