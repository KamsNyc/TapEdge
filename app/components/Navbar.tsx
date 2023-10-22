import {UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import MobileNavbar from './MobileNavbar'

function Navbar() {
  //take userid to see if they are logged in our not
    const {userId} = auth()
  return (
    <>
    {/* DESKTOP BREAKPOINT: LARGE */}
    <nav className='h-[60px] w-full border px-6 lg:px-20 2xl:px-96 hidden lg:block'>
      {/* CONTAINER */}
      <section className='flex items-center justify-center w-full h-full gap-4'>

        {/* LEFT SIDE */}
        <div className="w-[20%]">
          <h1 className='text-3xl font-black hidden'>TAPEDGE</h1>
        </div>

        {/* MIDDLE EMPTY */}
        <ul className="hidden w-[50%] flex gap-4 font-normal text-[15px] ">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>All Products</Link>
          <Link href={'/'}>Why TapEdge?</Link>
          <Link href={'/'}>FAQ</Link>
          <Link href={'/'}>Contact</Link>
        </ul>

        {/* RIGHT SIDE */}
        {
          !userId ? (
            <div className="w-[30%] flex items-center justify-end gap-4">
              {/* SHOPPING ICON */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

            <Link href={'/account'}>Account</Link>
          </div>
          ):(
            <div className="w-[30%] flex items-center justify-end gap-4">
             {/* SHOPPING ICON */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

            <Link href={'/dashboard'} className='text-[15px]'>dashboard</Link>
            <UserButton afterSignOutUrl={'/'}/>
         
          </div>
          )
        }
       
      </section>

    </nav>

    {/* NAV MOBILE */}
    <section className='lg:hidden'>
    <MobileNavbar />
    </section>

    </>
  )
}

export default Navbar