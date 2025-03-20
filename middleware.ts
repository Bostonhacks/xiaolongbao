import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { protectedRoutes, protectedRoutesMatcher } from './app/config/constants';

export function middleware(request: NextRequest) {
    // Get the cookie name that your backend sets
    const userSession = request.cookies.get('access_token');
    // Check if user is authenticated
    const isAuthenticated = !!userSession?.value;

    // Define protected paths that require authentication
    const protectedPaths = protectedRoutes;
    const isProtectedPath = protectedPaths.some(path => 
        request.nextUrl.pathname.startsWith(path)
    );

    // Handle protected routes - redirect to login if not authenticated
    if (isProtectedPath && !isAuthenticated) {
        const redirectUrl = new URL('/login', request.url);
        redirectUrl.searchParams.set('from', request.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}

// Configure matcher to run middleware only on protected routes
export const config = {
    // matcher: protectedRoutesMatcher
};