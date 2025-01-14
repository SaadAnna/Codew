import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Fotter from "./Pages/Fotter";
/* eslint-disable react/no-unescaped-entities */
export default function Contactpage() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y71c7fe",
        "template_orpgouq",
        e.target,
        "ihsMFKjornDQXuhwB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Helmet>
                
                <title>Codew | Contact Us</title>
                
            </Helmet>
      <div      data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
         >
        <h1 className="text-4xl font-Text font-medium lg:text-6xl text-black">
          Let's collaborate
        </h1>
        <p className="text-neutral-600 text-xl lg:text-xl font-Text mt-6">
          Let’s Partner Together to Create Engaging Web<br /> Interfaces {" "}
          Contact Us Now!{" "}
        </p>
        <Link
            to="/Choseservice"
            className="text-white font-Text text-lg  bg-black relative top-10 pl-10 pr-10 pt-3 pb-3 rounded-sm hover:bg-neutral-900"
            onClick={handleClick}
            >
            Get Started
          </Link>    
          
      </div>
      <div className="flex flex-col text-start justify-center items-center mx-auto mt-72  lg:justify-center lg:items-center lg:text-center  lg:mt-80">
        <div      data-aos="fade-up"
        data-aos-duration="900" className="flex flex-col text-center mx-auto justify-center items-center mt-28 ">
          <h1 className="text-4xl font-Text font-medium m-auto lg:text-6xl text-black">
            Get In Touch.
          </h1>
          <p className=" text-center lowercase text-lg text-neutral-600 lg:text-xl font-Text mt-6">
          Feel Free To Contact Us
          To Discuss <br /> Your Project
          </p>
         
          
        </div>
        <form      data-aos="fade-up"
        data-aos-duration="900"
          className=" w-4/5 lg:w-fit lg:h-fit p-10 mx-auto mt-44  flex flex-col justify-start items-start text-center  rounded-lg border border-solid border-neutral-200 pb-16 pt-16 pl-8 bg-transparent  lg:flex lg:mt-24  lg:flex-col lg:justify-start lg:items-start lg:text-center  lg:rounded-lg lg:border lg:border-solid lg:border-neutral-200  lg:pb-16 lg:pt-16 lg:pl-8 lg:bg-transparent"
          onSubmit={sendEmail}
        >
          <div className="block gap-7 w-full  lg:flex lg:gap-20">
            <div className="flex flex-col text-start">
              <label className=" text-lg text-neutral-800 font-Text font-medium mt-7 lg:text-lg lg:text-neutral-800 lg:font-Text lg:font-medium ">
                {" "}
                Frist Name
              </label>
              <input
                placeholder="Frist Name"
                className=" w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 mt-2 focus:outline-none   focus:border-black rounded-lg lg:w-fit lg:h-9 lg:placeholder:text-base lg:font-Text lg:font-normal lg:text-base lg:pl-2 lg:text-neutral-900 lg:border lg:border-solid lg:border-neutral-200 lg:mt-2 lg:focus:outline-none   lg:focus:border-black lg:rounded-lg"
                type="text"
                name="to_name"
                required
              />
            </div>
            <div className="flex flex-col text-start">
              <label className=" text-lg text-neutral-800 font-Text font-medium mt-7 lg:text-lg lg:text-neutral-800 lg:font-Text lg:font-medium ">
                {" "}
                Last Name
              </label>
              <input
                placeholder="Last Name"
                className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg    focus:outline-none focus:border-black lg:w-56 lg:h-9 lg:font-Text lg:font-normal lg:placeholder:text-base lg:text-base lg:pl-2 lg:text-neutral-900 lg:border lg:border-solid lg:border-neutral-200 lg:mt-2 lg:focus:outline-none   lg:focus:border-black lg:rounded-lg"
                type="text"
                name="last_name"
                required
              />
            </div>
          </div>
          <label className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
            Email
          </label>
          <input
            placeholder="Your Email"
            className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none focus:border-black"
            type="email"
            name="user_email"
            required
          />
          <label className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
            About Your Website
          </label>
          <input
            placeholder="Tell Us About Your Website"
            className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base focus:outline-none   focus:border-black"
            type="text"
            name="website_deatils"
            required
          />
          <label className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
            Budget
          </label>
          <input
            placeholder="What Is Your Budget"
            className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none   focus:border-black"
            type="number"
            name="budget"
            required
          />
          <label className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
            {" "}
            Message
          </label>
          <textarea
            placeholder="What Are The Site Specifications"
            className="w-full h-44 font-Text font-normal text-base pl-2 text-neutral-900 pt-2 border  border-solid border-neutral-200 rounded-lg lg:placeholder:text-base mt-2 focus:outline-none   focus:border-black"
            name="message"
            required
          />
          <input
            className="font-normal font-Text text-white mt-5 text-lg w-fit h-fit pl-20 pr-20 cursor-pointer  pt-2 pb-2 rounded-lg bg-black out-of-range:-none hover:bg-neutral-900"
            type="submit"
            value="Send"
            required
          />
        </form>
      </div>
      <Fotter/>

    </div>
  );
 
}
