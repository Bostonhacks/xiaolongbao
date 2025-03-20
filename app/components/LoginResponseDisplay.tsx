'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginResponseDisplay({ 
    success, 
    message, 
    user 
}: { 
    success: boolean; 
    message: string; 
    user: any; 
}) {

    const router = useRouter();

    useEffect(() => {
        // Redirect to dashboard after successful login with a delay
        if (success && user) {
            const timer = setTimeout(() => {
                // refresh the page and push to the dashboard
                window.location.reload();
                router.push('/');
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [success, user, router]);

    return (
        <div className="p-6 max-w-lg mx-auto my-8 bg-white rounded-lg shadow-md">
        {success !== null && (
            <div className={`p-4 mb-4 rounded-md ${success ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}>
            <div className="flex items-center">
                {success ? (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                ) : (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                </svg>
                )}
                <span className="font-medium">{success ? 'Success!' : 'Error:'}</span>
            </div>
            <p className="mt-2">{message}</p>
            {success && <p className="mt-2 text-sm">Redirecting to dashboard...</p>}
            </div>
        )}
        
        {user && (
            <div className="p-4 border rounded-md bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">User Information</h2>
            <pre className="p-3 bg-gray-100 rounded overflow-x-auto text-sm">
                {JSON.stringify(user, null, 2)}
            </pre>
            </div>
        )}
        </div>
    );
}