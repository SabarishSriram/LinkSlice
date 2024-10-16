import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import { Toaster } from "./components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Toaster />
      <Analytics id="F1QXZG0X5F" />
    </div>
  );
}

export default App;
