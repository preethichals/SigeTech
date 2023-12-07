import Link from "next/link";
import React from "react";



function Product() {
  return (
    <>
      <div className="mx-auto sm:px-6 sm:py-6 lg:px-8 bg-gray-700 py-4 ">
        

        <div className=" mt-2 ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-6 px-4 py-2 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h4 className="text-4xl border-b pb-4 border-gray-200 text-center font-medium tracking-widest uppercase bg-gray-700  text-white sm:text-2xl pt-3">
          Our Products
        </h4>
              <h2 className="text-xl mt-8 mb-8 p-4 font-medium text-white sm:text-xl">
                <span className=" tracking-wider">We develop products for </span>
                <span className="tracking-wider text-yellow-500">
                  Educationists, Hobbyists, Researchers, and Students
                </span>{" "}
                <span className="tracking-wider">who want to teach, learn and do research with robots</span>  <span>
                  <Link
                    href="#"
                    className="rounded-md ms-3 px-3 py-1 text-black  tracking-wide bg-yellow-500 text-sm font-medium uppercase  hover:text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    View Products
                  </Link>
                </span>
              </h2>
            

              {/* products-01 */}
              <div className="max-w-md mx-auto mt-6  bg-neutral-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src="cloud-1.jpg"
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-emerald-700 font-semibold">
                     Smorphi
                    </div>
                    <a
                      href="#"
                      className="block mt-1 text-md leading-tight font-medium text-neutral-800 hover:underline"
                    >
                      Smorphi-V1 (a Mid-range Version)
                    </a>
                    <p className="mt-2 pt-2 border-t-2 border-neutral-400 text-sm leading-6 text-gray-600 line-clamp-5">
                      Smorphi-V1 is a mid-range version of the Smorphi2 which is
                      also modular, programmable, and Holonomic. smorphi is
                      suitable for users of all age groups who want to learn
                      robotic concepts and develop autonomy concepts on top of
                      it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              {/* products-02 */}
              <div className="max-w-md mx-auto  bg-neutral-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src="cloud-2.jpg"
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-emerald-700 font-semibold">
                      Smorphi-V2
                    </div>
                    <a
                      href="#"
                      className="block mt-1 text-md leading-tight font-medium text-neutral-800 hover:underline"
                    >
                      Tetris-inspired Educational Robot
                    </a>
                    <p className="mt-2 pt-2 border-t-2 border-neutral-400 text-sm leading-6 text-gray-600 line-clamp-5">
                      Smorphi-V2 is a first-of-its-kind Tetris-inspired
                      educational robot that is modular, programmable, and
                      configurable to seven different shapes. smorphi is
                      suitable for users of all ages and is versatile enough to
                      switch seamlessly between a teaching tool, researching
                      aid, and a play companion.
                    </p>
                  </div>
                </div>
              </div>
              {/* products-03 */}
              <div className="max-w-md mx-auto  bg-neutral-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src="cloud-3.jpg"
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-emerald-700 font-semibold">
                      SigeBot-DD
                    </div>
                    <a
                      href="#"
                      className="block mt-1 text-md leading-tight font-medium text-neutral-800 hover:underline"
                    >
                      2-wheel, 2-motor drive robot
                    </a>
                    <p className="mt-2 pt-2 border-t-2 border-neutral-400 text-sm leading-6 text-gray-600 line-clamp-5">
                      SigeBot-DD is a small lightweight two-wheel two-motor
                      differential drive robot ideal for indoor laboratory or
                      classroom use. The robot comes with wheel encoders, 2D
                      lidar, a Camera (depth if required), Imu, ROS embedded PC,
                      one battery, a microcontroller with firmware, and the SDK
                      mobile robotics software development package. SigeBot-DD
                      is assembled, modifiable, reinforceable, and rugged enough
                      to last through years of educational use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
