import ReviewSlider from "./ReviewSlider"

const Review = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-pink-900 font-bold"> 10K+ Customer Trust Us</h1>
        <span className="w-32 h-1 bg-pink-950 mx-auto mt-3 block "></span>
        <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16">
          <ReviewSlider />  
        </div>
        
    </div>
  )
}
export default Review