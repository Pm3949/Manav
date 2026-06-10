import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, Award, GraduationCap, Phone, Zap, Cpu, LayoutGrid } from 'lucide-react';

const majorProjects = [
  {
    name: "HectoClash",
    description: "Engineered a real-time multiplayer mental math game with live matchmaking and competitive challenges during a 36-hour Hackfest. The platform leverages Socket.io for instantaneous gameplay synchronization and JWT for secure session management.",
    link: "https://github.com/Pm3949/HectoClash",
    demo: "https://hectoclash-cuwf.onrender.com",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB"]
  },
  {
    name: "AcadMate",
    description: "Developed a centralized academic platform to streamline access to study materials and historical exam papers. Integrated secure OneDrive cloud storage utilizing OAuth 2.0 PKCE to enable seamless and authenticated file management.",
    link: "https://github.com/Pm3949/AcadMate",
    demo: "https://acadmate-vx8s.onrender.com",
    tags: ["React.js", "Express.js", "MongoDB", "OAuth PKCE"]
  },
  {
    name: "Campus Event Management",
    description: "Designed a comprehensive university event platform to streamline end-to-end event creation, digital ticketing, and attendee management. Built a robust full-stack architecture to handle concurrent ticket bookings.",
    link: "https://github.com/Pm3949/Campus-Event-Management-and-Ticketing-System",
    demo: "https://campus-event-management-and-ticketi.vercel.app",
    tags: ["Full-Stack", "JavaScript", "MongoDB"]
  },
  {
    name: "RailRunner",
    description: "Created a secure train ticket booking application leveraging Firebase for robust backend data management. Integrated the IRCTC API for real-time searches with seamless redirection to ConfirmTkt for payments.",
    link: "https://github.com/Pm3949",
    demo: "#",
    tags: ["JavaScript", "Firebase", "API Integration"]
  }
];

const coreProjects = [
  {
    name: "xv6 Customize System Calls",
    description: "Executed a low-level Operating Systems project focused on modifying the xv6 educational kernel. Customized and implemented new system calls in C, demonstrating a deep understanding of kernel-space operations.",
    link: "https://github.com/Pm3949/G27_Project1_xv6CustomizeSystemCalls",
    tags: ["C", "Operating Systems", "Kernel Modding"]
  },
  {
    name: "StudyMate AI-Assistant",
    description: "Currently developing a next-generation AI educational assistant to revolutionize student productivity. Architecting a Retrieval-Augmented Generation (RAG) pipeline with modern LLMs to provide intelligent, context-aware tutoring, dynamic document Q&A, and structured study workflows.",
    link: "https://github.com/Pm3949",
    tags: ["AI/LLMs", "RAG", "Python", "System Architecture"]
  }
];

const otherProjects = [
  {
    name: "yap",
    description: "A modern web application built for real-time chat and seamless communication.",
    link: "https://github.com/Pm3949"
  },
  {
    name: "SubjectHub & Water-Solution",
    description: "Specialized utility platforms focusing on structured data management and resource allocation.",
    link: "https://github.com/Pm3949"
  },
  {
    name: "Memory-Matching & Weather App",
    description: "Frontend showcase applications demonstrating REST API integrations, robust state management, and interactive UI/UX.",
    link: "https://github.com/Pm3949"
  }
];

const education = [
  {
    degree: "B.Tech in ECE + CSE",
    institution: "Indian Institute of Technology (ISM), Dhanbad",
    duration: "Oct 2022 - June 2027",
    details: "CGPA: 8.77 / 10.0"
  },
  {
    degree: "Senior Secondary (Class 12)",
    institution: "Pramukh Swami Vidhyalay, Sarangpur",
    duration: "June 2021 - March 2022",
    details: "Percentage: 85.67%"
  },
  {
    degree: "Secondary (Class 10)",
    institution: "Pramukh Swami Vidhyalay, Sarangpur",
    duration: "June 2019 - March 2020",
    details: "Percentage: 87.00%"
  }
];

const achievements = [
  "Secured AIR 8485 (Top 5.6%) among 1.5 lakh candidates in JEE Advanced 2022.",
  "Achieved AIR 9294 among 12 lakh+ students in JEE Mains 2022.",
  "Ranked 6th/25 teams at Hackfest’25 for building HectoClash in 36 hours.",
  "Solved over 720+ DSA problems across LeetCode, Codeforces, CodeChef, and AtCoder."
];

const skills = [
  "C++", "C", "JavaScript", "React.js", "Node.js", "Express.js", 
  "Tailwind CSS", "MongoDB", "Firebase", "Git", "REST APIs", "OAuth 2.0"
];

