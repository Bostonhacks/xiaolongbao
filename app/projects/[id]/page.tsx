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

// Generate metadata for the project page
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  try {
    const id = (await params).id;
    const project = await getProject(id);
    
    return {
      title: `${project.name} | Xiaolongbao Projects`,
      description: project.description.substring(0, 160),
      openGraph: {
        title: project.name,
        description: project.description.substring(0, 160),
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Failed to load project:', error);
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }
}

// Mock fetch function - replace with real API call
async function getProject(id: string): Promise<Project> {
  // In a real app, call an API endpoint
  // const res = await fetch(`${process.env.API_URL}/api/projects/${id}`, { cache: 'no-store' });
  // if (!res.ok) throw new Error('Failed to fetch project');
  // return res.json();
  
  // Mock data for demonstration
  const projects = [
    {
      "id": "e08e1f35-e3c7-43f9-813b-73a3c486f049",
      "name": "EcoTrack",
      "description": "A real-time carbon footprint tracker that helps users monitor and reduce their environmental impact through actionable insights and gamification. EcoTrack uses machine learning to analyze user behavior and suggest personalized recommendations for sustainable living. The app includes features like transportation emissions tracking, food carbon footprint calculation, energy usage monitoring, and community challenges to engage users in environmental conservation efforts.",
      "repositoryUrl": "https://github.com/ecotrack/main",
      "technologies": ["React Native", "Node.js", "MongoDB", "TensorFlow Lite", "Google Maps API"],
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
      "description": "A healthcare platform connecting patients with doctors for remote monitoring and consultations, with integrated medical record management. MediSync bridges the gap between patients and healthcare providers, especially in underserved areas with limited access to medical facilities. The platform includes secure video consultations, medical history storage, prescription management, appointment scheduling, and integration with wearable health devices for real-time health monitoring.",
      "repositoryUrl": "https://github.com/medisync/platform",
      "technologies": ["React", "Express", "PostgreSQL", "WebRTC", "AWS", "HIPAA Compliance", "HL7 FHIR"],
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
    }
  ];
  
  const project = projects.find(p => p.id === id);
  if (!project) throw new Error('Project not found');
  
  return project;
}

export default async function ProjectDetailPage({ params }: { params: { id: string }}) {
  try {
    const id = (await params).id;

    const project = await getProject(id);
    
    return (
      <div className="container mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link 
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm"
          >
            ← Back to all projects
          </Link>
        </nav>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h1>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <span className="mr-3">Team: {project.teamName}</span>
                  {project.track && (
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded">
                      {project.track}
                    </span>
                  )}
                </div>
              </div>
              
              {project.isWinner && (
                <div className="mt-4 md:mt-0 bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 rounded-lg p-3 flex items-center">
                  <span className="text-xl mr-2">🏆</span>
                  <div>
                    <p className="text-amber-800 dark:text-amber-300 font-medium">Winner</p>
                    {project.prizeWon && (
                      <p className="text-sm text-amber-700 dark:text-amber-400">{project.prizeWon}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.repositoryUrl && (
                  <a 
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="mr-3 text-gray-500 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"></path></svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Repository</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[200px]">{project.repositoryUrl}</p>
                    </div>
                  </a>
                )}
                
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="mr-3 text-gray-500 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.364 13.121L9.879 8.636 8.464 10.05 12.93 14.514l1.414 1.414 4.95-4.95-1.414-1.414-3.536 3.536z"/><path d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"/></svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Live Demo</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[200px]">{project.demoUrl}</p>
                    </div>
                  </a>
                )}
                
                {project.devpostUrl && (
                  <a 
                    href={project.devpostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="mr-3 text-gray-500 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 16.526h-1.58V5.864h1.58v12.272zm.198-16.88L2.542 12l5.251 10.736h8.416L21.458 12 16.207 1.256H7.793zm8.44 16.88h-1.586c-1.187-1.444-1.737-2.99-1.737-2.99h-.013s-.565 1.559-1.8 2.99h-1.47l2.287-3.53c-1.102-.423-1.865-1.604-1.865-3.424 0-2.966 2.03-4.435 3.775-4.435h2.416v11.389h-.007zm-.324-9.316h-.72c-.995 0-1.698.847-1.698 2.248 0 1.395.703 2.335 1.698 2.335h.72V8.82z"/></svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Devpost</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[200px]">{project.devpostUrl}</p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Team Members */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Team Members</h2>
              <ul className="space-y-3">
                {project.members.map(member => (
                  <li key={member.id} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    <p className="font-medium text-gray-800 dark:text-gray-200">{member.name || 'Anonymous Member'}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.email}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Failed to load project:', error);
    return notFound();
  }
}