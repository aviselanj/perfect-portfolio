"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="hamburger fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded-md"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-orange-600 text-white transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <nav className="flex flex-col mt-20 px-6 space-y-4 text-lg font-bold">
                    <Link href="/#hero" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">
                        Home
                    </Link>
                    <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">
                        About
                    </Link>
                    <Link href="/#projects" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">
                        Projects
                    </Link>
                    <Link href="/#skills" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">
                        Skills
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">
                        Contact
                    </Link>
                </nav>
            </div>
        </>
    );
}
