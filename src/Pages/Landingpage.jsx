import AOS from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Header from "./Header";
import Howitswork from "./Howitswork";
import Ourservices from "./Ourservices";
import Ourwork from "./Ourwork";
import Usersreview from "./Usersreview";
import Fotter from "./Fotter";
export default function Homepage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Codew | Home</title>
      </Helmet>
      <Header />
      <Howitswork />
      <Ourservices />
      <Ourwork />
      <Usersreview />
      <Fotter />
    </div>
  );
}