function App() {
  return (
    <div className="min-h-screen bg-grid-pattern relative">
      {/* Dynamic Ambient Glows */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00f0ff]/10 blur-[150px] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute top-[40%] right-[-20%] w-[40%] h-[60%] rounded-full bg-[#8a2be2]/15 blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#ff007f]/10 blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 py-4 px-6 md:px-12 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter"
          >
            M<span className="text-[#00f0ff]">_</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase"
          >
            <a href="#projects" className="text-gray-400 hover:text-[#00f0ff] transition-colors">Works</a>
            <a href="#education" className="text-gray-400 hover:text-[#8a2be2] transition-colors">Profile</a>
            <a href="#contact" className="text-gray-400 hover:text-[#ff007f] transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#00f0ff]/30 text-sm font-bold text-[#00f0ff] mb-8"
            >
              <Zap size={16} className="text-[#ff007f]" />
              Building scalable, performant solutions
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none">
              HI, I'M <br/>
              <span className="text-gradient-neon">PATEL MANAV.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light">
              B.Tech Student at IIT ISM Dhanbad. I engineer next-gen websites, apps, and robust digital experiences through elegant code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform duration-300">
                Explore Projects
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl glass-panel font-bold hover:bg-white/10 hover-glow transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-20 relative border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-lg glass-panel hover-glow text-sm md:text-base font-bold text-gray-300 hover:text-white transition-all cursor-default flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></div>
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative">
          
          {/* Category 1: Major Full-Stack Projects */}
          <div className="mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <Code2 className="text-[#ff007f]" size={36} />
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">MAJOR FULL-STACK <span className="text-gray-600">PROJECTS</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {majorProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel rounded-3xl p-8 hover-glow transition-all duration-500 flex flex-col h-full group border-t border-white/10"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold group-hover:text-gradient-neon transition-colors duration-300 inline-block">{project.name}</h3>
                    <div className="flex gap-3">
                      {project.demo && project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00f0ff] transition-colors p-2 glass-panel rounded-full hover:scale-110">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#8a2be2] transition-colors p-2 glass-panel rounded-full hover:scale-110">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-8 text-lg flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-md bg-white/5 text-gray-300 border border-white/5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff007f]"></span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Category 2: Core CS & AI */}
          <div className="mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <Cpu className="text-[#00f0ff]" size={32} />
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter">CORE CS & <span className="text-gray-600">AI SYSTEMS</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 hover-glow transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-[#00f0ff] transition-colors">{project.name}</h3>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-md bg-white/5 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Category 3: Other Web & Utility Apps */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <LayoutGrid className="text-[#8a2be2]" size={28} />
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter">OTHER NOTEWORTHY <span className="text-gray-600">REPOSITORIES</span></h2>
            </motion.div>

            <div className="space-y-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-panel rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover-glow"
                >
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                      {project.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-[#8a2be2] hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-widest shrink-0 transition-colors">
                    View Repo <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </section>

        {/* Dual Section: Experience & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-24 border-t border-white/5">
          
          {/* Education */}
          <section id="education">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <GraduationCap className="text-[#00f0ff]" size={32} />
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">EDUCATION</h2>
            </motion.div>

            <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-12">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#030303] border-[4px] border-[#00f0ff] group-hover:bg-[#00f0ff] transition-colors" />
                  <h3 className="text-2xl font-bold mb-1">{item.degree}</h3>
                  <div className="text-[#00f0ff] text-sm font-bold tracking-widest uppercase mb-3">{item.duration}</div>
                  <p className="text-gray-300 font-medium mb-2 text-lg">{item.institution}</p>
                  <p className="text-gray-500">{item.details}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section id="achievements">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <Award className="text-[#8a2be2]" size={32} />
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">MILESTONES</h2>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 flex items-start gap-5 hover-glow group"
                >
                  <Award className="text-[#8a2be2] shrink-0 mt-1 group-hover:scale-110 transition-transform" size={28} />
                  <p className="text-gray-300 leading-relaxed font-medium">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative border-t border-white/5">
          <div className="glass-panel rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#ff007f]/10 opacity-50 pointer-events-none" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black mb-8 tracking-tighter relative z-10"
            >
              LET'S CREATE <br/> SOMETHING <span className="text-gradient-neon">EPIC.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-12 text-xl max-w-2xl mx-auto relative z-10"
            >
              Ready to take your digital presence to the next level? I'm always open to discussing new projects and creative ideas.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-6 flex-wrap relative z-10"
            >
              <a href="https://github.com/Pm3949" target="_blank" rel="noreferrer" className="px-8 py-5 rounded-2xl glass-panel hover:bg-white hover:text-black transition-all hover:-translate-y-2 flex items-center gap-3 font-bold uppercase tracking-wider text-sm">
                <Github size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/manavpatel07" target="_blank" rel="noreferrer" className="px-8 py-5 rounded-2xl glass-panel hover:bg-white hover:text-black transition-all hover:-translate-y-2 flex items-center gap-3 font-bold uppercase tracking-wider text-sm">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="mailto:manavpatel0767@gmail.com" className="px-8 py-5 rounded-2xl bg-[#00f0ff] text-black transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center gap-3 font-bold uppercase tracking-wider text-sm">
                <Mail size={20} /> Email Me
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-gray-600 text-sm font-semibold tracking-widest uppercase relative z-10">
        <p>© {new Date().getFullYear()} Patel Manav // Engineered with Passion</p>
      </footer>
    </div>
  );
}

export default App;
