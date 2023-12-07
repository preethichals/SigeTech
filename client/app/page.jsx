import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Robots from "./components/Robots";
import Courses from "./components/Courses";
import Services from "./components/Services";
import Product from "./components/Product";
import Clients from "./components/Clients";

function HomePage() {
  return (
    <>
      <Header />
      {/* <New/> */}
      <Robots/>
     
      <Courses/>
 
      <Product/>
      <Services/>
      <Clients/>
      
     
      <Footer />
    </>
  );
}

export default HomePage;
