import React from 'react';

// Define the data structure for your jobs
interface Job {
  id: string;
  title: string;
  company: string;
  source: string;
  postedDate: string;
  postedTime: string;
  applyLink: string;
}

// Function to fetch jobs from our own API route
async function getJobs(): Promise<Job[]> {
  return [
    {
      id: "1",
      title: "Physical Design Trainee",
      company: "Siliconus Technologies",
      source: "Indeed API",
      postedDate: "2026-06-10",
      postedTime: "14:30 IST",
      applyLink: "#"
    },
    {
      id: "2",
      title: "Embedded Systems Engineer - Fresher",
      company: "Tessolve Semiconductor",
      source: "Tessolve Careers Portal",
      postedDate: "2026-06-11",
      postedTime: "09:15 IST",
      applyLink: "#"
    }
  ];
}

export default async function JobPortal() {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-[#0B1120] text-slate-300 relative overflow-hidden p-6 md:p-12 font-sans selection:bg-cyan-500/30">
      
      {/* --- Animated Circuit Grid Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" 
           style={{
             backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             backgroundPosition: 'center center'
           }}>
      </div>
      
      {/* Glowing ambient background orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <header className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-sm font-mono mb-6 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            RVCE 2027 Batch
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-tight">
            Core VLSI & Embedded Placements
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Automated off-campus hiring radar. Real-time updates for RTL, Verification, Physical Design, and Firmware roles.
          </p>
        </header>

        {/* --- Job Cards Section --- */}
        <div className="grid gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="group relative bg-[#111827]/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              {/* Subtle top glowing line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                  {job.title}
                </h2>
                <h3 className="text-cyan-500/90 font-medium text-lg flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  {job.company}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-slate-400">
                  <span className="bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                    {job.source}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {job.postedDate} • {job.postedTime}
                  </span>
                </div>
              </div>
              
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-0 relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-cyan-600 font-mono rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 focus:ring-offset-[#0B1120] overflow-hidden"
              >
                <span className="relative z-10">INITIALIZE_APPLY</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}