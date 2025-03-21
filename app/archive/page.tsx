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
  title: 'Project Archive | BostonHacks',
  description: 'Browse projects from past years of the BostonHacks hackathon',
}



// Mock fetch functions - replace with real API calls in production
async function getAvailableYears(): Promise<number[]> {
  // In a real app, call your API
  // const res = await fetch(`${process.env.API_URL}/api/projects/years`, { next: { revalidate: 3600 } });
  // if (!res.ok) throw new Error('Failed to fetch available years');
  // return res.json();
  
  // Mock data for demonstration
  return [2025, 2024, 2023, 2022];
}

async function getProjects(year: number): Promise<Project[]> {
  // In a real app, call your API
  // const res = await fetch(`${process.env.API_URL}/api/projects?year=${year}`, { next: { revalidate: 3600 } });
  // if (!res.ok) throw new Error('Failed to fetch projects');
  // return res.json();
  
  // Mock data for demonstration with different projects per year
  const projectsByYear: Record<number, Project[]> = {
    2025: [
      {
        "id": "e08e1f35-e3c7-43f9-813b-73a3c486f049",
        "name": "EcoTrack",
        "description": "A real-time carbon footprint tracker that helps users monitor and reduce their environmental impact.",
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
          }
        ]
      },
      {
        "id": "c724ad56-9823-4fe1-8a6c-25f52d2b9875",
        "name": "MediSync",
        "description": "A healthcare platform connecting patients with doctors for remote monitoring and consultations.",
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
            "id": "d8f72be1-5a92-4c3a-b8f7-18ef7d920563"
          }
        ]
      }
    ],
    2024: [
      {
        "id": "5f6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d",
        "name": "SmartStudy",
        "description": "AI-powered study assistant that adapts to your learning style and helps you master difficult subjects.",
        "repositoryUrl": "https://github.com/smartstudy/app",
        "technologies": ["Python", "TensorFlow", "React", "FastAPI"],
        "year": 2024,
        "track": "Education",
        "demoUrl": "https://smartstudy.vercel.app",
        "devpostUrl": "https://devpost.com/smartstudy",
        "teamName": "Learning Wizards",
        "isWinner": true,
        "prizeWon": "Best Overall Project",
        "placement": 1,
        "members": [
          {
            "email": "mohammad.khan@example.com",
            "id": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
            "name": "Mohammad Khan"
          }
        ]
      },
      {
        "id": "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
        "name": "AquaGuard",
        "description": "IoT system for monitoring water quality and detecting contaminants in real-time.",
        "repositoryUrl": "https://github.com/aquaguard/main",
        "technologies": ["Arduino", "IoT", "React", "Node.js", "AWS"],
        "year": 2024,
        "track": "Environmental",
        "demoUrl": "https://aquaguard-demo.vercel.app",
        "devpostUrl": "https://devpost.com/aquaguard",
        "teamName": "Blue Planet",
        "isWinner": true,
        "prizeWon": "Most Innovative Hardware",
        "placement": 2,
        "members": [
          {
            "email": "lisa.wong@example.com",
            "id": "q7r8s9t0-u1v2-w3x4-y5z6-a7b8c9d0e1f2",
            "name": "Lisa Wong"
          }
        ]
      },
      {
        "id": "g3h4i5j6-k7l8-m9n0-p1q2-r3s4t5u6v7w8",
        "name": "FoodShare",
        "description": "Platform connecting restaurants with excess food to shelters and food banks to reduce waste.",
        "repositoryUrl": "https://github.com/foodshare/platform",
        "technologies": ["React Native", "Firebase", "Google Maps API"],
        "year": 2024,
        "track": "Social Good",
        "demoUrl": "https://foodshare.vercel.app",
        "devpostUrl": "https://devpost.com/foodshare",
        "teamName": "Zero Waste",
        "isWinner": false,
        "prizeWon": null,
        "placement": null,
        "members": [
          {
            "email": "carlos.rodriguez@example.com",
            "id": "x9y8z7a6-b5c4-d3e2-f1g0-h9i8j7k6l5m4",
            "name": "Carlos Rodriguez"
          }
        ]
      }
    ],
    2023: [
      {
        "id": "2d3e4f5g-6h7i-8j9k-0l1m-2n3o4p5q6r7s",
        "name": "SafeSpace",
        "description": "Mental health platform offering anonymous peer support and AI-guided therapeutic exercises.",
        "repositoryUrl": "https://github.com/safespace/web",
        "technologies": ["Vue.js", "Node.js", "MongoDB", "TensorFlow.js"],
        "year": 2023,
        "track": "Healthcare",
        "demoUrl": "https://safespace.vercel.app",
        "devpostUrl": "https://devpost.com/safespace",
        "teamName": "Mind Matters",
        "isWinner": true,
        "prizeWon": "Best Health Innovation",
        "placement": 1,
        "members": [
          {
            "email": "priya.patel@example.com",
            "id": "t8u7v6w5-x4y3-z2a1-b0c9-d8e7f6g5h4i3",
            "name": "Priya Patel"
          }
        ]
      },
      {
        "id": "j9k8l7m6-n5o4-p3q2-r1s0-t9u8v7w6x5y4",
        "name": "CodeBuddy",
        "description": "AI programming assistant that helps beginners learn to code with personalized guidance.",
        "repositoryUrl": "https://github.com/codebuddy/app",
        "technologies": ["Python", "OpenAI API", "React", "FastAPI"],
        "year": 2023,
        "track": "Education",
        "demoUrl": "https://codebuddy-demo.vercel.app",
        "devpostUrl": "https://devpost.com/codebuddy",
        "teamName": "Dev Mentors",
        "isWinner": true,
        "prizeWon": "Best Education Tool",
        "placement": 2,
        "members": [
          {
            "email": "ryan.lee@example.com",
            "id": "z3a4b5c6-d7e8-f9g0-h1i2-j3k4l5m6n7o8",
            "name": "Ryan Lee"
          }
        ]
      },
      {
        "id": "p0q9r8s7-t6u5-v4w3-x2y1-z0a9b8c7d6e5",
        "name": "CityMapper",
        "description": "Urban planning visualization tool that simulates traffic flow and pedestrian movement.",
        "repositoryUrl": "https://github.com/citymapper/app",
        "technologies": ["Three.js", "D3.js", "React", "Node.js"],
        "year": 2023,
        "track": "Urban Planning",
        "demoUrl": "https://citymapper-demo.vercel.app",
        "devpostUrl": "https://devpost.com/citymapper",
        "teamName": "Urban Designers",
        "isWinner": false,
        "prizeWon": null,
        "placement": null,
        "members": [
          {
            "email": "samantha.brown@example.com",
            "id": "f4g5h6i7-j8k9-l0m1-n2o3-p4q5r6s7t8u9",
            "name": "Samantha Brown"
          }
        ]
      }
    ],
    2022: [
      {
        "id": "v8w7x6y5-z4a3-b2c1-d0e9-f8g7h6i5j4k3",
        "name": "EasyTranslate",
        "description": "Real-time translation app that works offline and supports 50+ languages.",
        "repositoryUrl": "https://github.com/easytranslate/app",
        "technologies": ["Flutter", "TensorFlow Lite", "Firebase"],
        "year": 2022,
        "track": "Accessibility",
        "demoUrl": "https://easytranslate.vercel.app",
        "devpostUrl": "https://devpost.com/easytranslate",
        "teamName": "Global Connect",
        "isWinner": true,
        "prizeWon": "Best Mobile App",
        "placement": 1,
        "members": [
          {
            "email": "marcus.johnson@example.com",
            "id": "l2m3n4o5-p6q7-r8s9-t0u1-v2w3x4y5z6a7",
            "name": "Marcus Johnson"
          }
        ]
      },
      {
        "id": "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6",
        "name": "GreenRide",
        "description": "Carpooling platform that matches commuters based on routes and schedules.",
        "repositoryUrl": "https://github.com/greenride/platform",
        "technologies": ["React", "Node.js", "PostgreSQL", "Google Maps API"],
        "year": 2022,
        "track": "Transportation",
        "demoUrl": "https://greenride.vercel.app",
        "devpostUrl": "https://devpost.com/greenride",
        "teamName": "Eco Commuters",
        "isWinner": true,
        "prizeWon": "Best Environmental Impact",
        "placement": 2,
        "members": [
          {
            "email": "julia.zhang@example.com",
            "id": "r7s6t5u4-v3w2-x1y0-z9a8-b7c6d5e4f3g2",
            "name": "Julia Zhang"
          }
        ]
      }
    ]
  };
  
  return projectsByYear[year] || [];
}

