import JudgeStatus from '@/app/components/judging/JudgeStatus'
import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image';
import { Judge } from '@/types/Judge';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Judging Panel | Judges",
  description: "Manage and view judges for the event",
}

// interface Judge {
//   id: string;
//   name: string;
//   email?: string;
//   organization?: string;
//   avatar?: string;
//   judgedProjects?: number;
// }

async function getJudges(): Promise<Judge[]> {
  // In a real app, fetch from API:
  // const response = await fetch('/api/judging/judges', { next: { revalidate: 300 } });
  // return response.json();

  let judges: Judge[];

  try {
    // Fetch judges from the backend API. Not using Router Handlers since this is a server component
    const response = await fetch(`${process.env.API_URL}/judging/judges`, 
      { next: { revalidate: 300 },
      headers: {
        // Pass the access token from cookies to authenticate the request
        "Cookie": `access_token=${(await cookies()).get('access_token')?.value || ""}`
      }
    });
    if (response.ok) {
      judges = await response.json();
      // console.log(judges);
    } else {
      judges = [] as Judge[];
      console.error("Failed to fetch judges");
    }


    return judges;

  } catch(err) {
    console.log(err);
    return [] as Judge[];
  }
  

}

export default async function JudgesPage() {
  const judges = await getJudges();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-tertiary pb-5 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-bold leading-tight text-text-primary">
              Judges Panel
            </h1>
            <p className="mt-2 text-lg text-text-primary">
              This year&apos;s judging panel for the event
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
      <div className="bg-secondary shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-tertiary">
          <h2 className="text-2xl font-bold leading-tight text-text-primary">
            Current Judges
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-text-secondary">
            {judges?.length} judge{judges?.length !== 1 ? 's' : ''} registered for this event
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {judges?.map((judge) => {
            const user = judge?.user || {};
            return (
              <div 
                key={user.id}
                className="bg-secondary rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  {user.avatar ? (
                    <Image 
                      src={user.avatar} 
                      alt={user.firstName}
                      width={150}
                      height={150}
                      className="h-12 w-12 rounded-full object-cover" 
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-text-primary">{user.firstName} {user.lastName}</h3>
                    {/* {judge.organization && (
                      <p className="text-sm text-text-secondary">{judge.organization}</p>
                    )} */}
                  </div>
                </div>
                
                <div className="mt-5 border-t border-tertiary pt-4">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-text-secondarysecondary">Email</dt>
                      <dd className="mt-1 text-sm text-text-secondary truncate">{user.email || 'N/A'}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-text-secondary">Projects Judged</dt>
                      {/* <dd className="mt-1 text-sm text-text-secondary">{user.judgedProjects || 0}</dd> */}
                    </div>
                  </dl>
                </div>

                <div className="mt-4 flex justify-end">
                  <button 
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-tertiary shadow-sm text-xs font-medium rounded text-text-secondary bg-primary hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            )
            
          })}
        </div>

        {judges?.length === 0 && (
          <div className="text-center py-10">
            <svg
              className="mx-auto h-12 w-12 text-text-secondary"
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
            <h3 className="mt-2 text-sm font-medium text-text-secondary">No judges found</h3>
            <p className="mt-1 text-sm text-text-secondary">
              There are no judges assigned to this event yet.
            </p>
          </div>
        )}
      </div>

      {/* Statistics Section */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-primary overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-text-secondary truncate">
              Total Judges
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-text-primary">
              {judges?.length}
            </dd>
          </div>
        </div>

        <div className="bg-primary overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-text-secondary truncate">
              Projects Assigned
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-text-primary">
              42
            </dd>
          </div>
        </div>

        <div className="bg-primary overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-text-secondary truncate">
              Completed Evaluations
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-text-primary">
              {/* {judges?.reduce((total, judge) => total + (judge.judgedProjects || 0), 0)} */}
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}