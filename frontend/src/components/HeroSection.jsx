import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #00d9ff 1px, transparent 1px),
                             linear-gradient(to bottom, #00d9ff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-sm md:text-base tracking-widest uppercase font-mono">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
            Challa Rishitha Reddy
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl text-white/90 font-light mb-4">
            Flutter Developer
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <MapPin className="w-4 h-4" />
            <span className="text-sm md:text-base">Hyderabad, Telangana</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Motivated Computer Science student with hands-on experience building and publishing
          multiple mobile applications. Skilled in Flutter, Dart, and Firebase with a strong
          focus on clean UI, performance, and user-centric design.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/rishithareddychalla"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
            <span className="text-white text-sm md:text-base">GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rishitha-reddy-challa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
            <span className="text-white text-sm md:text-base">LinkedIn</span>
          </motion.a>

          <motion.a
            href="mailto:rishithareddychalla@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-400 hover:to-orange-400 rounded-full transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm md:text-base">Get In Touch</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;