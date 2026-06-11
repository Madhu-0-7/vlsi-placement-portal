import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 1. In reality, you would call a Job Aggregator API here.
    // Example: const res = await fetch('https://jsearch.p.rapidapi.com/search?query=VLSI fresher in India', { headers: { ... } });
    // const apiData = await res.json();

    // 2. Format the incoming data to extract exact dates and times.
    const formattedJobs = [
        {
          id: "3",
          title: "AI/ML & Embedded Intern",
          company: "Big Wings LLC",
          source: "Job Board API",
          postedDate: new Date().toISOString().split('T')[0], // Automatically gets today's date
          postedTime: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }), // Local IST time
          applyLink: "#"
        }
    ];

    // 3. Return the data to your frontend
    return NextResponse.json(formattedJobs);
    
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}