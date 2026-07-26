import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, ExternalLink, Code2, Award,
  GraduationCap, Zap, Cpu, LayoutGrid, Bot, Train, Brain, BookOpen, Users
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */
const majorProjects = [
  {
    name: "BlinkBot",
    description: "Enterprise-grade AI assistant platform where teams deploy custom RAG agents trained on their own documents. Features Multi-Agent Orchestration with dynamic intent routing, WebSocket streaming, and HyDE + Cross-Encoder reranking.",
    link: "https://github.com/Pm3949/BlinkBot",
    demo: "https://blinkbot.in",
    tags: ["React 19", "FastAPI", "LangChain", "pgvector", "RAG"],
    icon: Bot
  },
  {
    name: "HectoClash",
    description: "Real-time multiplayer mental math game with live matchmaking during a 36-hour Hackfest, ranking 6th out of 25 teams. Leverages Socket.io for instantaneous gameplay synchronization.",
    link: "https://github.com/Pm3949/HectoClash",
    demo: "https://hectoclash-cuwf.onrender.com",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    icon: Brain
  },
  {
    name: "AcadMate",
    description: "Centralized academic platform to streamline access to study materials. Integrated secure OneDrive cloud storage utilizing OAuth 2.0 PKCE to enable authenticated file management.",
    link: "https://github.com/Pm3949/AcadMate",
    demo: "https://acadmate-vx8s.onrender.com",
    tags: ["React.js", "Express.js", "OAuth PKCE"],
    icon: BookOpen
  },
  {
    name: "SubjectHub",
    description: "Full-stack academic collaboration platform with real-time chat channels, role-based access, announcements, and live notifications powered by Socket.IO.",
    link: "https://github.com/Pm3949/SubjectHub",
    demo: "https://subject-hub-qfy8.vercel.app/",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.IO"],
    icon: Users
  }
];

const midProjects = [
  {
    name: "Campus Event Management",
    description: "Designed a comprehensive university event platform to streamline event creation, digital ticketing, and attendee management with concurrent booking handling.",
    link: "https://github.com/Pm3949/Campus-Event-Management-and-Ticketing-System",
    demo: "https://campus-event-management-and-ticketi.vercel.app",
    tags: ["Full-Stack", "JavaScript", "MongoDB"],
    icon: Award,
  },
  {
    name: "RailRunner",
    description: "Full-featured train ticket booking and search app integrating IRCTC APIs for real-time train search, live seat availability, train status tracking, and Firebase-backed user authentication.",
    link: "https://github.com/Pm3949/RailRunner",
    demo: "https://rail-runner-six.vercel.app",
    tags: ["JavaScript", "Firebase", "IRCTC API", "Vercel"],
    icon: Train,
  },
];

const coreProjects = [
  {
    name: "xv6 Customize System Calls",
    description: "Low-level OS project modifying the xv6 educational kernel. Customized and implemented new system calls in C, demonstrating deep understanding of kernel-space operations and process management.",
    link: "https://github.com/Pm3949/G27_Project1_xv6CustomizeSystemCalls",
    tags: ["C", "Operating Systems", "Kernel Modding"],
  },
  {
    name: "StudyMate AI-Assistant",
    description: "Next-generation AI educational assistant — architecting a RAG pipeline with modern LLMs for intelligent, context-aware tutoring, dynamic document Q&A, and structured study workflows.",
    link: "https://github.com/Pm3949",
    tags: ["AI/LLMs", "RAG", "Python", "System Architecture"],
  },
];

const otherProjects = [
  { name: "Memory Matching Game", description: "Browser-based card flip memory game with smooth animations and a clean responsive UI.", link: "https://github.com/Pm3949/Memory-Matching-Game", demo: "https://memory-matching-game-eta.vercel.app/", tags: ["JavaScript", "CSS", "HTML"] },
  { name: "Weather App", description: "Live weather dashboard using public REST APIs — temperature, humidity, and conditions with dynamic icons.", link: "https://github.com/Pm3949/Weather-App", demo: "https://weather-app-zeta-blond-42.vercel.app/", tags: ["HTML", "JavaScript", "API"] },
  { name: "Water Solution", description: "JavaScript platform for structured water resource data management and allocation workflows.", link: "https://github.com/Pm3949/Water-Soution", tags: ["JavaScript"] },
  { name: "yap", description: "Modern real-time chat web application focused on seamless communication and clean UX.", link: "https://github.com/Pm3949", demo: "https://yap-tau-nine.vercel.app/", tags: ["JavaScript"] },
];

const skills = [
  "C++", "JavaScript", "TypeScript", "Python",
  "React.js", "Next.js", "Node.js", "Express.js", "FastAPI",
  "MongoDB", "PostgreSQL", "Supabase", "Git"
];

const education = [
  { degree: "B.Tech in ECE + CSE", institution: "IIT (ISM), Dhanbad", duration: "Oct 2022 – June 2027", details: "CGPA: 8.77 / 10.0" },
  { degree: "Senior Secondary", institution: "Pramukh Swami Vidhyalay", duration: "June 2021 – March 2022", details: "Percentage: 85.67%" }
];

