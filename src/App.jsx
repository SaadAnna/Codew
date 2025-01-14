import Landingpage from './Pages/Landingpage'
import Navbar from "./Navbar";
import Servicespage from "./Servicespage";
import Firstproject from "./Firstproject"
import Secondproject from "./Secondproject";
import Fourthproject from "./Fourthproject"
import Contactpage from "./ContactPage";
import Aboutpage from "./Aboutpage";
import Thirdproject from "./Thirdprojects"
import Projectdetails from "./Projectdetails"
import Shopifydetails from "./Shopifydetails";
import Choseservice from "./Choseservice";
import Errorpage from "./Errorpage";
import Scrolltop from "./Scrolltop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Scrolltop />
       <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route path="/Servicespage" element={<Servicespage />} />
          <Route path="/Firstproject" element={<Firstproject />} />
          <Route path="/Secondproject" element={<Secondproject />} />
          <Route path="/Thirdproject" element={<Thirdproject />} />
          <Route path="/Fourthproject" element={<Fourthproject />} />
          <Route path="/Contactpage" element={<Contactpage />} />
          <Route path="/Aboutpage" element={<Aboutpage />} />
          <Route path="/Projectdetails" element={<Projectdetails />} />
          <Route path="/Shopifydetails" element={<Shopifydetails />} />
          <Route path="/Choseservice" element={<Choseservice />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
