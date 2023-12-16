import Link from "next/link";
import React from "react";

function Product() {
  return (
    <>
      <div className="mx-auto sm:px-6 sm:py-6 lg:px-8 bg-gray-700 py-4 ">
        <div className="">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-6 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
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
                    <Link
                      href="#"
                      className="block mt-1 text-md leading-tight font-medium text-neutral-800 hover:underline"
                    >
                      Tetris-inspired Educational Robot
                    </Link>
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
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
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
                    <Link
                      href="#"
                      className="block mt-1 text-md leading-tight font-medium text-neutral-800 hover:underline"
                    >
                      Tetris-inspired Educational Robot
                    </Link>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
