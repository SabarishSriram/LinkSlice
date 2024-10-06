import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
