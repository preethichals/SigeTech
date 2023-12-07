"use client";
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
   { name: "About Us", href: "/about" },
  { name: "Services", href: "/ourservice" },
  { name: "Shop Now", href: "/ourservice" },
  { name: "Contact Us", href: "/contact" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=" bg-neutral-900 container mx-auto max-w-full shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-8 py-1 text-slate-50">
          {/* For Advertisement */}
          <div className="sm:flex sm:justify-between text-sm flex font-light">
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="tracking-widest px-1">
                {" "}
                
              </h5>
            </Link>
          </div>
        </div>
      </div>
      <header className="inset-x-0 top-0 z-50 pe-7 sticky opacity-90 bg-white border-b-4 border-gray-500">
        <nav
          className="flex items-center justify-between px-8 py-2 lg:px-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 mx-6 ">
            <div className="flex">
              <div className="flex-grow sm:w-52 w-52">
                <img
                  src="/SigeTech-Logo.jpg"
                  alt="logo"
                  className=" min:w-56 object-cover object-center sm:w-56 w-44"
                />
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-4 ms-auto bg-white ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:bg-gray-900 scale-100 hover:scale-105 transition scroll-smooth hover:text-gray-50 ease-in-out delay-150  duration-300 rounded-md hover:font-medium bg-white px-4 py-1 inline-block text-lg font-medium tracking-wide text-gray-900 "
              >
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* <a
                href="#"
                className="-m-1.5 p-1.5 font-semibold tracking-wide  rounded-md"
              >
                <span className="sr-only">Logo</span>
                Welcome to Sige Tech
              </a> */}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium tracking-wide leading-7 text-gray-900 hover:bg-gray-50 hover:font-semibold hover:underline"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 bg-yellow-500 px-5">
                  <p className="my-3 tracking-widest uppercase text-emerald-700 font-bold">
                    Services
                  </p>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Course
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    FaceBook
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Twitter
                  </Link>
                 
                </div>
              </div>
              
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
       
    </>
  );
}

export default Header;
