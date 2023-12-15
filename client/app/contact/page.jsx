"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from 'next/navigation'
 


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function page() {

  const router = useRouter()
 

  const form = React.createRef();

 // service id - service_0tf08md
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5d2azua",
        "template_g75rhza",
        form.current,
        "Ud2ptvRJQTZVbIvbd"
      )
      .then(
        (result) => {
          console.log(result.text);
          router.push('/thank-you', { scroll: false })
          
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

  return (
    <>
      <div className="bg-white ">
        <div className="mx-auto bg-white grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="bg-white">
            <h2 className="text-3xl mt-6 mb-6 font-bold tracking-tight text-yellow-500 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-3xl">
              Lorem ipsum dolor sit amet
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>

            <div className="text-sm mt-4 font-semibold leading-6 text-gray-900 bg-gray-100 p-4 rounded-xl border-2 border-gray-400">
              <div className="grid lg:grid-flow-col">
                <div className="flex flex-row justify-center my-2">
                  <img
                    src="/WhatsApp.png"
                    width={50}
                    height={50}
                    className="me-2"
                  />
                  <section>
                    <p className=" tracking-wide">+91 6380546966</p>
                    <p className=" tracking-wide">+91 6380546966</p>
                  </section>
                </div>
                <div className="flex flex-row justify-center items-center my-2">
                  <img
                    src="/gmail.png"
                    width={50}
                    height={50}
                    className="me-2"
                  />
                  <section className="items-center">
                    <p className=" tracking-wide">admin@stemtec.in</p>
                  </section>
                </div>
              </div>
              <div className="grid lg:grid-flow-col">
                <div className="flex flex-row justify-center my-2 items-center">
                  <img
                    src="/website.png"
                    width={50}
                    height={50}
                    className="me-2"
                  />
                  <section>
                    <p className=" tracking-wide">www.stemtec.in</p>
                  </section>
                </div>
                <div className="flex flex-row justify-center items-center my-2">
                  <img src="/map.png" width={50} height={50} className="me-2" />
                  <section className="items-center">
                    <p className=" tracking-wide">#603, 3rd street, Vandalur</p>
                    <p className=" tracking-wide"> Kelambakkam Road, Samathuvapuram,</p>
                    <p className=" tracking-wide"> Mambakkam, Chennai-600127</p>
                  </section>
                </div>
              </div>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
            <form
              className="mx-auto mt-6 max-w-xl sm:mt-8"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    
                    <input
                      type="email"
                      name="user_email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  value="submit"
                  className="block w-full hover:border-2 border-2 hover:border-gray-700 tracking-widest text-base rounded-md bg-emerald-500 px-3.5 py-2.5 text-center shadow-xl  font-semibold text-white hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* -------------- */}
      {/* <div className="bg-gray-400 py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-4">
          
          <div className="mx-auto  max-w-2xl lg:max-w-4xl">
            <div className="isolate bg-white px-6 py-14 sm:py-12 lg:px-8">
            
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-wide text-gray-900 sm:text-4xl">
                  Contact Us
                </h2>
                 <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
              </div>
              <form
                action="#"
                method="POST"
                className="mx-auto mt-16 max-w-xl sm:mt-20"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default page;
