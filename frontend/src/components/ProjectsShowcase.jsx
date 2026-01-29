import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Smartphone } from 'lucide-react';

const ProjectsShowcase = () => {
  const projects = [
    {
      name: 'Emergency SOS',
      description:
        'SOS safety application designed to provide quick emergency assistance by enabling users to send instant alerts with location details to predefined contacts.',
      tech: 'Flutter',
      color: 'from-red-500 to-orange-500',
      link: 'https://play.google.com/store/apps/details?id=com.beep.sos',
    },
    {
      name: 'Pomodoo',
      description:
        'Pomodoro productivity application to help users improve focus and time management through structured work and break cycles.',
      tech: 'Flutter',
      color: 'from-green-500 to-teal-500',
      link: 'https://play.google.com/store/apps/details?id=com.codegres.pomodoo',
    },
    {
      name: 'Notely',
      description:
        'Note-taking application focused on simplicity, speed, and distraction-free productivity. Clean interface for efficient note management.',
      tech: 'Flutter',
      color: 'from-blue-500 to-purple-500',
      link: 'https://play.google.com/store/apps/details?id=com.codegres.notely',
    },
    {
      name: 'PDF Reader',
      description:
        'PDF Reader application designed for smooth and efficient document viewing. Optimized performance for seamless reading experience.',
      tech: 'Flutter',
      color: 'from-yellow-500 to-orange-500',
      link: 'https://play.google.com/store/apps/details?id=com.codegres.pdfgo',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(0, 217, 255, 0.03)' : 'rgba(255, 107, 53, 0.03)'} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Published mobile applications on Google Play Store, showcasing end-to-end development
            expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}
          >
            <Smartphone className="w-8 h-8 text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {project.name}
          </h3>

          {/* Tech badge */}
          <div className="inline-flex items-center px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4 w-fit">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">
              {project.tech}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/70 text-base leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Link */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-orange-400 transition-colors duration-300 font-medium"
            whileHover={{ x: 5 }}
          >
            <span>View on Play Store</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Hover effect border */}
        <motion.div
          className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 pointer-events-none`}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectsShowcase;