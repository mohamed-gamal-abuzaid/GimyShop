"use client";

import { use, useState } from "react"
import MobielNav from "./MobielNav"
import Nav from "./Nav"

const ResponsiveNav = () => {
  const [showNav, setshowNav] = useState(false)
  
  const handleNavOpen = () => setshowNav(true);
  
  const handleNavClose = () => setshowNav(false) ;


  return (
    <>
    <Nav openNav={handleNavOpen}/>
    <MobielNav showNav={showNav}  closeNav={handleNavClose}/>
    </>
  )
}
export default ResponsiveNav