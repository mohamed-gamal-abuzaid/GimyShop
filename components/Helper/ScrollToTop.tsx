"use client";
import { FaArrowUp} from "react-icons/fa"

import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.scrollY > 300) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll",toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
      
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div className="fixed bottom-4 right-4 animate-pulse ">
        {isVisible && (
            <button onClick={scrollToTop} 
            className="bg-pink-800 text-white p-3 cursor-pointer rounded-full shadow-lg hover:bg-pink-900 transition-colors w-12 h-12 flex items-center justify-center foucs:outline-none">
                <FaArrowUp/>

            </button>
    )}
    </div>
  )
}
export default ScrollToTop