'use client'

import { ThemeProvider } from 'next-themes'
import { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// Define auth context types
type User = {
  id: string;
  email: string;
  name?: string;
  // Add other user properties as needed
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (params: { authType: string, redirect_uri?: string }) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

// Create the auth context
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
  refreshUser: async () => {},
});

// Auth provider component
function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(0); // Track time of last refresh
  const router = useRouter();
  
  // Function to check auth status and get user data
  const refreshUser = useCallback(async (force = false) => {
    // Implement refresh throttling - only refresh if:
    // 1. Force flag is set, OR
    // 2. No refresh has happened in the last 5 minutes
    const now = Date.now();
    const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds
    
    if (!force && lastRefresh > 0 && now - lastRefresh < REFRESH_INTERVAL) {
      // Skip refresh if it was done recently
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/user/me', {
        // Add cache control
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        },
        // Include credentials for cookies
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setLastRefresh(now); // Update refresh timestamp
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, [lastRefresh]);
  
  // Login function - works with your BFF pattern
  const login = async (params: { authType: string, redirect_uri?: string }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authType: params.authType,
          redirect_uri: params.redirect_uri || `${window.location.origin}/login/loginresponse`
        }),
        credentials: 'include' // Include credentials
      });
      
      if (response.ok) {
        const data = await response.json();
        
        if (data.user) {
          setUser(data.user);
          setLastRefresh(Date.now()); // Update refresh timestamp
        }
        
        if (data.url) {
          window.location.href = data.url;
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };
  
  // Logout function that works with your API
  const logout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include' // Include credentials
      });
      
      if (response.ok) {
        setUser(null);
        setLastRefresh(0); // Reset refresh timestamp
        router.push('/');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  // Initialize auth on mount - but only once
  useEffect(() => {
    // If not mounted yet
    if (!mounted) {
      setMounted(true);
      
      // Check if we have user data in session storage first
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        try {
          // If we have stored user data, use it immediately
          const userData = JSON.parse(storedUser);
          setUser(userData);
          setIsLoading(false);
          
          // Still refresh in background to validate
          refreshUser(true);
        } catch (e) {
          console.log(e);
          // If parsing fails, clear and do normal refresh
          sessionStorage.removeItem('user');
          refreshUser(true);
        }
      } else {
        // No stored user, do normal refresh
        refreshUser(true);
      }
    }
  }, [mounted, refreshUser]);
  
  // Store user data in session storage when it changes
  useEffect(() => {
    if (mounted && !isLoading) {
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
      } else {
        sessionStorage.removeItem('user');
      }
    }
  }, [user, mounted, isLoading]);
  
  // During initial render, return a placeholder
  if (!mounted) {
    return <>{children}</>;
  }
  
  return (
    <AuthContext.Provider 
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshUser: () => refreshUser(true)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Export a hook for using the auth context
export const useAuth = () => useContext(AuthContext);

// Main providers component combining all contexts
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}