import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Content from "../components/layout/Content";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
      <Navbar />
      <Content>
        <div className="w-full min-h-[calc(100vh-200px)] bg-blue-500 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Welcome to the Home Page</h1>
        </div>
      </Content>
      <Footer />
    </div>
  )
}

export default Home

