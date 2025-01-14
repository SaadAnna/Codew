/* eslint-disable react/no-unescaped-entities */
import FisrtProjectImage from './www.reallygreatsite.com (5).png';
import { Link } from 'react-router-dom';
import AOS from "aos";
import { Helmet } from 'react-helmet';
import { useEffect } from "react";
import "aos/dist/aos.css";
import Fotter from './Pages/Fotter';
export default function Firstproject() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Helmet>
                
                <title>Codew | Project overview</title>
                
            </Helmet>
      <div className=' flex flex-col  justify-center items-center mx-auto mt-40 text-center'>

      <h1  data-aos="fade-up"
        data-aos-duration="900" className='text-4xl font-Text font-medium leading-8 lg:text-5xl text-black'>Monaro:A site that provides <br />  information about travel  <br /> and trips.</h1>
       </div>
      <img  data-aos="fade-up"
      loading="lazy"
        data-aos-duration="900" className="w-3/4 object-cover rounded-sm mt-32 mx-auto" src={FisrtProjectImage} />
      <div  data-aos="fade-up"
        data-aos-duration="900"   className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-32'>

<h1  data-aos="fade-up"
        data-aos-duration="900" className='text-lg font-Text font-normal lg:text-xl text-neutral-600'>
        Discover the wonders of the world with our comprehensive travel and trip planning website. Whether you're a seasoned globetrotter or a first-time explorer, we provide everything you need to make your journey seamless and unforgettable. From destination guides and insider travel tips to the latest on trending spots and hidden gems, we’re your go-to source for all things travel.
        </h1>
 </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>

<h1  data-aos="fade-up"
        data-aos-duration="900" className='text-lg font-Text font-normal lg:text-xl text-neutral-600'>
Dive deep into expert-curated itineraries, local cultural insights, and personalized trip recommendations tailored to your interests. Our platform connects you with essential resources like flight deals, accommodation options, transportation guides, and activity bookings, all in one place.        </h1>
 </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>

<h1  data-aos="fade-up"
        data-aos-duration="900" className='text-lg font-Text font-normal lg:text-xl text-neutral-600'>
For adventurers seeking unique experiences, our community-driven reviews, blogs, and photos offer real-life perspectives that help you plan the perfect trip. Whether you're dreaming of a peaceful escape, a vibrant city break, or an off-the-beaten-path adventure, we’re here to inspire and guide your every step.
    </h1>
 </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>

<h1  data-aos="fade-up"
        data-aos-duration="900" className='text-lg font-Text font-normal lg:text-xl text-neutral-600'>
Plan smarter, travel better, and explore more—your next great adventure starts here!    </h1>
 </div>
     
 <div 
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
     ><h1 data-aos="fade-up"
    data-aos-duration="900"
     className=" text-4xl font-Text font-medium  leading-8 lg:text-5xl text-black">
More projects.
</h1>
<p data-aos="fade-up"
        data-aos-duration="900" className="text-neutral-600 text-lg lg:text-xl font-Text mt-6">
Learn more about our projects        </p>
</div>
<div  data-aos="fade-up"
        data-aos-duration="900" className="flex flex-wrap justify-center mt-44 mx-auto  gap-52">
<div data-aos="fade-up"
    data-aos-duration="900" className="w-11/12  md:w-96 md:h-96 border border-solid border-neutral-200 rounded-xl mx-auto mt-14  block text-start p-4 hover:bg-neutral-100 cursor-pointer">
  <sapn className="font-Text font-meduim text-lg text-neutral-500">Novembre, 2020</sapn>
  <h1 className="text-3xl mt-4 font-Text font-medium  leading-8 lg:text-3xl text-black">
    Printit
  </h1>
  <p  className="text-neutral-600 lowercase text-lg lg:text-xl font-Text mt-6">
  A Website For Printing On Demand For All The Products That The Customer Wants, And Also With The Designs That The Customer Chooses
</p>
<div className="flex gap-1 cursor-pointer"> 
<Link
                to="/Fourthproject"
                className="font-Text text-lg  text-black relative top-7"
                onClick={handleClick}
              >
Read more              </Link><svg className="w-7 h-w-7 text-black mt-8 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</div>
</div>
<div data-aos="fade-up"
    data-aos-duration="900" className="w-11/12  md:w-96 md:h-96 border border-solid border-neutral-200 rounded-xl mt-14 mx-auto  block text-start p-4 hover:bg-neutral-100 cursor-pointer">
  <sapn className="font-Text font-meduim text-lg text-neutral-500">Novembre, 2020</sapn>
  <h1 className="text-3xl mt-4 font-Text font-medium leading-8 lg:text-3xl text-black">
    Power Gym
  </h1>
  <p  className="text-neutral-600 text-lg lowercase lg:text-xl font-Text mt-6">
  A Gym Website Where You Can Work Out On
Your Own With A Personal Trainer Or Even Order
Anything Related To Sports From
Anywhere In The World. 
</p>
<div className="flex gap-1 cursor-pointer"> 
<Link
                to="/Thirdproject"
                className="font-Text text-lg  text-black relative top-7"
                onClick={handleClick}
              >
Read more              </Link> <svg className="w-7 h-w-7 text-black mt-8 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</div>
</div>


</div> 
<Fotter/>
    </div>
    )
}