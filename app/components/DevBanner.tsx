'use client';

import { useState, useEffect } from 'react';

const DevBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const dismissed = localStorage.getItem('devBannerDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);
  
  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <div className="bg-white p-1 rounded-full">
              <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-white text-sm font-medium">
            <span className="font-bold">🚧 Under Construction:</span> We&apos;re building this platform. Many parts are not functional or have fake data.
          </p>
        </div>
        <button 
          onClick={() => {
            setIsVisible(false);
            localStorage.setItem('devBannerDismissed', 'true');
          }}
          className="ml-4 flex-shrink-0 text-white hover:bg-amber-600 rounded-full p-1 transition-colors"
          aria-label="Dismiss"
        >
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DevBanner;
