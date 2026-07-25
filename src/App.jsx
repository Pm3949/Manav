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
    {Icon && <Icon className="text-gray-400" size={32} />}
    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-colors"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-white/5 rounded-2xl">
          <Icon size={28} className="text-white" />
        </div>
        <div className="flex gap-3">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
          <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{project.name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-white/5 text-gray-300">
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
    <div className="min-h-screen bg-[#030303] text-gray-200 selection:bg-white selection:text-black font-sans">
      
      {/* ── STICKY NAV ── */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-black tracking-tighter text-white">
            PATEL<span className="text-gray-500">MANAV</span>
          </a>
          <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase">
            {['home', 'projects', 'about', 'contact'].map(id => (
              <a 
                key={id} 
                href={`#${id}`} 
                className={`transition-colors duration-300 ${activeSection === id ? 'text-white' : 'text-gray-600 hover:text-gray-300'}`}
              >
                {id}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24">
        
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-300 mb-8"
            >
              <Zap size={14} className="text-white" /> Full-Stack Engineer
            </motion.div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white mb-8">
              BUILDING NEXT-GEN <br className="hidden sm:block" />
              <span className="text-gray-500">DIGITAL EXPERIENCES.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed">
              I am a B.Tech student at IIT ISM Dhanbad specializing in scalable AI platforms, modern web architecture, and real-time multiplayer systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                View Work
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center hover:bg-white/10"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* ══ PROJECTS ══ */}
        <section id="projects" className="py-32 border-t border-white/5">
          <SectionHeading icon={LayoutGrid}>SELECTED WORKS</SectionHeading>
          
          <div className="mb-20">
            <h3 className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Bot size={20} className="text-[#00f0ff]" /> Flagship Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {majorProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Code2 size={20} className="text-[#ff007f]" /> Full-Stack Builds
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {midProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Cpu size={20} className="text-[#8a2be2]" /> Core CS & AI Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest flex items-center gap-3">
              <LayoutGrid size={20} className="text-gray-400" /> Other Noteworthy Repos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div key={project.name}
                  initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin: "-50px" }} transition={{ delay: index * 0.05 }}
                  className="bg-[#0a0a0a] rounded-xl p-5 border border-white/5 flex flex-col group hover:border-white/20 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{project.name}</h4>
                    <div className="flex gap-2">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><ExternalLink size={13} /></a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={14} /></a>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed flex-grow mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.map(tag => (
                      <span key={tag} className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 text-gray-500 uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section id="about" className="py-32 border-t border-white/5">
          <SectionHeading icon={Cpu}>ABOUT & SKILLS</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-sm font-bold text-gray-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-white/10"
                  >
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white" />
                    <h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
                    <p className="text-gray-400 text-sm mb-2">{item.institution} • {item.duration}</p>
                    <p className="text-gray-500 text-sm font-semibold">{item.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="py-32 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-12 md:p-24 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">
              LET'S TALK.
            </h2>
            <p className="text-gray-400 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
              I'm actively seeking full-time opportunities and freelance projects. Let's build something extraordinary together.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <motion.a 
                href="mailto:manavpatel0767@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-3"
              >
                <Mail size={20} /> manavpatel0767@gmail.com
              </motion.a>
              <motion.a 
                href="https://github.com/Pm3949" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold flex items-center gap-3 hover:bg-white/10"
              >
                <Github size={20} /> GitHub
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/manavpatel07" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold flex items-center gap-3 hover:bg-white/10"
              >
                <Linkedin size={20} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </section>
        
      </main>

      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Patel Manav // Engineered with React & Framer Motion
        </p>
      </footer>
    </div>
  );
}
