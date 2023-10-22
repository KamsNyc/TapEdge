"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

function MobileNavbar() {
  return (
    <nav className="h-[60px] w-full border px-12 hidden">
      {/* CONTAINER */}
      <section className="flex items-center justify-between w-full h-full gap-4">
        {/* LEFT SIDE */}
        <div className="w-[20%]">
          <h1 className="text-3xl font-black">TAPEDGE</h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* SHOPPING ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          {/* LOGGED IN BUTTON */}
          <UserButton />

        <div id="WARPPER" className='flex items-center justify-center'>
             {/* SHEET */}
          <Sheet>
            <SheetTrigger>
              <AiOutlineMenu size={25} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='mb-6'>Menu</SheetTitle>
                <SheetDescription className="py-4">
                <Link className="flex py-2 cursor-pointer hover:bg-gray-50 duration-300 ease-in" href={'/'}>Home</Link>
          <Link className="flex py-2 cursor-pointer hover:bg-gray-50 duration-300 ease-in" href={'/'}>All Products</Link>
          <Link className="flex py-2 cursor-pointer hover:bg-gray-50 duration-300 ease-in" href={'/'}>Why TapEdge?</Link>
          <Link className="flex py-2 cursor-pointer hover:bg-gray-50 duration-300 ease-in" href={'/'}>FAQ</Link>
          <Link className="flex py-2 cursor-pointer hover:bg-gray-50 duration-300 ease-in" href={'/'}>Contact</Link>
          <Link className="flex py-2 cursor-pointer hover:bg-gray-50 duration-300 ease-in" href={'/dashboard'}>Dashboard</Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        </div>
      </section>
    </nav>
  );
}

export default MobileNavbar;
