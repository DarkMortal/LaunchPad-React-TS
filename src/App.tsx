import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles.scss";
import NavBar from "./components/organisms/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Page404 from "./pages/Page404/Page404";

import Footer from "./components/organisms/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/*<br />
      <br />*/}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
