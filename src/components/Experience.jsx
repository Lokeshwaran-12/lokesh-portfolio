import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "LLM Internship",
      company: "Iglowsoft Pvt Ltd",
      location: "Chennai",
      period: "June - July 2025",
      description: "Fine-tuned LLaMA using LoRA with RAG on TN State Board textbooks for a NEET tutoring system. Deployed a FastAPI backend supporting real-time, structured multilingual Q&A.",
      highlights: [
        "Fine-tuned LLaMA using LoRA technique",
        "Implemented RAG on TN State Board textbooks",
        "Built NEET tutoring system",
        "Deployed FastAPI backend",
        "Real-time multilingual Q&A support"
      ]
    },
    {
      title: "AI Engineer & Developer",
      company: "Karunya Hacks - Karunya University",
      location: "Coimbatore",
      period: "Dec 2024 - Present",
      description: "Developed and deployed multiple Generative AI prototypes through hackathons and collaborative innovation projects.",
      highlights: [
        "Multiple Generative AI prototypes",
        "Collaborative innovation projects",
        "End-to-end project development",
        "AI system deployment"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">CAREER</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="border-l-2 border-muted border-opacity-30 pl-6 relative"
              variants={itemVariants}
            >
              <div className="absolute w-3 h-3 bg-secondary border border-light rounded-full -left-[7px] top-1"></div>
              
              <div className="bg-primary bg-opacity-40 border border-muted border-opacity-20 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-medium mb-1">{exp.title}</h3>
                    <p className="text-muted mb-1">{exp.company}</p>
                    <p className="text-sm text-muted opacity-80">{exp.location}</p>
                  </div>
                  <span className="text-sm font-mono text-light opacity-70 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-sm font-mono text-light mb-3">KEY HIGHLIGHTS</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-light opacity-50 mt-1">→</span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-6 border border-muted border-opacity-20 bg-primary bg-opacity-40"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-2">Interested in collaborating?</h3>
            <p className="text-muted">Let's explore opportunities to work together on AI projects.</p>
          </div>
          <a href="#contact" className="btn btn-primary whitespace-nowrap">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;