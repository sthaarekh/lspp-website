import React from "react";
import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Hero";
import Roadmap from "./layouts/Roadmap";
import Status from "./layouts/Status";
import AlumniSection from "./layouts/Alumni";
import MeetOurMentors from "./layouts/Mentor";
import FAQSection from "./layouts/FAQ";

const App = () => {
  return (
    <div className="flex flex-col bg-[#F5F4F7] min-h-screen">
      <Navbar />
      <Hero />
      <Roadmap/>
      <Status/>
      <AlumniSection/>
      <MeetOurMentors/>
      <FAQSection/>
    </div>
  );
};

export default App;