const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Replace the Lucide-react import to include Menu and X
content = content.replace(
  /Star\n\} from 'lucide-react';/,
  "Star, Menu, X\n} from 'lucide-react';"
);

// Add state for mobile nav
content = content.replace(
  /const \[activeSection, setActiveSection\] = useState\('home'\);/,
  "const [activeSection, setActiveSection] = useState('home');\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);"
);

// Completely replace the nav tag
const oldNavRegex = /<nav className="fixed top-4.*?<\/nav>/s;
const newNav = \`
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
                  href={\`#\${id}\`} 
                  className={\`px-3.5 py-2 rounded-xl transition-all duration-200 text-[10px] sm:text-xs font-bold \${
                    isActive 
                      ? 'clay-btn-primary text-white scale-105' 
                      : 'text-slate-400 hover:text-indigo-400'
                  }\`}
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
                    href={\`#\${id}\`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={\`px-4 py-3 rounded-xl transition-all duration-200 text-xs font-bold tracking-wider uppercase \${
                      isActive 
                        ? 'clay-btn-primary text-white' 
                        : 'text-slate-400 hover:bg-white/5 hover:text-indigo-400'
                    }\`}
                  >
                    {id}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
\`;

content = content.replace(oldNavRegex, newNav.trim());

fs.writeFileSync('src/App.jsx', content, 'utf8');
