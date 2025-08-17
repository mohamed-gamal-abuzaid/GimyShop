import { FaPaperPlane } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-2xl sm:text-3xl text-center text-gray-600 dark:text-gray-500"> Get In Touch</h1>
        <span className="block w-16 h-1 bg-pink-800 mx-auto" ></span>
        <p className="text-center text-sm sm:text-base text-gray-800 dark:text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa in eligendi veniam! </p>
        <p className="text-center text-sm sm:text-base text-gray-800 dark:text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-16">
            <div className="h-full">
                <input type="text" placeholder="Name" className="w-full bg-gray-200 text-black shadow-md outline-none px-6 py-3.5 rounded-md mb-4" />
                <input type="email" placeholder="Email" className="w-full bg-gray-200 text-black shadow-md outline-none px-6 py-3.5 rounded-md mb-4" />
                <input type="text" placeholder="Subject" className="w-full bg-gray-200 text-black shadow-md outline-none px-6 py-3.5 rounded-md" />
            </div>
            <div className="h-full">
                <textarea placeholder="Message" className="w-full h-full bg-gray-200 text-black shadow-md outline-none px-6 py-3.5 rounded-md mb-4" ></textarea>

            </div>
        </div>
        <button className="mt-8 bg-pink-800 hover:bg-pink-900 text-white px-6 py-4 rounded-md flex items-center gap-2 mx-auto shadow-md cursor-pointer">
            <FaPaperPlane size={18}/> Send Message
        </button>
    </div>
  )
}
export default Contact