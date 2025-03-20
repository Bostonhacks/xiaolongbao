"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface NavbarItemsProps {
    items: { label: string, path: string }[]
}

const NavbarItems = ({ items }: NavbarItemsProps) => {

    const [activePath, setActivePath] = useState(usePathname() || "/");

    const handleClick = (e: any) => {
        setActivePath(e.target.pathname);
    }


    return (
        <div className="flex flex-col p-4 space-y-4">
            {items.map((item) => (
                <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleClick}
                    className={`${activePath === item.path ? "bg-gray-100" : ""} px-3 py-2 rounded-md text-sm font-medium text-text-primary hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200`}
                    prefetch={false}
                >
                {item.label}
                </Link>
            ))}

        </div>

    )

};

export default NavbarItems;