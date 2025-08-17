'use client';

import ThemeToggle from "@/components/Helper/ThemeToggle";
import { navLinks } from "@/constant/constant"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaShoppingBag } from "react-icons/fa"
import { HiBars3BottomRight } from "react-icons/hi2"

type props = {
  openNav: () => void;
}


const Navbar = ({openNav}:props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
    if (window.scrollY >= 90) setNavBg(true);
    else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  },[])

    
  
  return (
    <div
    className={`transition-all ${
      navBg ?"bg-pink-900 shadow-md" : "fixed"
    } duration-200 h-[12vh] z-[100] fixed w-full`}>
      <div className=" flex items-center h-full justify-between  sm:w-[80%] w-[90%] mx-auto">
        <div className="text-white font-bold text-2xl sm:text-3xl hover:text-indigo-300 transition-all duration-200 cursor-pointer">

          Gimy &apos;-&apos; Shop

        </div>
        <div className="hidden sm:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white hover:text-green-300 transition-all duration-200 font-semibold"
            >  
              <p>{link.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-black rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="relative z-20 flex items-center text-sm">
            <FaShoppingBag className="mr-1.5"/>
              Buy Now
          </span>
        </a>
        <ThemeToggle/>
        <HiBars3BottomRight onClick={openNav} className="text-white lg:hidden text-2xl cursor-pointer w-8 h-8" />
        </div>

      </div>


    </div>
  )
}
export default Navbar