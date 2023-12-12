import Link from "next/link";
import React from "react";

const features = [
  {
    name: "Courses",
    description:
      "Discover how a real-world robotic system works, build electromechanical systems, enable autonomous operation ability, and break the barrier between online courses and reality.",
    ulr: "",
  },
  {
    name: "Research Collaboration",
    description:
      "Be A Key Player in major societal challenges and strengthen national competitiveness in terms of future technology by handshaking with the domain experts",
    ulr: "",
  },
  {
    name: "Project Consultation & Development",
    description:
      "Automate your business processes with autonomous robots to boost productivity, quality, and speed while reducing cost and risk.",
    ulr: "",
  },
  {
    name: "Robotics Competition",
    description:
      "At SiGeTech we Conduct challenging Robotic competitions for students in all age groups. We have various competitions and leagues that target different age groups, each with its characteristics.",
    ulr: "",
  },
];

function Services() {
  return (
    <>
      <div className="mx-auto sm:px-6 sm:py-2 lg:px-8 bg-gray-700 ">
        <div className="bg-white px-4">
          <div className="mx-auto my-8 grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-6 px-4 py-14 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h4 className="text-3xl font-semibold tracking-widest text-emerald-800 sm:text-3xl uppercase  pt-3">
                Our Services
              </h4>
              {/* <h2 className="text-xl mt-5 font-medium tracking-wide leading-loose text-neutral-800 sm:text-xl">
                <span className="leading-relaxed">We develop products for </span>
                <span className="tracking-wider text-emerald-700 leading-relaxed">
                  Educationists, Hobbyists, Researchers, and Students
                </span>{" "}
                <span className="leading-relaxed">who want to teach, learn and do research with robots{" "}</span>
              </h2> */}

              <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                {features &&
                  features.map((feature) => (
                    <div key={feature.name} className="my-auto block">
                      <dt className="font-medium mb-3 pb-1 text-lg sm:lg tracking-wide text-yellow-500 border-b-2 border-emerald-700">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-sm text-gray-700 line-clamp-4 leading-relaxed">
                        {feature.description}
                      </dd>
                      <dd className="mt-4">
                        <span>
                          <Link
                            href={feature.ulr}
                            className=" hover:text-yellow-400 px-3 py-2 bg-neutral-600 rounded-md tracking-wide text-sm font-semibold uppercase text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          >
                            Read More...
                          </Link>
                        </span>
                      </dd>
                    </div>
                  ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="cloud-1.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="cloud-2.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="cloud-3.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="cloud-1.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
