import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" bg-neutral-900 container mx-auto max-w-full shadow ">
      <div className="w-full  mx-auto p-4 text-slate-50">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="block text-sm  sm:text-center ">
            <Link
              href="mailto:preethi.lyn@gmail.com"
              className="hover:underline"
            >
              {" "}
              Created by Preethi-- © 2023{" "}
            </Link>
            <Link
              href="mailto:peterindia@gmail.com"
              className="hover:underline"
            >
              StemTec™
            </Link>
            . All Rights Reserved.
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium tracking-widest uppercase sm:mb-0 ">
            <li>
              <Link href="/" className="mr-4 hover:underline md:mr-6 ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/ourservice" className="mr-4 hover:underline md:mr-6">
                services
              </Link>
            </li>

            <li>
              <Link
                href="mailto:peterindia@gmail.com"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
            <li className="mx-4">
              <div className="text-sm font-semibold leading-6 text-gray-900">
                <span className="flex flex-row justify-around">
                  <Link href="" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/LinkedIn.png"
                      width={30}
                      height={30}
                      className="me-2"
                    />{" "}
                  </Link>
                  
                  <Link
                    href="https://wa.me/<number>"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/WhatsApp.png"
                      width={30}
                      height={30}
                      className="me-2"
                    />
                  </Link>
                  <Link href="" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/gmail.png"
                      width={30}
                      height={30}
                      className="me-2"
                    />
                  </Link>
                  
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
