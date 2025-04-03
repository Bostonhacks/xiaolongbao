

export const protectedRoutes = [
    '/dashboard',
    '/profile',
    '/settings',
    "/judging",
    "/projects"
];

export const protectedRoutesMatcher = [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*'
];

const judgingNavItems = [
    { label: "Judges", path: "/judging/judges" },
    { label: "Submit Score", path: "/judging/scoring" },
    { label: "Results", path: "/judging/results" },
    { label: "Criteria", path: "/judging/criteria" }
]
const projectNavItems = [
    { label: "Projects", path: "/projects" },
    { label: "Submit Project", path: "/projects/submit" },
]

export const navItems = [
    [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: "Project Archive", path: "/archive" }
    ]

];

export const navItemsAuthenticated = [
    [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: "Project Archive", path: "/archive" }

    ],
    judgingNavItems,
    projectNavItems

];

