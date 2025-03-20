

export const protectedRoutes = [
    '/dashboard',
    '/profile',
    '/settings'
]

export const protectedRoutesMatcher = [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*'
]