const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Fix Nav
content = content.replace(
  /className="fixed top-4 left-1\/2 -translate-x-1\/2 w-\[92%\] max-w-5xl z-50 rounded-2xl bg-\[#151d30\]\/75 backdrop-blur-md border border-white\/5 clay-card-flat px-4 md:px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0"/,
  'className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] max-w-5xl z-50 rounded-2xl bg-[#151d30]/75 backdrop-blur-md border border-white/5 clay-card-flat px-3 md:px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0"'
);

content = content.replace(
  /className="flex gap-2 sm:gap-3 md:gap-5 text-\[10px\] sm:text-xs font-bold tracking-wider uppercase items-center overflow-x-auto scrollbar-hide shrink-0"/,
  'className="flex w-full md:w-auto justify-start md:justify-center gap-2 sm:gap-3 md:gap-5 text-[10px] sm:text-xs font-bold tracking-wider uppercase items-center overflow-x-auto scrollbar-hide pb-1 shrink-0"'
);

// Fix Hero
content = content.replace(
  /text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-\[1\.0\] text-slate-100 mb-8/,
  'text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] sm:leading-[1.0] text-slate-100 mb-8 break-words'
);

// Make sure body has overflow-x hidden
// It is in index.css, so we're good there.

// Ensure all grid gaps are smaller on mobile
// GITHUB: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -> gap-4 sm:gap-6
content = content.replace(
  /className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"/,
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"'
);

// OTHER REPOS: gap-5 -> gap-4 sm:gap-5
content = content.replace(
  /className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"/,
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"'
);

// PROJECTS & FULL STACK: gap-8 -> gap-4 md:gap-8
content = content.replace(
  /className="grid grid-cols-1 md:grid-cols-2 gap-8"/g,
  'className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"'
);

// ABOUT & SKILLS: gap-16 -> gap-8 lg:gap-16
content = content.replace(
  /className="grid grid-cols-1 lg:grid-cols-2 gap-16"/,
  'className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"'
);

// HERO buttons gap
content = content.replace(
  /className="flex flex-wrap gap-4"/,
  'className="flex flex-wrap gap-3 sm:gap-4"'
);

fs.writeFileSync('src/App.jsx', content, 'utf8');
