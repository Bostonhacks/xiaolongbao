

export const protectedRoutes = [
    '/dashboard',
    '/profile',
    '/settings'
];

export const protectedRoutesMatcher = [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*'
];

export const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

export const navItemsAuthenticated = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: "Judging", path: '/judging' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' }
];
