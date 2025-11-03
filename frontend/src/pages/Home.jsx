import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Content from "../components/layout/Content";
import Hero from "../components/layout/Hero";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
      <Navbar />
      <Content>
        <Hero />
      </Content>
      <Footer />
    </div>
  )
}

export default Home

