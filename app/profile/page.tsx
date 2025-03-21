"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../providers";
import { User } from "@/types/User";
import Link from "next/link";
import Image from "next/image";

const ProfilePage = () => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState({} as User);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/user?id=${user?.id}`);
        if (!response.ok) throw new Error('Failed to fetch user profile');
        
        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      getUserInfo();
    }
  }, [user]);

  const editProfile = () => {
    // redirect to the edit profile page
    // window.location.href = "/profile/edit";
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg max-w-md">
          <svg className="h-12 w-12 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-10v4L9 9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Not Authenticated</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You need to be signed in to view your profile. Please sign in to continue.
          </p>
          <Link 
            href="/login" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-56 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        {/* Header/Cover Photo */}
        <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
          <div className="absolute inset-0 bg-opacity-30 bg-black flex items-end">
            <div className="p-6 pt-16 w-full">
              <h1 className="text-white text-2xl font-bold">
                {userProfile?.firstName} {userProfile?.lastName}
              </h1>
              <p className="text-blue-100">{userProfile?.role || "Hackathon Participant"}</p>
            </div>
          </div>
        </div>

        {/* Profile content */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-64 p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center md:items-start">
              {/* Profile picture */}
              <div className="relative mb-6 md:mb-8 md:-mt-16">
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 border-4 border-white dark:border-gray-800 shadow-md">
                  {userProfile?.image ? (
                    <Image
                      src={userProfile.image}
                      alt="Profile"
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-4xl font-bold">
                      {userProfile?.firstName?.[0] || userProfile?.email?.[0] || "?"}
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <nav className="w-full mb-8">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === "profile"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile Information
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("projects")}
                      className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === "projects"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      My Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("submissions")}
                      className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === "submissions"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      My Submissions
                    </button>
                  </li>
                  {userProfile?.role === "Judge" && (
                    <li>
                      <button
                        onClick={() => setActiveTab("judging")}
                        className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === "judging"
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        Judging Panel
                      </button>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={() => setActiveTab("settings")}
                      className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === "settings"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Settings
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6">
            {activeTab === "profile" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Profile Information</h2>
                  <button
                    onClick={editProfile}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit Profile
                  </button>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Full Name</label>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {userProfile?.firstName} {userProfile?.lastName || "-"}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email Address</label>
                      <p className="text-gray-900 dark:text-white font-medium">{userProfile?.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Role</label>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {userProfile?.role || "Participant"}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Account Created</label>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : "-"}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</label>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {userProfile?.phone || "-"}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Account Status</label>
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-gray-900 dark:text-white font-medium">Active</p>
                      </div>
                    </div>
                  </div>

                  {userProfile?.bio && (
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Bio</label>
                      <p className="text-gray-900 dark:text-white">{userProfile.bio}</p>
                    </div>
                  )}
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-3">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {userProfile?.skills?.length ? (
                      userProfile.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400 text-sm">No skills added yet</p>
                    )}
                  </div>
                </div>

                {/* Past participation */}
                <div>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-3">Past Hackathons</h3>
                  {userProfile?.pastEvents?.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userProfile.pastEvents.map((event, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 dark:text-white">{event.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                          {event.role && <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Role: {event.role}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">No past hackathons</p>
                  )}
                </div>
              </>
            )}

            {activeTab === "projects" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">My Projects</h2>
                  <Link 
                    href="/projects/create"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Project
                  </Link>
                </div>

                {userProfile?.projects?.length ? (
                  <div className="grid grid-cols-1 gap-4">
                    {userProfile.projects.map((project, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs rounded">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.technologies?.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Link 
                            href={`/projects/${project.id}`}
                            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-200">No projects yet</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new project.</p>
                    <div className="mt-6">
                      <Link
                        href="/projects/create"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        New Project
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "submissions" && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">My Submissions</h2>
                
                {userProfile?.submissions?.length ? (
                  <div className="space-y-4">
                    {userProfile.submissions.map((submission, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-gray-900 dark:text-white">{submission.title}</h3>
                          <span className={`px-2 py-1 text-xs rounded ${
                            submission.status === 'Approved' ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300' : 
                            submission.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300' :
                            'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300'
                          }`}>
                            {submission.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          Submitted on {new Date(submission.date).toLocaleDateString()}
                        </p>
                        <div className="mt-4 flex justify-end">
                          <Link 
                            href={`/submissions/${submission.id}`}
                            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-200">No submissions</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      You haven&apos;t made any submissions yet.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "judging" && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Judging Panel</h2>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-blue-800 dark:text-blue-200 font-medium">Judge Dashboard</p>
                      <p className="text-blue-600 dark:text-blue-300 text-sm mt-1">
                        As a judge, you have access to review and score projects submitted to the hackathon.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link 
                    href="/judging/dashboard" 
                    className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-4">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Projects To Judge</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          Review your assigned projects
                        </p>
                      </div>
                      <svg className="h-5 w-5 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>

                  <Link 
                    href="/judging/completed" 
                    className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center mr-4">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Completed Reviews</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          See your submitted evaluations
                        </p>
                      </div>
                      <svg className="h-5 w-5 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>

                  <Link 
                    href="/judging/ratings" 
                    className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">Analytics Dashboard</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          View judging statistics and metrics
                        </p>
                      </div>
                      <svg className="h-5 w-5 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Profile Settings</h3>
                    <div className="space-y-4">
                      <Link 
                        href="/profile/edit" 
                        className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">Edit Personal Information</span>
                        </div>
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      
                      <Link 
                        href="/profile/password" 
                        className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">Change Password</span>
                        </div>
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>

                      <Link 
                        href="/profile/notifications" 
                        className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">Notification Preferences</span>
                        </div>
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-md font-semibold text-red-600 dark:text-red-400 mb-4">Danger Zone</h3>
                    <div className="space-y-4">
                      <button 
                        className="w-full text-left flex justify-between items-center hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-red-500 dark:text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          <span className="text-red-600 dark:text-red-400">Delete Account</span>
                        </div>
                        <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;