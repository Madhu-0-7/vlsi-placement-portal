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
  // In production, you would fetch this using an absolute URL (e.g., https://yourdomain.com/api/jobs)
  // For this template, we are simulating the database response.
  return [
    {
      id: "1",
      title: "Physical Design Trainee",
      company: "Siliconus Technologies",
      source: "Indeed API",
      postedDate: "2026-06-10",
      postedTime: "14:30 IST",
      applyLink: "https://example.com/apply/1"
    },
    {
      id: "2",
      title: "Embedded Systems Engineer - Fresher",
      company: "Tessolve Semiconductor",
      source: "Tessolve Careers Portal",
      postedDate: "2026-06-11",
      postedTime: "09:15 IST",
      applyLink: "https://www.tessolve.com/careers/"
    }
  ];
}

export default async function JobPortal() {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Core VLSI & Embedded Placements
          </h1>
          <p className="text-gray-600">
            Real-time off-campus hiring updates for the batch.
          </p>
        </header>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-1">{job.title}</h2>
                <h3 className="text-gray-800 font-medium text-lg">{job.company}</h3>
                
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    Source: {job.source}
                  </span>
                  <span>
                    🗓️ {job.postedDate} at {job.postedTime}
                  </span>
                </div>
              </div>
              
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}