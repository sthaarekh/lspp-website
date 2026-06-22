import React from "react";
import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";

const App = () => {
  return (
    <div className="flex flex-col bg-[#F5F4F7] min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;