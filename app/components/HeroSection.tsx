'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"

// mt-10 md:mt-10 lg:mt-18 w-full h-full relative isolate overflow-hidden  rounded-3xl md:rounded-none md:pt-24 lg:flex lg:gap-x-10 lg:pt-0 mx-auto text-7xl


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroSection() {


  return (
        <div className="block lg:flex justify-between h-full w-full isolate pt-12 lg:pt-18 gap-x-6 mx-auto px-8 md:px-16">
          
          {/* LEFT CONTAINER */}
          <div className="mx-auto max-w-full text-center lg:flex-auto lg:py-32 lg:text-left lg:pl-18 md:px-2">
          {/* BADGES */}
          {/* <div className=" md:flex gap-3 md:ml-[-4rem] ">
          <span className='text-base font-light'>Boost:</span>
          <Badge variant="outline" className='mb-7 pt-1 font-semibold' >Customer Reviews</Badge>
          <Badge variant="outline" className='mb-7 pt-1 font-semibold' >Online Reputation</Badge>
          <Badge variant="outline" className='mb-7 pt-1 font-semibold' >Customer Engagement</Badge>
          </div> */}

          
            <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Bringing Businesses and Individuals Together,
              <br />
              One Tap at a Time.
            </h2>
            <p className="mt-6 text-base leading-6 text-gray-700">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 text-black">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT CONTAINER */}
          <div className="flex w-full rounded-xl">
            <Image
              // className="absolute rounded-md left-0 top-0 w-[57rem] max-w-none bg-white/5 ring-1 ring-white/10"
              className='rounded-xl object-cover lg:object-contain'
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
            </div>
        </div>

  )
}