// Group projects by track
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

export default async function ArchivePage({ 
  searchParams 
}: { 
  searchParams: { year?: string } 
}) {
  // Get the selected year from URL params or default to the latest year
  const availableYears = await getAvailableYears();

  const year = (await searchParams).year;

  const selectedYear = year
    ? parseInt(year) 
    : availableYears[0]; // Default to most recent year
  
  try {
    const projects = await getProjects(selectedYear);
    const groupedProjects = groupProjectsByTrack(projects);
    const winners = projects.filter(p => p.isWinner);
    
    return (
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-3">Project Archive</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            Browse projects from past years of the BostonHacks hackathon
          </p>
        </header>

        {/* Year Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {availableYears.map(year => (
              <Link
                key={year}
                href={`/archive?year=${year}`}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                  selectedYear === year
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {year}
              </Link>
            ))}
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-200">No projects found</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              There are no projects available for {selectedYear}.
            </p>
          </div>
        ) : (
          <>
            {/* Winner showcase */}
            {winners.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                  <span className="inline-block px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-lg mr-2">✨</span>
                  {selectedYear} Winners
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
                              🏆 {project.prizeWon}
                            </p>
                          </div>
                        )}
                        
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Team: {project.teamName}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: any) => (
                              <span key={tech} className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <Link 
                            href={`/projects/${project.id}?year=${selectedYear}`} 
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
              <h2 className="text-2xl font-bold mb-6">All {selectedYear} Projects</h2>
              
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
                                  🏆 Winner
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
                                href={`/projects/${project.id}?year=${selectedYear}`} 
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
          </>
        )}

        {/* Archive Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Browse Past Years</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {availableYears.map(year => (
              <Link
                key={year}
                href={`/archive?year=${year}`}
                className={`py-3 px-4 rounded-md text-center ${
                  selectedYear === year 
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800" 
                    : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                {year}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Failed to load project archive:', error);
    return notFound();
  }
}