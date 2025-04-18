"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface NavItem {
    label: string;
    path: string;
}

interface NavbarItemsProps {
    linkGroups: NavItem[][];
}

const NavbarItems = ({ linkGroups }: NavbarItemsProps) => {

    const pathname = usePathname();
    const [activePath, setActivePath] = useState(pathname || "/");
    
    // Update active path whenever the URL changes
    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);


    return (
        <div className="flex flex-col p-4 space-y-5">
            {linkGroups.map((group, groupIndex) => (
                <div key={`group-${groupIndex}`} className="space-y-2">
                    {group.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                activePath === item.path 
                                ? "bg-secondary text-text-primary" 
                                : "text-text-primary hover:bg-secondary hover:text-text-primary"
                            } transition-colors duration-200`}
                            prefetch={false}
                        >
                            {item.label}
                        </Link>
                    ))}
                    
                    {/* Add a divider between groups, except after the last group */}
                    {groupIndex < linkGroups.length - 1 && (
                        <div className="border-b border-secondary mt-4"></div>
                    )}
                </div>
            ))}
        </div>

    )

};

export default NavbarItems;