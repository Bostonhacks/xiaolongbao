import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Project as ProjectBase} from '@/types/Project'

interface Project extends Omit<ProjectBase, 'members'> {
    members: {
        email: string;
        id: string;
        name: string;
    }[];
}

export const metadata: Metadata = {
  title: 'Projects | BostonHacks Current Year',
  description: 'Browse all projects from the BostonHacks hackathon 2025',
}



// Mock fetch function - replace with real API call
async function getProjects(year: number = 2025): Promise<Project[]> {
  // In a real app, call an API endpoint
  // const res = await fetch(`${process.env.API_URL}/api/projects?year=${year}`, { cache: 'no-store' });
  // if (!res.ok) throw new Error('Failed to fetch projects');
  // return res.json();
  console.log(year);
  
  
  // Mock data for demonstration
  return [
    {
      "id": "e08e1f35-e3c7-43f9-813b-73a3c486f049",
      "name": "EcoTrack",
      "description": "A real-time carbon footprint tracker that helps users monitor and reduce their environmental impact through actionable insights and gamification.",
      "repositoryUrl": "https://github.com/ecotrack/main",
      "technologies": ["React Native", "Node.js", "MongoDB"],
      "year": 2025,
      "track": "Sustainability",
      "demoUrl": "https://ecotrack-demo.vercel.app",
      "devpostUrl": "https://devpost.com/ecotrack",
      "teamName": "Green Innovators",
      "isWinner": true,
      "prizeWon": "Best Sustainability Solution",
      "placement": 1,
      "members": [
        {
          "email": "jane.doe@example.com",
          "id": "a5adcc93-5a9d-4108-b7a5-236aeaa87e68",
          "name": "Jane Doe"
        },
        {
          "email": "john.smith@example.com",
          "id": "b7ceff22-8e54-43a2-ba4e-12efad536712",
          "name": "John Smith"
        }
      ]
    },
    {
      "id": "c724ad56-9823-4fe1-8a6c-25f52d2b9875",
      "name": "MediSync",
      "description": "A healthcare platform connecting patients with doctors for remote monitoring and consultations, with integrated medical record management.",
      "repositoryUrl": "https://github.com/medisync/platform",
      "technologies": ["React", "Express", "PostgreSQL", "WebRTC"],
      "year": 2025,
      "track": "Healthcare",
      "demoUrl": "https://medisync.vercel.app",
      "devpostUrl": "https://devpost.com/medisync",
      "teamName": "Health Innovators",
      "isWinner": true,
      "prizeWon": "Best Healthcare Solution",
      "placement": 2,
      "members": [
        {
          "email": "alex.johnson@example.com",
          "id": "d8f72be1-5a92-4c3a-b8f7-18ef7d920563",
          "name": "Alex Johnson"
        }
      ]
    },
    {
      "id": "9a1b23c4-5d6e-7f8g-9h0i-1j2k3l4m5n6o",
      "name": "UrbanFarmer",
      "description": "A smart gardening solution that uses IoT sensors to monitor plant health and automate watering systems for urban farming environments.",
      "repositoryUrl": "https://github.com/urbanfarmer/app",
      "technologies": ["IoT", "Flutter", "Firebase", "Arduino"],
      "year": 2025,
      "track": "Smart Cities",
      "demoUrl": "https://urbanfarmer.vercel.app",
      "devpostUrl": "",
      "teamName": "Green Thumbs",
      "isWinner": false,
      "prizeWon": "",
      "placement": 1,
      "members": [
        {
          "email": "maria.garcia@example.com",
          "id": "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
          "name": "Maria Garcia"
        },
        {
          "email": "david.lee@example.com",
          "id": "u1v2w3x4-y5z6-a7b8-c9d0-e1f2g3h4i5j6",
          "name": "David Lee"
        }
      ]
    },
    {
      "id": "q9w8e7r6-t5y4-u3i2-o1p0-a9s8d7f6g5h4",
      "name": "LearnAI",
      "description": "An adaptive learning platform that uses AI to personalize educational content based on individual learning styles and progress.",
      "repositoryUrl": "https://github.com/learnai-edu/platform",
      "technologies": ["Python", "TensorFlow", "Next.js", "AWS"],
      "year": 2025,
      "track": "Education",
      "demoUrl": "https://learnai-edu.vercel.app",
      "devpostUrl": "https://devpost.com/learnai",
      "teamName": "EdTech Pioneers",
      "isWinner": false,
      "prizeWon": "",
      "placement": 2,
      "members": [
        {
          "email": "sarah.patel@example.com",
          "id": "j5k6l7m8-n9o0-p1q2-r3s4-t5u6v7w8x9y0",
          "name": "Sarah Patel"
        },
        {
          "email": "michael.wong@example.com",
          "id": "z1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
          "name": "Michael Wong"
        }
      ]
    },
    {
      "id": "m1n2b3v4-c5x6-z7a8-s9d0-f1g2h3j4k5l6",
      "name": "SafeZone",
      "description": "A community safety app that provides real-time alerts about incidents in your area and connects users with emergency services.",
      "repositoryUrl": "https://github.com/safezone/mobile",
      "technologies": ["React Native", "Firebase", "Google Maps API"],
      "year": 2025,
      "track": "Public Safety",
      "demoUrl": "null",
      "devpostUrl": "https://devpost.com/safezone",
      "teamName": "Safety First",
      "isWinner": true,
      "prizeWon": "People's Choice Award",
      "placement": 3,
      "members": [
        {
          "email": "burnerdx0@gmail.com",
          "id": "p7q8r9s0-t1u2-v3w4-x5y6-z7a8b9c0d1e2",
          "name": "Jamie Nguyen"
        },
        {
          "email": "chris.taylor@example.com",
          "id": "f3g4h5j6-k7l8-m9n0-p1q2-r3s4t5u6v7w8",
          "name": "Chris Taylor"
        }
      ]
    }
  ];
}

