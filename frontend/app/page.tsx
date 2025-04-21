import Image from "next/image";
import logo from "../public/IT_KMS_logo.png";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex items-center text-red-700 font-bold justify-between">
      <Image src={logo} alt="logo" width={50} height={50} className="ml-10"/>
      <span className="ml-2 text-2xl">Home Page</span>
      <FaArrowCircleDown className="text-4xl mr-10"/>
    </div>
  );
}