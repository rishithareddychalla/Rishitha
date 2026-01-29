import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

const EntryScene = ({ onEnter }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Auto-enter after 5 seconds as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Auto-entering portfolio after timeout');
      onEnter();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onEnter]);

  const handleClick = () => {
    console.log('Entry scene clicked');
    onEnter();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 0.8 }}
        onClick={handleClick}
        className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center overflow-hidden cursor-pointer"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 2,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center">
          {/* Animated icon container */}
          <motion.div
            className="relative inline-block cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: '200px',
                height: '200px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-orange-400/40"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
              style={{
                width: '160px',
                height: '160px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Icon circle */}
            <motion.div
              className="relative bg-gradient-to-br from-cyan-500 to-orange-500 rounded-full p-8 shadow-2xl"
              animate={{
                boxShadow: isHovered
                  ? '0 0 60px rgba(0, 217, 255, 0.6), 0 0 100px rgba(255, 107, 53, 0.4)'
                  : '0 0 30px rgba(0, 217, 255, 0.3), 0 0 50px rgba(255, 107, 53, 0.2)',
              }}
              style={{ width: '120px', height: '120px' }}
            >
              <motion.div
                animate={{
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                <Code2 className="w-full h-full text-white" strokeWidth={1.5} />
              </motion.div>

              {/* Sparkles */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12"
          >
            <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
              Welcome to My Portfolio
            </h2>
            <motion.p
              className="text-cyan-400 text-sm md:text-base tracking-wider uppercase font-mono"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Click to Enter
            </motion.p>
          </motion.div>
        </div>

        {/* Corner decorations */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-400/20"
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-orange-400/20"
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default EntryScene;