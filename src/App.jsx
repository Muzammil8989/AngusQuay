// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import RestaurantHours from "./Pages/RestaurantHours/RestaurantHours";
import MenuPrice from "./Pages/MenuPrice/MenuPrice";
import AboutUs from "./Pages/About-us/About-us";
import ContactForm from "./Pages/Contact-Us/ContactForm";


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hours" element={<RestaurantHours />} />
            <Route path="/menu" element={<MenuPrice />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
