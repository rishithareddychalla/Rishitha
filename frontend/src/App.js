import React, { useState, useEffect } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import EntryScene from "./components/EntryScene";
import HeroSection from "./components/HeroSection";
import JourneyRoadmap from "./components/JourneyRoadmap";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Footer from "./components/Footer";

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-cyan-400 text-2xl font-mono"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App bg-[#0a0a0a] min-h-screen">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <EntryScene key="entry" onEnter={handleEnter} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div id="hero">
              <HeroSection />
            </div>
            <div id="journey">
              <JourneyRoadmap />
            </div>
            <div id="projects">
              <ProjectsShowcase />
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
