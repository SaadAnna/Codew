import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Servicespage from "./Servicespage";
import Workpage from "./Workpage";
import Contactpage from "./ContactPage";
import Aboutpage from "./Aboutpage";
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
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Servicespage" element={<Servicespage />} />
          <Route path="/Workpage" element={<Workpage />} />
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
