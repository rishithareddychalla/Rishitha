import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #00d9ff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-orange-500 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Rishitha Reddy</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Flutter Developer passionate about creating beautiful and functional mobile applications.
              </p>
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#journey"
                    className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    Journey
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/rishithareddychalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rishitha-reddy-challa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  href="mailto:rishithareddychalla@gmail.com"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/60 text-sm flex items-center gap-2">
            <span>© {currentYear} Challa Rishitha Reddy.</span>
            <span className="hidden md:inline">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span className="hidden md:inline">and Flutter</span>
          </p>
          <p className="text-white/40 text-xs font-mono">Built with React & Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;