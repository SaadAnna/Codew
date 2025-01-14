import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Fotter from "./Pages/Fotter";
/* eslint-disable react/no-unescaped-entities */
export default function Aboutpage() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Codew | About Us</title>
      </Helmet>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
      >
        <h1 className="text-4xl font-Text font-medium lg:text-6xl text-black">
          Get to know us more
        </h1>
        <p className="text-neutral-600 text-xl lg:text-xl font-Text mt-6">
          Get To Know Us More, Gain More Trust In Us
          <br /> To Transform Your Idea Into A Real Website
        </p>
      </div>
      <div className=" flex flex-col justify-center mx-auto items-center text-center mt-72">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className=" text-xl lg:text-2xl font-Text font-semibold  text-black"
        >
          About Us
        </h1>
        <h5
          data-aos="fade-up"
          data-aos-duration="900"
          className=" text-3xl lg:text-5xl lowercase font-Text font-semibold mt-7  text-black"
        >
          Your One-Stop Front-End <br />
          Development Solution
        </h5>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start">
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className=" font-Text font-normal m-auto mt-7 text-xl text-neutral-600"
        >
          Our Platform Is Dedicated To Delivering High-Quality Front-End
          Development Services Tailored Specifically To Your Needs. Whether
          You're A Startup, Small Business, Or Large Enterprise, Our Team
          Specializes In Building
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className=" font-Text font-normal m-auto mt-7 text-xl text-neutral-600"
        >
          Modern, Responsive, And Engaging Websites That Offer Seamless User
          Experiences. At The Core Of Our Services Is A Focus On Clean,
          Efficient Code Using HTML, CSS, JavaScript, And React.js—Ensuring{" "}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className=" font-Text font-normal m-auto mt-7 text-xl text-neutral-600"
        >
          That Your Website Performs Optimally Across All Devices And Browsers.
          We Work Closely With Our Clients To Understand Their Vision And Bring
          It To Life Through Customized Designs And Interactive Elements,
          Turning
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className=" font-Text font-normal m-auto mt-7 text-xl text-neutral-600"
        >
          Your Ideas Into Fully Functional, Visually Appealing Web Interfaces.
          From Static Landing Pages To Complex Single-Page Applications, We
          Pride Ourselves On Our Ability To Create Dynamic, User-Friendly
          Websites That Captivate Audiences And Enhance Brand Presence.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className=" font-Text font-normal m-auto mt-7 text-xl text-neutral-600"
        >
          Our Platform Offers End-To-End Front-End Development Services,
          Including UI/UX Design, Mobile-First Development, Cross-Browser
          Compatibility, And Ongoing Support To Ensure Your Website Stays
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className=" font-Text font-normal mt-7 m-auto text-xl text-neutral-600"
        >
          Updated And Secure. By Choosing Our Services, You Gain Access To
          Cutting-Edge Technologies And Industry Best Practices That Help Your
          Business Stand Out In Today’s Competitive Digital Landscape. Let Us
          Handle The Technical Complexities So You Can Focus On Growing Your
          Business.{" "}
        </p>
      </div>
      <div className=" flex flex-col justify-center mx-auto items-center text-center mt-72">
      <h5
          data-aos="fade-up"
          data-aos-duration="900"
          className=" text-3xl lg:text-5xl lowercase font-Text font-semibold text-black"
        >
          Transform Your Ideas with codew
        </h5>
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className=" text-xl lg:text-xl font-Text font-normal mt-12 text-neutral-600"
        >
          Partner with us to create stunning <br/> digital experiences.
        </h1>
       
      </div>
      <div className=" flex gap-10 justify-center items-center m-auto mt-20 text-center">
      <Link data-aos="fade-up"
          data-aos-duration="900"
          to="/Choseservice"
          className="text-white font-Text text-lg bg-black relative pl-7 pr-7 lg:pl-10 lg:pr-10 pt-3 pb-3  rounded-sm hover:bg-neutral-900"
          onClick={handleClick}
        >
          Get Started{" "}
        </Link> 
        <Link data-aos="fade-up"
          data-aos-duration="900"
          to="/Servicespage"
          className="text-black font-Text text-lg bg-transparent   "
          onClick={handleClick}
        >
          Learn more{" "}
        </Link>
       
      </div>
      <Fotter/>
     
    </div>
  );
}
