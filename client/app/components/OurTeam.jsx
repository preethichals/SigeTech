import Link from "next/link";
import React from "react";

const management = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const advisory = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function OurTeam() {
  return (
    <>
      {/* Management Team */}
      <div className=" mx-auto">
        <h4 className=" text-4xl border-t-2 text-center font-medium tracking-wide bg-gray-800  text-white sm:text-4xl py-4">
          Meet Our Team Members
        </h4>

        <p className=" text-4xl bg-gray-700 p-4 sm:text-4xl font-light tracking-wide text-center leading-8 text-yellow-500">
          Our Management Team
        </p>

        <div className="bg-white py-8 sm:py-12">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
            <ul
              role="list"
              className="grid  justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
            >
              {management.map((person) => (
                <li key={person.id}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-40 w-40 rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                      <Link href="" target="_blank" rel="noopener noreferrer">
                        <img
                          src="/LinkedIn.png"
                          width={30}
                          height={30}
                          className="me-2 mt-2"
                        />{" "}
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="my-4 text-4xl bg-gray-800 p-4 sm:text-4xl font-light tracking-wide text-center leading-8 text-emerald-400">
          Our Advisory Team
        </p>
        <div className="bg-white py-8 sm:py-12">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
            <ul
              role="list"
              className="grid justify-items-center  gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
            >
              {management.map((person) => (
                <li key={person.id}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-40 w-40 rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                      <Link href="" target="_blank" rel="noopener noreferrer">
                        <img
                          src="/LinkedIn.png"
                          width={30}
                          height={30}
                          className="me-2 mt-2"
                        />{" "}
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    
    </>
  );
}

export default OurTeam;
