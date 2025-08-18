import { navLinks } from "@/constant/constant"
import Link from "next/link"
import { CgClose } from "react-icons/cg"


type props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobielNav = ({showNav,closeNav}:props) => {

const navClass = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      <div className={`fixed ${navClass} inset-0 transform transition-all duration-500 z-[1002] bg-pink-850 opacity-85 w-full h-screen`}>
        <div className="text-white fixed pt-36 gap-2.5  flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-black space-y-6 z-[1050]">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`text-white ${navClass} w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30] hover:text-green-500 cursor-pointer`}
            >  
              <p>{link.label}</p>
            </Link>
          ))}
          <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] cursor-pointer sm:w-8 sm:h-8 w-6 h-6"/>
        </div>
      </div>

    </div>
  )
}
export default MobielNav