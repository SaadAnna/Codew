/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Shopifydetails() {
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
            "service_hsd7sgl",
            "template_0ljx3wf",
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
        <>
        <Helmet>
                
                <title>Codew | Shopify Details</title>
                
            </Helmet>
          <div  data-aos="fade-up"
        data-aos-duration="900" 
        className="block justify-center items-center text-start w-fit h-fit mx-auto ml-12 mt-52"
        >
            <h1 className="text-4xl font-Text font-medium m-auto lg:text-6xl text-black">
            Request your custom <br /> shopify store            </h1>
            <p className="text-neutral-600 text-xl lg:text-xl font-Text mt-6">
            Fill out the form below to start your journey<br />
             towards a powerful, customized Shopify store.
            </p>
    
            <hr className="w-20 h-1 mt-7  bg-black" />
          </div>
          <form  data-aos="fade-up"
        data-aos-duration="900"
            className="  w-4/5 lg:w-fit lg:h-fit p-10  mx-auto mt-44  flex flex-col justify-start items-start text-start  rounded-lg border border-solid border-neutral-200 pb-16 pt-16 pl-8 bg-transparent  lg:flex lg:mt-52  lg:flex-col lg:justify-start lg:items-start lg:text-start  lg:rounded-lg lg:border lg:border-solid lg:border-neutral-200 lg:pb-3 lg:pt-3 lg:pl-8 lg:bg-transparent"
            onSubmit={sendEmail}
          >
            <div className="block gap-7 w-full  lg:flex lg:justify-between">
              <div className="flex flex-col text-start">
                <label htmlFor='fullname' className=" text-lg text-neutral-800 font-Text font-medium mt-7 lg:text-lg lg:text-neutral-800 lg:font-Text lg:font-medium ">
                  {" "}
                 Full Name
                </label>
                <input
                  id="fullname"
                  autoComplete="given-name"
                  placeholder="Jhon Doe"
                  className=" w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border placeholder:font-normal border-solid border-neutral-200 mt-2 focus:outline-none   focus:border-black rounded-lg lg:w-96 lg:h-9 lg:placeholder:text-base lg:font-Text lg:font-normal lg:text-base lg:pl-2 lg:text-neutral-900 lg:border lg:border-solid lg:border-neutral-200 lg:mt-2 lg:focus:outline-none   lg:focus:border-black lg:rounded-lg"
                  type="text"
                  required
                  name="first_name"
                />
              </div>
              <div className="flex flex-col text-start">
                <label htmlFor="email" className=" text-lg text-neutral-800 font-Text font-medium mt-7 lg:text-lg lg:text-neutral-800  lg:font-Text lg:font-medium ">
                  {" "}
                  Email
                </label>
                <input
                  id="email"
                  placeholder="exemple:jhon@gmail.com"
                  className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid  placeholder:font-normal border-neutral-200 rounded-lg    focus:outline-none focus:border-black lg:w-96 lg:h-9 lg:font-Text lg:font-normal lg:placeholder:text-base lg:text-base lg:pl-2 lg:text-neutral-900 lg:border lg:border-solid lg:border-neutral-200 lg:mt-2 lg:focus:outline-none   lg:focus:border-black lg:rounded-lg"
                  type="text"
                  required
                  name="user_email"
                />
              </div>
            </div>
            <label htmlFor="BusinessName" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
            Business Name
            </label>
            <input
              id="BusinessName"
              autoComplete="off"
              placeholder="exemple:Codew"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base placeholder:font-normal  focus:outline-none focus:border-black"
              type="email"
              name="user_company"
              required
            />
            <label htmlFor="StoreType" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
            Store Type
            </label>
            <input
              id="Store Type"
              placeholder="eg: electronics, fashion, food"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border placeholder:font-normal border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base focus:outline-none   focus:border-black"
              type="text"
              name="user_project"
              required
            />
            <label htmlFor="ProductsNumber" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
              Estimated Number of Products
            </label>
            <input
             id="projecttype"
              placeholder="eg: 100"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none   focus:border-black"
              type="number"
              name="last_name"
              required
            />
            <label htmlFor="CustomizationNeeds" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
              {" "}
              Customization Needs
            </label>
            <textarea
              id="Customization Needs"
              placeholder="Describe any specific features or customizations you need"
              className="w-full h-32 font-Text font-normal text-base pl-2 text-neutral-900 pt-2 border placeholder:font-normal  border-solid border-neutral-200 rounded-lg lg:placeholder:text-base mt-2 focus:outline-none   focus:border-black"
              name="message"
              required
            />
              <label htmlFor="aditionalinformation" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
              {" "}
              Aditional Information
            </label>
            <textarea
              id="aditionalinformation"
              placeholder="Any Other Details You'd Like Share About Your projects ?"
              className="w-full h-32 font-Text font-normal text-base pl-2 text-neutral-900 pt-2 border placeholder:font-normal  border-solid border-neutral-200 rounded-lg lg:placeholder:text-base mt-2 focus:outline-none   focus:border-black"
              name="user_additional"
              required
            />
            <label htmlFor="budget" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
              {" "}
              Budget
            </label>
            <input
              id="budget"
              placeholder="eg: 100$-5000$"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none   focus:border-black"
              type="number"
              name="user_budget"
              required
            />
            <label htmlFor="projecttimeline" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
              {" "}
              Project Timeline
            </label>
            <input
              id="projecttimeline"
              placeholder="eg: 1 months, 5 months"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none   focus:border-black"
              type="number"
              name="user_timeline"
              required
            />
            <input
              className="font-normal font-Text text-white mt-5   text-xl m-auto w-full h-fit pl-20 pr-20 cursor-pointer  pt-2 pb-2 rounded-lg bg-black out-of-range:-none hover:bg-neutral-900"
              type="submit"
              value="Submit"
            />
          </form>
          <div  data-aos="fade-up"
        data-aos-duration="900"
        className=" block justify-center items-center text-start mx-auto w-fit h-fit ml-12 mt-72"
         > 
    
          <h1 className="text-5xl font-bold text-black font-Text">Why Us?
          </h1>
          <p className="text-neutral-600 lowercase text-xl font-Text mt-5">Why Choose Our Shopify Development Services?</p>
          </div>
          <div className="flex flex-wrap justify-center mt-32  gap-20 mx-auto">
          
          <div  data-aos="fade-up"
        data-aos-duration="900" className="  m-auto mt-20 block text-start w-11/12 md:w-96 md:h-96 p-5 border border-solid border-neutral-200 rounded-lg lg:block lg:text-start lg:w-96 lg:h-72 lg:p-5 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg">
          <div className="flex gap-4">
          <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
</svg>

<h1 className="text-3xl  font-Text font-medium lg:text-3xl text-black">Custom Design</h1>
</div>
<p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
Unique, responsive designs<br /> tailored to your brand and optimized for conversions.
            </p>
          </div>
          
          <div  data-aos="fade-up"
        data-aos-duration="900" className="  m-auto mt-20 block text-start w-11/12 md:w-96 md:h-96 p-5 border border-solid border-neutral-200 rounded-lg lg:block lg:text-start lg:w-96 lg:h-72 lg:p-5 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg">
          <div className="flex gap-4">
          <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
</svg>

<h1 className="text-3xl  font-Text font-medium lg:text-3xl text-black">Clean Code</h1>
</div>
<p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
Custom features and integrations<br /> to enhance your store's  <br />capabilities.
            </p>
          </div>
         </div>
          <div className="flex flex-wrap justify-center mt-10 mx-auto  gap-20">
          
          <div  data-aos="fade-up"
        data-aos-duration="900" className="  m-auto mt-20 block text-start w-11/12 md:w-96 md:h-96 p-5 border border-solid border-neutral-200 rounded-lg lg:block lg:text-start lg:w-96 lg:h-72 lg:p-5 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg">
          <div className="flex gap-4">
          <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clipRule="evenodd"/>
</svg>

<h1 className="text-3xl  font-Text font-medium lg:text-3xl text-black">Speed </h1>
</div>
<p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
Fast-loading, SEO-friendly store<br /> s for better user experience and search rankings            </p>
          </div>
          
          <div  data-aos="fade-up"
        data-aos-duration="900" className="  m-auto mt-20 block text-start w-11/12 md:w-96 md:h-96 p-5 border border-solid border-neutral-200 rounded-lg lg:block lg:text-start lg:w-96 lg:h-72 lg:p-5 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg">
          <div className="flex gap-4">
          <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
</svg>


<h1 className="text-3xl  font-Text font-medium lg:text-3xl text-black">Ongoing Support</h1>
</div>
<p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
Dedicated assistance for updates<br /> maintenance, and future enhancements.
            </p>
          </div>
          </div>
          <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="  block mt-56 text-start ml-12 mx-auto md:flex md:justify-between md:items-center md:text-center lg:mt-72 lg:ml-12"
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
      <hr className="w-11/12 mt-14 bg-neutral-200  mx-auto " />
      <div className=" mt-14 pb-10   text-center  block justify-start items-start lg:pb-10 lg:flex lg:justify-between lg:items-start lg:mt-14 lg:m-auto">
        <h3 className=" text-neutral-600 text-base font-Text block lg:ml-14 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Build By Codew.
        </h3>
        <h3 className=" text-neutral-600    text-base font-Text block lg:mr-10 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Copyright © 2024 Codew App Company.
        </h3>
      </div>
        </>
      );
}