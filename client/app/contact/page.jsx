"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function page() {
  const router = useRouter();

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
          router.push("/thank-you", { scroll: false });
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

              {/* social media */}
            <div className="text-sm mt-2 font-semibold leading-6 text-gray-900 bg-gray-300 p-2 rounded-xl border-2 border-gray-400">
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
            
              <span aria-hidden="true"></span>
            </div>
             <div className="text-sm mt-2 font-semibold leading-6 text-gray-900 bg-gray-300 p-2 rounded-xl border-2 border-gray-400">
              <div className="grid lg:grid-flow-col">
                <div className="flex flex-row justify-center items-center my-2">
                  <img
                    src="/website.png"
                    width={50}
                    height={50}
                    className="me-2"
                  />
                  <section>
                    <p className=" tracking-wide">wwww.stemtec.in</p>
                   
                  </section>
                </div>
                <div className="flex flex-row justify-center items-center my-2">
                  <img
                    src="/LinkedIn.png"
                    width={40}
                    height={40}
                    className="me-2"
                  />
                  <section className="items-center">
                    <p className=" tracking-wide">admin@stemtec.in</p>
                  </section>
                </div>
                
              </div>
            
              <span aria-hidden="true"></span>
            </div>
             
          </div>
        
         {/* contact us form */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 my-auto">
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
      <div className="bg-white py-4 sm:py-8 border-t-4 border-gray-500">
        <div className="mx-auto max-w-7xl px-4 lg:px-4">
       <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-3xl">
              Lorem ipsum dolor sit amet
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          
          <div className="mx-auto  max-w-2xl lg:max-w-4xl">
            <div className="isolate bg-gray-700 px-6 py-14 sm:py-12 lg:px-8">
            
              <div className="mx-auto max-w-2xl text-center">
                  {/* location */}
 <div className="mx-4 justify-center border-2 border-gray-400 bg-gray-700 p-2 rounded-xl">
               
                <div className="flex flex-row  items-center my-2 mx-4">
                  <img src="/map.png" width={50} height={50} className="me-6" />
                  <section className="items-center text-white">
                    <p className=" tracking-wide">
                      #603, 3rd street, 
                      
                    </p>
                    <p className=" tracking-wide">Vandalur - Kelambakkam Road,</p>
                    <p className=" tracking-wide">Samathuvapuram, Mambakkam, Chennai-600127.</p>
                  </section>
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

export default page;
