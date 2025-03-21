import JudgeStatus from '@/app/components/judging/JudgeStatus'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Judging Panel | Judges",
  description: "Manage and view judges for the event",
}

interface Judge {
  id: string;
  name: string;
  email?: string;
  organization?: string;
  avatar?: string;
  judgedProjects?: number;
}

async function getJudges(): Promise<Judge[]> {
  // In a real app, fetch from API:
  // const response = await fetch('/api/judging/judges', { next: { revalidate: 300 } });
  // return response.json();
  
  // Mock data with more details
  return [
    { 
      id: "1", 
      name: "Dr. Sarah Johnson", 
      organization: "MIT",
      email: "sarah.johnson@mit.edu",
      judgedProjects: 12,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg" 
    },
    { 
      id: "2", 
      name: "Prof. Michael Chen", 
      organization: "Stanford University",
      email: "michael.chen@stanford.edu",
      judgedProjects: 8,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg" 
    },
    { 
      id: "3", 
      name: "Amanda Rodriguez", 
      organization: "Google", 
      email: "amanda.r@google.com",
      judgedProjects: 15,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    { 
      id: "4", 
      name: "Jamal Wilson", 
      organization: "Harvard University",
      email: "j.wilson@harvard.edu", 
      judgedProjects: 7,
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];
}

export default async function JudgesPage() {
  const judges = await getJudges();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-5 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white">
              Judges Panel
            </h1>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              This year's judging panel for the event
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex-shrink-0">
            {/* <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Export Judge Data
            </button> */}
          </div>
        </div>
      </div>

      {/* Judge Status Component */}
      <div className="mb-10">
        <JudgeStatus />
      </div>

      {/* Judges List Section */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            Current Judges
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            {judges.length} judge{judges.length !== 1 ? 's' : ''} registered for this event
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {judges.map((judge) => (
            <div 
              key={judge.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  {judge.avatar ? (
                    <img 
                      src={judge.avatar} 
                      alt={judge.name}
                      className="h-12 w-12 rounded-full object-cover" 
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{judge.name}</h3>
                    {judge.organization && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">{judge.organization}</p>
                    )}
                  </div>
                </div>
                
                <div className="mt-5 border-t border-gray-200 dark:border-gray-600 pt-4">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300 truncate">{judge.email || 'N/A'}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Projects Judged</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-gray-300">{judge.judgedProjects || 0}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-4 flex justify-end">
                  <button 
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-xs font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {judges.length === 0 && (
          <div className="text-center py-10">
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
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-200">No judges found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              There are no judges assigned to this event yet.
            </p>
          </div>
        )}
      </div>

      {/* Statistics Section */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              Total Judges
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              {judges.length}
            </dd>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              Projects Assigned
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              42
            </dd>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              Completed Evaluations
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              {judges.reduce((total, judge) => total + (judge.judgedProjects || 0), 0)}
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}