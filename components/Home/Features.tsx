import { FaFingerprint } from "react-icons/fa"
import { HiOutlineChat } from "react-icons/hi"
import { IoAppsOutline, IoWifiOutline } from "react-icons/io5"
import { MdNotifications, MdOutlineTouchApp } from "react-icons/md"

const featuresData = [
  {
    title: "Touch To Buy",
    description: "Easily purchase items with a simple touch.",
    icon: <MdOutlineTouchApp className="w-12 h-12 text-pink-500 mx-auto"/>,
    },
  {
    title: "Secure Data",
    description: "Your data is encrypted and securely stored.",
    icon: <FaFingerprint className="w-12 h-12 text-pink-500 mx-auto"/>,
    },
    {
    title: "Instant Chat",
    description: "Fast Reply with AI-powered chat.",
    icon: <HiOutlineChat className="w-12 h-12 text-pink-500 mx-auto"/>,
    },
    {
    title: "Live Notifications",
    description: "Real-time updates and alerts.",
    icon: <MdNotifications className="w-12 h-12 text-pink-500 mx-auto"/>,
    },
    {
    title: "Live Wifi Support",
    description: "24/7 customer support via live chat.",
    icon: <IoWifiOutline className="w-12 h-12 text-pink-500 mx-auto"/>,
    },
    {
    title: "App Watch",
    description: "Monitor app performance and usage.",
    icon: <IoAppsOutline className="w-12 h-12 text-pink-500 mx-auto"/>,
    },
]
    

const Features = () => {
  return (
    <div className="pt-16 pb-16">
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {featuresData.map((feature, index) => (
              <div data-aos="fade-up" data-aos-delay={index*100} data-aos-anchor-placement="top-center" key={index} className="mx-auto text-center ">
                      <div className="mx-auto text-center">{feature.icon}</div>
                      <h1 className="mt-4 text-lg font-semibold text-black dark:text-gray-400">{feature.title}</h1>
                      <p className="text-sm text-black dark:text-gray-400 mt-4">{feature.description}</p>
              </div> 
              ))}
        </div>
    </div>
  )
}
export default Features