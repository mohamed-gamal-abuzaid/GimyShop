import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-pink-900 flex flex-col justify-center bg_clip">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl text-white lg:text-5xl mt-6 mb-6 font-bold leading-[2.5rem] md:leading-[3.5rem]">
            Superior Sound , tangible Quality
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-400">
            Sit back, relax and prepare to experience a new level of audio
            excellence. These headphones combine cutting-edge technology with
            the finest craftsmanship, for the ultimate listening experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-x-4 sm:space-y-0">
            <a href="#_" className="relative overflow-hidden inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Buy Now</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>

            <a
              href="#_"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Explore more
              </span>
            </a>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="150" className="mx-auto hidden xl:block">
            <Image src="/images/hero.png" alt="image" width={380} height={380} />

        </div>
      </div>
    </div>
  );
};
export default Hero;
