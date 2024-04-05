import React from "react";
import LoginForm from './Forms/LoginForm.jsx';
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Routes>

      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/Navbar" element={<Navbar />}></Route>
      <Route path="/login" element={<Hero />}></Route>
      <Route path="/login" element={<Services />}></Route>
      <Route path="/login" element={<Banner />}></Route>
      <Route path="/login" element={<AppStore/>}></Route>
      <Route path="/login" element={<Testimonials />}></Route>
      <Route path="/login" element={<Footer />}></Route>
      </Routes>
    
    </div>
  );
};

export default App;
