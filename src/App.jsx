import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  Github, Linkedin, Mail, ExternalLink, Code2, Award, Briefcase,
  GraduationCap, Zap, Cpu, LayoutGrid, Bot, Train, Brain, BookOpen, Users, Download, Trophy, Star, Menu, X
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */
const majorProjects = [
  {
    name: "BlinkBot",
    description: "Enterprise-grade AI Agent builder platform using FastAPI and LangGraph, enabling the deployment of custom multi-agent networks and supervisor-delegated routing over private documents. Advanced RAG pipeline with pgvector, HyDE, and Cross-Encoder Reranking.",
    link: "https://github.com/Pm3949/BlinkBot",
    demo: "https://blinkbot.in",
    tags: ["React", "FastAPI", "LangGraph", "pgvector", "RAG"],
    icon: Bot
  },
  {
    name: "SubjectHub",
    description: "Full-stack academic collaboration platform using Next.js, Express.js, and MongoDB for subject-centric communication. Real-time chat, threaded discussions, notifications, and presence tracking using Socket.IO.",
    link: "https://github.com/Pm3949/SubjectHub",
    demo: "https://subject-hub-qfy8.vercel.app/",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.IO"],
    icon: Users
  },
  {
    name: "xv6-riscv: Custom System Call Extensions",
    description: "Extended the xv6-riscv kernel with custom system calls for IPC, process management, synchronization, signaling, and system monitoring. Engineered a blocking IPC mechanism using per-process kernel mailboxes.",
    link: "https://github.com/Pm3949/G27_Project1_xv6CustomizeSystemCalls",
    tags: ["C", "RISC-V", "Operating Systems"],
    icon: Cpu
  },
  {
    name: "HectoClash",
    description: "Real-time multiplayer mental math game inspired by the Hectoc puzzle format. Live matchmaking and gameplay logic enabling time-based competitive challenges.",
    link: "https://github.com/Pm3949/HectoClash",
    demo: "https://hectoclash-cuwf.onrender.com",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    icon: Brain
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


const experience = [
  {
    role: "TechnoRise AI Engineer Intern",
    company: "Tech Mahindra",
    location: "Hyderabad, India",
    duration: "May 2026 – July 2026",
    points: [
      "Architected an on-premise AI inference pipeline for Project Orion, enabling secure, localized deployment of Large Language Models (e.g., Qwen 2.5) for enterprise applications.",
      "Evaluated high-throughput frameworks and deployed NVIDIA NIM for production serving, alongside a custom FastAPI-based gateway using vLLM for dynamic GPU resource management.",
      "Optimized hardware efficiency by engineering concurrency management, handling cold starts, and resolving FlashInfer environment dependencies without relying on rigid containerization.",
      "Integrated local inference servers into RAG pipelines and multi-agent frameworks (CrewAI) to drive complex, production-ready workflows."
    ]
  }
];

const achievements = [
  "Secured an All India Rank of 8,485 among 1,50,000 candidates in the JEE Advanced 2022 examination.",
  "Secured an All India Rank of 9,294 among 12 million candidates in the JEE Mains 2022 examination.",
  "Achieved a global rank of 1328 in LeetCode Weekly Contest 466 among thousands of participants.",
  "Solved over 900 DSA problems across platforms including LeetCode, Codeforces, and CodeChef."
];

const technicalSkills = [
  { category: "Languages", skills: ["C++", "C", "Python", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "Vite", "Redux", "Zustand", "TanStack Query"] },
  { category: "Backend", skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.io"] },
  { category: "AI/ML & Agents", skills: ["LangChain", "LangGraph", "CrewAI", "RAG", "Agentic AI", "Multi-Agent Systems", "Tool Calling", "Function Calling", "LLM Inference"] },
  { category: "RAG & AI Systems", skills: ["pgvector", "Semantic Search", "HyDE", "Cross-Encoder Reranking", "Vector Databases", "Prompt Engineering"] },
  { category: "Databases", skills: ["PostgreSQL", "MongoDB", "Supabase", "pgvector", "SQL"] },
  { category: "Authentication & APIs", skills: ["JWT", "OAuth 2.0", "OAuth PKCE", "RBAC", "Row Level Security (RLS)", "API Integration", "Webhooks"] },
  { category: "AI Infrastructure", skills: ["vLLM", "NVIDIA NIM", "Ollama", "OpenAI API", "Groq", "Google TTS", "Gemini API"] },
  { category: "Systems & Tools", skills: ["Linux", "xv6-riscv", "Git", "GitHub", "Postman", "Docker"] }
];

const githubRepos = [
  { name: "BlinkBot", language: "JavaScript", stars: 0 },
  { name: "Manav", language: "JavaScript", stars: 0, description: "Portfolio" },
  { name: "Handwritten", language: "JavaScript", stars: 0 },
  { name: "opensre", language: "Python", stars: 0, description: "Build your own AI SRE agents. The open source toolkit for the AI era." },
  { name: "the_cake_gallery", language: "TypeScript", stars: 0 },
  { name: "Weather-App", language: "HTML", stars: 0 },
  { name: "Memory-Matching-Game", language: "JavaScript", stars: 0 },
  { name: "Water-Soution", language: "JavaScript", stars: 0 },
  { name: "yap", language: "TypeScript", stars: 0 },
  { name: "SubjectHub", language: "TypeScript", stars: 0 },
  { name: "Campus-Event-Management-and-Ticketing-System", language: "JavaScript", stars: 0 },
  { name: "G27_Project1_xv6CustomizeSystemCalls", language: "C", stars: 1 },
  { name: "EY", language: "JavaScript", stars: 0 },
  { name: "Hooman_Labs_Manav", language: "TypeScript", stars: 0 },
  { name: "manav_AI_CF", language: "", stars: 0 },
  { name: "AcadMate_admin", language: "JavaScript", stars: 0 },
  { name: "EY-Techathon", language: "HTML", stars: 0 },
  { name: "recruiter", language: "JavaScript", stars: 0 },
  { name: "AcadMate", language: "JavaScript", stars: 0 },
  { name: "HectoClash", language: "JavaScript", stars: 0 },
  { name: "StudyMate_AI-assistant", language: "JavaScript", stars: 0 },
  { name: "RailRunner", language: "HTML", stars: 0 }
];


const education = [
  { degree: "B.Tech in Electronics and Communication Engineering & B.Tech in Computer Science and Engineering", institution: "Indian Institute of Technology (Indian School of Mines), Dhanbad", duration: "Oct 2022 – June 2027", details: "CGPA: 8.49 / 10.0" }
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
      className="h-full"
    >
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="clay-card clay-card-hover rounded-[24px] p-6 md:p-8 relative flex flex-col justify-between h-full">
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
          </Tilt>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════════ */
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] max-w-5xl z-50 rounded-2xl bg-[#151d30]/85 backdrop-blur-lg border border-white/10 clay-card-flat px-4 md:px-6 py-3 transition-all duration-300">
        <div className="flex justify-between items-center w-full">
          <a href="#home" className="text-base md:text-lg font-black tracking-tighter text-slate-100 hover:opacity-85 transition-opacity">
            PATEL<span className="text-indigo-400 font-bold">MANAV</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2 sm:gap-3 md:gap-5 text-xs font-bold tracking-wider uppercase items-center">
            {['home', 'experience', 'projects', 'achievements', 'github', 'about', 'contact'].map(id => {
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden flex flex-col gap-2 mt-4 pb-2 overflow-hidden"
            >
              {['home', 'experience', 'projects', 'achievements', 'github', 'about', 'contact'].map(id => {
                const isActive = activeSection === id;
                return (
                  <a 
                    key={id} 
                    href={`#${id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl transition-all duration-200 text-xs font-bold tracking-wider uppercase ${
                      isActive 
                        ? 'clay-btn-primary text-white' 
                        : 'text-slate-400 hover:bg-white/5 hover:text-indigo-400'
                    }`}
                  >
                    {id}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
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

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] sm:leading-[1.0] text-slate-100 mb-8 break-words">
              BUILDING NEXT-GEN <br className="hidden sm:block" />
              <span className="text-indigo-400">DIGITAL EXPERIENCES.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
              I am a B.Tech student at IIT ISM Dhanbad specializing in scalable AI platforms, modern web architecture, and real-time multiplayer systems.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
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
              <motion.a 
                href="/Resume.pdf"
                download="Manav_Patel_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl clay-btn-secondary font-bold flex items-center gap-2 justify-center cursor-pointer"
              >
                <Download size={20} /> Resume
              </motion.a>
            </div>
          </motion.div>
        </section>

        
        {/* ══ EXPERIENCE ══ */}
        <section id="experience" className="py-24 border-t border-slate-800/50">
          <SectionHeading icon={Briefcase}>EXPERIENCE</SectionHeading>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-10 rounded-[24px] clay-card"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">{job.role}</h3>
                    <p className="text-indigo-400 font-semibold text-lg">{job.company}</p>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-slate-300 font-medium">{job.duration}</p>
                    <p className="text-slate-500 text-sm">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 leading-relaxed text-sm md:text-base">
                      <span className="text-indigo-400 mt-1.5 opacity-60">▹</span> {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ PROJECTS ══ */}
        <section id="projects" className="py-24 border-t border-slate-800/50">
          <SectionHeading icon={LayoutGrid}>SELECTED WORKS</SectionHeading>
          
          <div className="mb-20">
            <h3 className="text-sm font-extrabold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Bot size={18} className="text-indigo-400" /> Flagship Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {majorProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-sm font-extrabold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Code2 size={18} className="text-indigo-400" /> Full-Stack Builds
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {midProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-sm font-extrabold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <Cpu size={18} className="text-indigo-400" /> Core CS & AI Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {coreProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <LayoutGrid size={18} className="text-slate-400" /> Other Noteworthy Repos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {otherProjects.map((project, index) => (
                <motion.div key={project.name}
                  initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin: "-50px" }} transition={{ delay: index * 0.05 }}
                  className="h-full">
                  <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000} className="clay-card clay-card-hover rounded-[20px] p-5 flex flex-col group h-full justify-between">
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
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        
        {/* ══ ACHIEVEMENTS ══ */}
        <section id="achievements" className="py-24 border-t border-slate-800/50">
          <SectionHeading icon={Trophy}>ACHIEVEMENTS</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl clay-card clay-card-hover flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-xl clay-input text-yellow-400 shrink-0 mt-1">
                  <Trophy size={20} />
                </div>
                <p className="text-slate-200 leading-relaxed text-sm">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ GITHUB ══ */}
        <section id="github" className="py-24 border-t border-slate-800/50">
          <SectionHeading icon={Github}>GITHUB REPOSITORIES</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {githubRepos.filter(r => r.name !== 'Manav').map((repo, index) => (
              <motion.a 
                href={`https://github.com/Pm3949/${repo.name}`}
                target="_blank" rel="noreferrer"
                key={repo.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.05 }}
                className="block h-full"
              >
                <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000} className="p-6 rounded-2xl clay-card clay-card-hover flex flex-col group h-full">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-indigo-400 transition-colors break-words pr-2">
                    {repo.name}
                  </h4>
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-900/50 px-2 py-1 rounded-full shrink-0">
                      <Star size={12} className="text-yellow-400" fill="currentColor" /> {repo.stars}
                    </span>
                  )}
                </div>
                {repo.description && (
                  <p className="text-slate-400 text-xs mb-4 line-clamp-2">
                    {repo.description}
                  </p>
                )}
                {repo.language && (
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-900/50 text-slate-300">
                    {repo.language}
                  </span>
                )}
                </Tilt>
              </motion.a>
            ))}
          </div>
        </section>

        
        {/* ══ ABOUT ══ */}
        <section id="about" className="py-24 border-t border-slate-800/50">
          <SectionHeading icon={Cpu}>ABOUT & SKILLS</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-6">Technical Arsenal</h3>
              <div className="space-y-6">
                {technicalSkills.map((categoryGroup, index) => (
                  <motion.div 
                    key={categoryGroup.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-sm font-bold text-indigo-400 mb-3 uppercase tracking-wider">{categoryGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {categoryGroup.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-200 clay-badge cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  
                </motion.div>
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
            className="bg-[#151d30]/80 border border-white/5 clay-card rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center mx-auto overflow-hidden"
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
                className="px-4 sm:px-8 py-4 rounded-2xl clay-btn-primary font-bold flex items-center gap-3 cursor-pointer text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Mail size={20} /> manavpatel0767@gmail.com
              </motion.a>
              <motion.a 
                href="https://github.com/Pm3949" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-4 rounded-2xl clay-btn-secondary font-bold flex items-center gap-3 cursor-pointer text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Github size={20} /> GitHub
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/manavpatel07" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-4 rounded-2xl clay-btn-secondary font-bold flex items-center gap-3 cursor-pointer text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Linkedin size={20} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </section>
        
      </main>

      {/* <footer className="py-12 text-center border-t border-slate-800/50 mt-16">
        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Patel Manav // Engineered with React & Framer Motion
        </p>
      </footer> */}
    </div>
  );
}
