import React from "react";
import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";
import Roadmap from "./layouts/Roadmap";

const App = () => {
  return (
    <div className="flex flex-col bg-[#F5F4F7] min-h-screen">
      <Navbar />
      <Hero />
      <Roadmap/>
    </div>
  );
};

export default App;