/* ═══════════════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════════════ */
const SectionHeading = ({ children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-center gap-4 mb-12"
  >
    {Icon && (
      <div className="p-3 rounded-2xl clay-card">
        <Icon className="text-indigo-400" size={24} />
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
      {children}
    </h2>
  </motion.div>
);

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon || Code2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="clay-card clay-card-hover rounded-[24px] p-8 relative flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3.5 rounded-2xl clay-input text-indigo-400">
            <Icon size={24} />
          </div>
          <div className="flex gap-2.5">
            {project.demo && (
              <motion.a 
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl clay-card clay-card-hover text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl clay-card clay-card-hover text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <Github size={16} />
            </motion.a>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-slate-100 tracking-tight">{project.name}</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">{project.description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold px-3 py-1.5 rounded-full clay-badge text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════════ */
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer to track active section for sticky nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 selection:bg-indigo-500 selection:text-white font-sans relative">
      
      {/* ── STICKY NAV ── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 rounded-2xl bg-[#151d30]/75 backdrop-blur-md border border-white/5 clay-card-flat px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-base sm:text-lg font-black tracking-tighter text-slate-100 hover:opacity-85 transition-opacity">
          PATEL<span className="text-indigo-400 font-bold">MANAV</span>
        </a>
        <div className="flex gap-1.5 sm:gap-3 md:gap-5 text-xs font-bold tracking-wider uppercase items-center">
          {['home', 'projects', 'about', 'contact'].map(id => {
            const isActive = activeSection === id;
            return (
              <a 
                key={id} 
                href={`#${id}`} 
                className={`px-3.5 py-2 rounded-xl transition-all duration-200 text-[10px] sm:text-xs font-bold ${
                  isActive 
                    ? 'clay-btn-primary text-white scale-105' 
                    : 'text-slate-400 hover:text-indigo-400'
                }`}
              >
                {id}
              </a>
            );
          })}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-28">
        
        {/* ══ HERO ══ */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#151d30] text-xs font-bold text-indigo-300 clay-badge-colored mb-8"
            >
              <Zap size={14} className="text-indigo-300" /> Full-Stack Engineer
            </motion.div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.0] text-slate-100 mb-8">
              BUILDING NEXT-GEN <br className="hidden sm:block" />
              <span className="text-indigo-400">DIGITAL EXPERIENCES.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
              I am a B.Tech student at IIT ISM Dhanbad specializing in scalable AI platforms, modern web architecture, and real-time multiplayer systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl clay-btn-primary font-bold flex items-center justify-center cursor-pointer"
              >
                View Work
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl clay-btn-secondary font-bold flex items-center justify-center cursor-pointer"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* ══ PROJECTS ══ */}
        <section id="projects" className="py-24 border-t border-slate-800/50">
          <SectionHeading icon={LayoutGrid}>SELECTED WORKS</SectionHeading>
          
          <div className="mb-20">
            <h3 className="text-sm font-extrabold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Bot size={18} className="text-indigo-400" /> Flagship Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {majorProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-sm font-extrabold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Code2 size={18} className="text-indigo-400" /> Full-Stack Builds
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {midProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-sm font-extrabold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Cpu size={18} className="text-indigo-400" /> Core CS & AI Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <LayoutGrid size={18} className="text-slate-400" /> Other Noteworthy Repos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherProjects.map((project, index) => (
                <motion.div key={project.name}
                  initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin: "-50px" }} transition={{ delay: index * 0.05 }}
                  className="clay-card clay-card-hover rounded-[20px] p-5 flex flex-col group h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{project.name}</h4>
                      <div className="flex gap-2">
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors"><ExternalLink size={13} /></a>
                        )}
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors"><Github size={14} /></a>
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags?.map(tag => (
                      <span key={tag} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-950/20 clay-badge text-slate-400 uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section id="about" className="py-24 border-t border-slate-800/50">
          <SectionHeading icon={Cpu}>ABOUT & SKILLS</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-6">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2.5 rounded-2xl text-sm font-bold text-slate-200 clay-badge hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-indigo-900/60 pb-8 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#151d30] border-2 border-indigo-500 shadow-[0_2px_5px_rgba(79,70,229,0.3)]" />
                    <div className="p-6 rounded-2xl clay-card">
                      <h4 className="text-lg font-bold text-slate-100 mb-1">{item.degree}</h4>
                      <p className="text-slate-300 text-sm mb-2 font-medium">{item.institution} • {item.duration}</p>
                      <p className="text-slate-400 text-sm font-semibold">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="py-24 border-t border-slate-800/50">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#151d30]/80 border border-white/5 clay-card rounded-[2.5rem] p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-100">
              LET'S TALK.
            </h2>
            <p className="text-slate-300 mb-12 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              I'm actively seeking full-time opportunities and freelance projects. Let's build something extraordinary together.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <motion.a 
                href="mailto:manavpatel0767@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl clay-btn-primary font-bold flex items-center gap-3 cursor-pointer"
              >
                <Mail size={20} /> manavpatel0767@gmail.com
              </motion.a>
              <motion.a 
                href="https://github.com/Pm3949" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-2xl clay-btn-secondary font-bold flex items-center gap-3 cursor-pointer"
              >
                <Github size={20} /> GitHub
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/manavpatel07" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-2xl clay-btn-secondary font-bold flex items-center gap-3 cursor-pointer"
              >
                <Linkedin size={20} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </section>
        
      </main>

      <footer className="py-12 text-center border-t border-slate-800/50 mt-16">
        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Patel Manav // Engineered with React & Framer Motion
        </p>
      </footer>
    </div>
  );
}
