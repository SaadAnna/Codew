import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
      >
        <h1 className="text-4xl font-Text font-medium  lg:text-6xl text-black">
          Unleash and advance
          <br />
          your business or project
          <br />
          to the furthest limits
          <br />
          possibilities with Codew
          <br />
        </h1>
        <p className="text-neutral-600 text-xl lg:text-xl font-Text mt-6">
          Transform your ideas into a fully interactive and engaging
          <br />
          website with our expert front-end development tailored to
          <br />
          meet your specific needs.
          <br />
        </p>
        <Link
          to="/Choseservice"
          className="text-white font-Text text-lg  bg-black relative top-10 pl-10 pr-10 pt-3 pb-3 rounded-sm hover:bg-neutral-900"
          onClick={handleClick}
        >
          Get Started{" "}
        </Link>
      </div>
    </div>
  );
}
