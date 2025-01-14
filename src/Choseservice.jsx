import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Fotter from "./Pages/Fotter";
export default function Choseservice() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
    return (
        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
            <Helmet>
                
                <title>Codew | Chose Service</title>
                
            </Helmet>
        <div  data-aos="fade-up"
        data-aos-duration="900"className="flex flex-col justify-center items-center text-center mt-40 mx-auto">
        <h1  className="text-4xl font-Text font-bold lg:text-5xl text-black">
Welocome To Codew!
        </h1>
        <p className="text-neutral-600 text-xl font-Text mt-7">
        What do you want to do with Codew?
        </p>
        </div>
        <div data-aos="fade-up"
        data-aos-duration="900" className="gap-10 md:flex md:flex-row flex flex-col lg:gap-10 justify-center text-center mx-auto items-center mt-32">
        <Link
          to="/Projectdetails"
          className="text-white font-Text text-lg bg-black relative p-3 lg:p-3 rounded-sm  hover:bg-neutral-900"
          onClick={handleClick}
          >
         Create Project
        </Link>
        <Link
          to="/Shopifydetails"
          className="text-black font-Text text-lg bg-transparent relative p-2  2xl:text-black 2xl:font-Text 2xl:text-lg 2xl:bg-transparent 2xl:relative 2xl:top-10 2xl:p-3  "
          onClick={handleClick}
          >
        Create Shopify Store 

        </Link>
        </div>
     <Fotter/>
    </div>
    )
}