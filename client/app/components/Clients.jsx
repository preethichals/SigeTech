import React from "react";

function Clients() {
  return (
    <div className="bg-gray-700 py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center mb-8 text-4xl sm:4xl font-semibold leading-loose tracking-widest text-white border-b-2 border-neutral-400">
          Our Happy Clients
        </h2>
        <div className=" grid lg:grid-cols-3 grid-rows-3 items-center  sm:grid-cols-2 md:grid-cols-3 md:gap-12 sm:gap-10 lg:gap-6">
              <img
                src="client-01.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              />
              <img
                src="client-02.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              />
              <img
                src="client-03.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              />
              <img
                src="client-04.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              />
              <img
                src="client-05.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              /><img
                src="client-06.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              /><img
                src="client-07.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              /><img
                src="client-08.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              /><img
                src="client-09.png"
                alt="happy client"
                className="rounded-lg bg-gray-100"
              />
            </div>
      </div>
    </div>
  );
}

export default Clients;
