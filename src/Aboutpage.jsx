
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
/* eslint-disable react/no-unescaped-entities */
export default function Aboutpage() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
        <Helmet>
                
                <title>Codew - About Us</title>
                
            </Helmet>
      <div  data-aos="fade-up"
        data-aos-duration="900" 
        className="ml-5 block text-start justify-start items-start mt-28 lg:ml-8"
        >
        <h1 className="text-4xl font-Text font-medium lg:text-6xl text-black">
          Get to know us more
        </h1>
        <p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
          Get To Know Us More, Gain More Trust In Us<br />  To Transform Your
          Idea Into A Real Website
        </p>
        <hr className="w-20 h-1 mt-7 bg-black  " />
      </div>
      <div
        className="ml-5 block text-start justify-start items-start mt-52 lg:ml-8"
        >
        <h1  data-aos="fade-up"
        data-aos-duration="900" className="text-xl font-Text font-semibold  text-black">
          About Us
        </h1>
        <h5  data-aos="fade-up"
        data-aos-duration="900" className="text-4xl lowercase font-Text font-semibold mt-7  text-black">
        Your One-Stop Front-End <br />Development  Solution
        </h5>

        <p  data-aos="fade-up"
        data-aos-duration="900" className="text-neutral-600 lowercase text-lg font-Text mt-7">
          Our Platform Is Dedicated To Delivering High-Quality Front-End
          Development Services Tailored Specifically <br />
          To Your Needs. Whether You're A Startup, Small Business, Or Large
          Enterprise, Our Team Specializes In Building
          <br />
          Modern, Responsive, And Engaging Websites That Offer Seamless User
          Experiences. At The Core Of Our  <br />Services Is A Focus On Clean,
          Efficient Code Using HTML, CSS, JavaScript, And React.js—Ensuring{" "}<br />
         
          That Your Website Performs Optimally Across All Devices And Browsers.
          We Work Closely With<br /> Our Clients 
          To Understand Their Vision And Bring It To Life Through Customized
          Designs And Interactive<br /> Elements, Turning
          
          Your Ideas Into Fully Functional, Visually Appealing Web Interfaces.
          From Static Landing <br />Pages To Complex   Single-Page Applications, We
          Pride Ourselves On Our Ability 
          To Create<br /> Dynamic, User-Friendly Websites That Captivate Audiences And
          Enhance Brand Presence. <br />
          
          Our Platform Offers End-To-End Front-End Development Services,
          Including UI/UX Design,<br /> Mobile-First
          Development, Cross-Browser Compatibility, And Ongoing Support To
          Ensure Your<br /> Website Stays 
          Updated And Secure. By Choosing Our Services, You Gain Access To
          Cutting-Edge <br />Technologies And Industry Best Practices That 
          Help Your Business Stand Out In Today’s Competitive <br /> Digital Landscape.
          Let Us Handle The Technical Complexities So You Can Focus On Growing
          Your Business.{" "}
        </p>
      </div>
      <div  data-aos="fade-up"
        data-aos-duration="900"
        className='w-11/12 m-auto h-full  p-8 pb-20 rounded-3xl block justify-center items-center text-start mt-52 bg-black  lg:w-11/12 lg:m-auto lg:h-fit  lg:pl-8 lg:pb-20 lg:rounded-3xl lg:block lg:justify-center lg:items-center lg:text-start lg:mt-80 lg:bg-black'>
      <h1 className="font-Text m-auto text-white  font-medium text-6xl">
      Create your official website<br /> now!     </h1>
          <p className="text-neutral-200 lowercase m-auto font-normal text-xl font-Text mt-7">
          Create An Attractive And Smooth Front-End <br />
           For Your Official Website With
            Codew          </p>
            <Link
            to="/Choseservice"
            className="text-black m-auto font-Text text-lg bg-white relative top-10 p-3 rounded-sm font-semibold hover:bg-neutral-100"
            onClick={handleClick}
            >
            Get Started

          </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="  block mt-56 text-start ml-4 lg:flex lg:justify-between lg:items-center lg:text-center lg:mt-72 lg:ml-8"
      >
        <div className=" mt-16  lg:block lg:text-start  lg:justify-start lg:items-start">
          <h1 className="text-2xl font-Text font-medium  text-black">Codew</h1>
          <p className="text-neutral-600 lowercase text-base font-Text mt-4">
            Make Your Business More Famous By Designing A<br />
            Wonderful And Attractive Website With <br />
            The Help Of The Best <br />
            Company Codew.
          </p>
          <div className="flex gap-2 mt-3">
            <a href="#">
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
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </a>
            <a href="#">
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
        <div className=" mt-16 lg:block lg:text-start lg:justify-start lg:items-start">
          <h1 className="text-2xlxl font-Text font-medium  text-black">
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
                to="/Workpage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
          onClick={handleClick}
              >
                Work
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
        <div className=" mt-14  mr-14 lg:block lg:text-start lg:mr-14 lg:justify-start lg:items-start">
          <h1 className="text-2xlxl font-Text font-medium  text-black">
            Contact
          </h1>
          <ul>
            <li>
              <a
                href="#"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Twitter
              </a>
              <a
                href="#"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Instagram
              </a>
              <a
                href="#"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Git Hub
              </a>
              <a
                href="#"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-11/12 mt-14 bg-gray-200  m-auto " />
      <div className=" mt-14 pb-10  text-center block justify-start items-start lg:pb-10 lg:flex lg:justify-between lg:items-start lg:mt-14 lg:m-auto">
        <h3 className=" text-neutral-600     text-base font-Text block lg:ml-10 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Build By Codew.
        </h3>
        <h3 className=" text-neutral-600    text-base font-Text block lg:mr-10 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Copyright © 2024 Codew App Company.
        </h3>
      </div>
    </>
  );
}
