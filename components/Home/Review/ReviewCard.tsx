import Image from "next/image";
import { BsQuote } from "react-icons/bs";

type Props = {
    image :string;
    name:string;
    role:string;

}

const ReviewCard = ({image, name ,role}:Props) => {
  return (
    <div>
        <BsQuote className="w-14 h-14 text-pink-800"/>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero soluta placeat nostrum quasi consequuntur, perspiciatis natus sunt quidem! Ut sit qui cumque magnam at iste iure libero rerum sequi labore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tenetur omnis, sequi, quisquam doloribus porro quae praesentium ratione quia facere, commodi atque esse maxime adipisci laborum sunt laudantium rerum voluptas.</p>
        <div className="mt-6">
            <Image src={image} alt="image" width={100} height={100} className="object-center mx-auto rounded-full "/>
            <h1 className="text-lg font-bold text-center mt-4">{name}</h1>
            <h1 className=" text-center text-gray-500 ">{role}</h1>
        </div>
    </div>
  )
}
export default ReviewCard