// Function to group projects by track
function groupProjectsByTrack(projects: Project[]): Record<string, Project[]> {
  const grouped: Record<string, Project[]> = { "All Projects": projects };
  
  // Extract unique tracks
  const tracks = [...new Set(projects.map(p => p.track || "Unspecified Track"))];
  
  // Group projects by track
  tracks.forEach(track => {
    grouped[track] = projects.filter(p => (p.track || "Unspecified Track") === track);
  });
  
  return grouped;
}

export default async function ProjectsPage() {
  const year = 2025; // Current year
  
  try {
    const projects = await getProjects(year);
    const groupedProjects = groupProjectsByTrack(projects);
    const winners = projects.filter(p => p.isWinner);
    
    return (
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-3">BostonHacks {year} Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            Explore the innovative projects created during our hackathon. Filter by track or search for specific technologies.
          </p>
        </header>

        {/* Winner showcase */}
        {winners.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="inline-block px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-lg mr-2">✨</span>
              Winning Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {winners.map(project => (
                <div 
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                      {project.placement && (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full font-bold text-sm">
                          #{project.placement}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    {project.prizeWon && (
                      <div className="mb-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800 rounded-md px-3 py-2">
                        <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                          {'\u{1F3C6}'} {project.prizeWon}
                        </p>
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Team: {project.teamName}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Link 
                        href={`/projects/${project.id}`} 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All projects by track */}
        <section>
          <h2 className="text-2xl font-bold mb-6">All Projects</h2>
          
          <div className="mb-8">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {Object.keys(groupedProjects).map(track => (
                  <a
                    key={track}
                    href={`#${track.toLowerCase().replace(/\s+/g, '-')}`}
                    className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600"
                  >
                    {track}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {Object.entries(groupedProjects).map(([track, trackProjects]) => (
            track !== "All Projects" && (
              <div key={track} id={track.toLowerCase().replace(/\s+/g, '-')} className="mb-10">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  {track} <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">({trackProjects.length} projects)</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trackProjects.map(project => (
                    <div 
                      key={project.id}
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                        
                        {project.isWinner && (
                          <div className="mb-3">
                            <span className="inline-block bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 text-xs px-2 py-1 rounded-md font-medium">
                              {'\u{1F3C6}'} Winner
                            </span>
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Team: {project.teamName}</p>
                          <Link 
                            href={`/projects/${project.id}`} 
                            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </section>
      </div>
    )
  } catch (error) {
    console.error('Failed to load projects:', error);
    return notFound();
  }
}