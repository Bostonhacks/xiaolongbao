'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoogleLoginButton } from './GoogleLoginButton';
import { useAuth } from '../providers';

type NavItem = {
  label: string;
  path: string;
};

interface MobileMenuButtonProps {
  navItems: NavItem[];
}

export const MobileMenuButton = ({ navItems }: MobileMenuButtonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { user } = useAuth();

  // Prevent scrolling when menu is open
  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }
    
  //   return () => {
  //     document.body.style.overflow = '';
  //   };
  // }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button suppressHydrationWarning
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-transform duration-200 hover:scale-105 active:scale-95"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        {/* Properly centered hamburger icon with CSS transitions */}
        <div className="relative w-6 h-5 flex items-center justify-center">
          <span 
            className={`absolute h-0.5 w-6 bg-current rounded transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span 
            className={`absolute h-0.5 w-6 bg-current rounded transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`absolute h-0.5 w-6 bg-current rounded transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </div>
      </button>

      {/* Mobile Navigation Menu with transitions */}
      <div 
        className={`absolute left-0 right-0 top-16 md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 z-20' 
            : 'opacity-0 -translate-y-10 pointer-events-none -z-10'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700 shadow-md">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300 ease-in-out ${
                pathname === item.path
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              } ${isMenuOpen ? `translate-x-0 opacity-100` : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div 
            className={`transform transition-all duration-100 ease-in-out ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} 
            style={{ transitionDelay: `${navItems.length * 50}ms` }}
          >
            { 
              user ? (
                <Link
                  href="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
              ) : (
                <GoogleLoginButton />
              )
            }
          </div>
        </div>
      </div>
      
      {/* Background overlay - FIXED: only render when menu is open */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-25 transition-opacity duration-300 md:hidden z-10"
          style={{ marginTop: '64px' }}
        />
      )}
    </>
  );
}