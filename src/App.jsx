
// import ButtonComp from "./components/ButtonComp"
// import NavbarComp from "./components/NavbarComp"
// import TitleComp from "./components/TitleComp"
// import { useState } from "react";
import "./App.css"
// import HooksComp from "./components/HooksComp"
// import Hooks2Comp from "./components/Hooks2Comp";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NavbarComp from "./components/NavbarComp";


function App (){

  
  // const [score, setScore] = useState(0);

  return (
    <div>

       <NavbarComp />

    

        <Routes>
          <Route path="/" element={<HomePage />} />


          <Route path="/about" element={<AboutPage />} />


          <Route path="/contact" element={<ContactPage />} />


        </Routes>



    </div>
  )
}


export default App