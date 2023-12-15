import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
     <main className=" flex flex-col h-screen place-items-center bg-yellow-400 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center my-auto">

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-loose"><span className='text-emerald-600'>Thank You</span> for Connecting With Us!!</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Your email has been received, We aim to respond at the earliest opportunity and value your patience.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link href="/ourservice" className="text-sm font-semibold text-gray-900">
              Our Service <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default page