import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <div className="max-w-[94%] mx-auto">
        <Helmet>
                
                <title>Codew | Contact Us</title>
                
            </Helmet>
      <div      data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
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
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="  block mt-56 text-start ml-8 md:flex md:justify-between md:items-center md:text-center lg:mt-72 lg:ml-14"
      >
        <div className=" mt-9  flex flex-col text-center justify-start items-start">
          <h1 className="text-2xl font-Text font-medium  text-black">Codew</h1>
          <p className="text-neutral-600 text-start text-base font-Text mt-4">
            make your business more famous by <br /> designing a wonderful and
            attractive <br />
            website with codew.
          </p>
          <div className="flex gap-2 mt-3">
            <a target="_blank" href="https://x.com/CodewFront_end">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/codew_dev/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </a>
            <a target="_blank" href="https://www.youtube.com/@codew_dev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
              </svg>
            </a>
          </div>
        </div>
        <div className=" mt-16 flex flex-col text-start justify-start items-start">
          <h1 className="text-xl font-Text font-medium  text-black">
            Quick Links
          </h1>
          <ul>
            <li>
              <Link
                to="/Homepage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                Home
              </Link>
              <Link
                to="/Servicespage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                Services
              </Link>
              <Link
                to="/Aboutpage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                About Us
              </Link>
              <Link
                to="/Contactpage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className=" mt-16  mr-14 flex flex-col text-start  justify-start items-start">
          <h1 className="text-xl font-Text font-medium  text-black">Contact</h1>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://x.com/CodewFront_end"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Twitter
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/codew_dev/"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Instagram
              </a>
              <a
                target="_blank"
                href="https://github.com/Codew-dev"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Git Hub
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@codew_dev"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-11/12 mt-14 bg-neutral-200  m-auto " />
      <div className=" mt-14 pb-10   text-center  block justify-start items-start lg:pb-10 lg:flex lg:justify-between lg:items-start lg:mt-14 lg:m-auto">
        <h3 className=" text-neutral-600 text-base font-Text block lg:ml-14 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Build By Codew.
        </h3>
        <h3 className=" text-neutral-600    text-base font-Text block lg:mr-10 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Copyright © 2024 Codew App Company.
        </h3>
      </div>
    </div>
  );
 
}
