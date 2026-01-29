import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const JourneyRoadmap = () => {
  const roadmapItems = [
    {
      icon: GraduationCap,
      title: 'Education Journey',
      year: 'Present',
      items: [
        {
          degree: 'B.Sc in Computer Science',
          institution: 'Birla Institute Of Technology and Science',
          period: 'August 2024 - Present',
          color: 'cyan',
        },
        {
          degree: 'Intermediate',
          institution: 'Excellencia Junior College',
          period: 'June 2022 - May 2024',
          score: '94.4%',
          color: 'orange',
        },
        {
          degree: 'SSC',
          institution: "St.Ann's High School",
          period: 'June 2012 - April 2022',
          score: 'CGPA: 10',
          color: 'cyan',
        },
      ],
    },
    {
      icon: Briefcase,
      title: 'Professional Experience',
      year: '2025',
      items: [
        {
          role: 'Flutter Developer',
          company: 'Codegres',
          location: 'Bengaluru (Remote), Karnataka',
          period: 'June 2025 - Present',
          description:
            'Independently built and shipped multiple mobile applications with end-to-end ownership from concept to release. Implemented clean Flutter code, integrated Firebase services, and optimized UI performance.',
          color: 'cyan',
        },
      ],
    },
    {
      icon: Code,
      title: 'Technical Skills',
      year: 'Expertise',
      items: [
        {
          category: 'Mobile Development',
          skills: 'Flutter, Dart',
          color: 'orange',
        },
        {
          category: 'Web Technologies',
          skills: 'JavaScript, HTML, CSS, Node.js, Express.js',
          color: 'cyan',
        },
        {
          category: 'Database & Backend',
          skills: 'SQLite, Firebase',
          color: 'orange',
        },
        {
          category: 'Tools & Others',
          skills: 'Git, GitHub, Python',
          color: 'cyan',
        },
      ],
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-white/60 text-lg">Follow the roadmap of my professional growth</p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-orange-400 to-cyan-400" />

          {roadmapItems.map((section, sectionIdx) => (
            <RoadmapSection key={sectionIdx} section={section} index={sectionIdx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RoadmapSection = ({ section, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mb-16 md:mb-24"
    >
      {/* Timeline node */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-orange-500 flex items-center justify-center shadow-lg"
        >
          <section.icon className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:ml-auto md:pl-16'} pl-24 md:pl-0`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Year badge */}
          <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <span className="text-cyan-400 text-sm font-mono">{section.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{section.title}</h3>

          {/* Items */}
          <div className="space-y-4">
            {section.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                {item.degree && (
                  <>
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {item.degree}
                    </h4>
                    <p className="text-cyan-400 mb-2">{item.institution}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-white/60">
                      <span>{item.period}</span>
                      {item.score && (
                        <>
                          <span>•</span>
                          <span className="text-orange-400 font-medium">{item.score}</span>
                        </>
                      )}
                    </div>
                  </>
                )}

                {item.role && (
                  <>
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {item.role}
                    </h4>
                    <p className="text-cyan-400 mb-1">{item.company}</p>
                    <p className="text-white/60 text-sm mb-3">
                      {item.location} • {item.period}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </>
                )}

                {item.category && (
                  <>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.category}</h4>
                    <p className="text-cyan-400">{item.skills}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JourneyRoadmap;