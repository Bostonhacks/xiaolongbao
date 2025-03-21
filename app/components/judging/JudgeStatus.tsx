"use client"
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/app/providers'; // Adjust path as needed

const JudgeStatus = () => {
    const { user, refreshUser } = useAuth();
    
    const [code, setCode] = useState("");
    const [isJudge, setIsJudge] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState({} as { type: 'error' | 'success' | null, text: string });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Check if user is a judge when component mounts
    useEffect(() => {
        async function checkJudgeStatus() {
            setIsLoading(true);
            try {
                // call API to check if user is a judge

                setIsJudge(Math.random() > 0.5);
                
            } catch (error) {
                console.error("Error checking judge status:", error);
            } finally {
                setIsLoading(false);
            }
        }
        
        if (user) {
            checkJudgeStatus();
        } else {
            setIsLoading(false);
        }
    }, [user]);

    const submitJudgeCode = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!code.trim()) {
            setMessage({
                type: 'error',
                text: 'Please enter a judge code.'
            });
            return;
        }

        try {
            setMessage({ type: null, text: '' });
            setIsSubmitting(true);
            
            // Call API to connect user to judge
            // const response = await fetch('/api/judging/judge', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ code: code }),
            //     credentials: 'include'
            // });

            // const data = await response.json();

            // if (!response.ok) {
            //     throw new Error(data.message || "Failed to validate judge code");
            // }

            // random for now
            if (Math.random() > 0.5) {
                throw new Error("Failed to validate judge code");
            }

            const data = { message: "Successfully connected as judge" };

            setMessage({ type: 'success', text: data.message || "Successfully connected as judge" });
            setIsJudge(true);
            setCode("");
            
            // Refresh user data to update roles if needed
            await refreshUser();

        } catch(err) {
            console.error(err);
            setMessage({
                type: 'error',
                text: err instanceof Error ? err.message : JSON.stringify(err)
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    // // Remove judge status
    // const removeJudgeStatus = async () => {
    //     try {
    //         setIsSubmitting(true);
            
    //         const response = await fetch('/api/judging/judge', {
    //             method: "DELETE",
    //             credentials: 'include'
    //         });

    //         if (response.ok) {
    //             setIsJudge(false);
    //             setMessage({ type: 'success', text: "Judge status removed successfully" });
                
    //             // Refresh user data
    //             await refreshUser();
    //         } else {
    //             const data = await response.json();
    //             throw new Error(data.message || "Failed to remove judge status");
    //         }
    //     } catch (error) {
    //         console.error("Error removing judge status:", error);
    //         setMessage({
    //             type: 'error',
    //             text: error instanceof Error ? error.message : "Failed to remove judge status"
    //         });
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    return (
        <div className="mt-10 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Judge Access Management
                </h2>
            </div>

            <div className="p-6">
                <div className="flex flex-col md:flex-row justify-around items-start gap-8">
                    {/* Judge Code Input Form - Show only if not a judge */}
                    {!isJudge && (
                        <form onSubmit={submitJudgeCode} className="flex flex-col items-center space-y-4 w-full md:w-1/2">
                            <div className="text-center">
                                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Are you a judge and have a code?</p>
                                <p className="text-gray-600 dark:text-gray-400">Enter it here:</p>
                            </div>
                            
                            <div className="w-full max-w-xs">
                                <input 
                                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:outline-none transition-colors duration-200" 
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="Enter judge code"
                                    disabled={isSubmitting}
                                />
                                
                                {message.type && (
                                    <p className={`mt-2 text-sm font-medium ${
                                        message.type === 'error' 
                                            ? 'text-red-600 dark:text-red-400' 
                                            : 'text-green-600 dark:text-green-400'
                                    }`}>
                                        {message.text}
                                    </p>
                                )}
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full max-w-xs py-2 px-4 rounded-md text-white font-medium transition-all duration-200 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                {isSubmitting ? 'Validating...' : 'Validate Code'}
                            </button>
                        </form>
                    )}
                    
                    {/* Judge Status Display */}
                    <div className="w-full md:w-1/2 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                        <h2 className="text-2xl text-center mb-6 text-gray-900 dark:text-white font-semibold">Judge Status</h2>
                        
                        {isLoading ? (
                            <div className="flex justify-center items-center py-8">
                                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                                <span className="ml-3 text-gray-600 dark:text-gray-300">Checking status...</span>
                            </div>
                        ) : isJudge ? (
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-green-100 dark:bg-green-800">
                                    <span className="text-2xl text-green-600 dark:text-green-300">✓</span>
                                </div>
                                <p className="text-lg font-medium text-green-600 dark:text-green-400 mb-4">You are currently a judge</p>
                                <p className="text-gray-700 dark:text-gray-300 mb-6">You have access to judge projects at this event.</p>
                                
                                <a 
                                    href="/judging/dashboard"
                                    className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition-colors duration-200 font-medium"
                                >
                                    Go to Judging Dashboard
                                </a>
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-red-100 dark:bg-red-900">
                                    <span className="text-2xl text-red-600 dark:text-red-300">✗</span>
                                </div>
                                <p className="text-lg font-medium text-red-600 dark:text-red-400 mb-3">Not currently a judge</p>
                                <p className="text-gray-700 dark:text-gray-300">Enter a valid judge code to gain judging permissions.</p>
                                
                                {!user && (
                                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-md">
                                        <p className="text-yellow-800 dark:text-yellow-300">
                                            Please sign in to verify or request judge access.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JudgeStatus