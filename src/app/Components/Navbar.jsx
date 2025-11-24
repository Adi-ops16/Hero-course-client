"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAd, FaBook, FaBookOpen, FaHome, FaRegQuestionCircle } from "react-icons/fa";

export default function Navbar() {
    const pathName = usePathname();

    const activeLink = (href) =>
        pathName === href
            ? "text-primary font-semibold"
            : "text-gray-600 hover:text-primary";

    const links = (
        <>
            <li>
                <Link href="/" className={activeLink("/")}>
                    <FaHome />
                    Home
                </Link>
            </li>
            <li>
                <Link href="/courses" className={activeLink("/courses")}>
                    <FaBook />
                    Courses
                </Link>
            </li>
            <li>
                <Link href="/about-us" className={activeLink("/about-us")}>
                    <FaRegQuestionCircle />
                    About Us
                </Link>
            </li>
            <li>
                <Link href="/blog" className={activeLink("/blog")}>
                    <FaBookOpen />
                    Blog
                </Link>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 shadow-md px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="text-xl font-semibold text-primary flex justify-center gap-1 items-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-primary">
                            <path d="M12 2L15 8H9L12 2ZM2 20L5 14H19L22 20H2Z" />
                        </svg>
                        HeroCourses
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
                </div>

                <div className="navbar-end">
                    <Link href="/auth/login" className="btn btn-primary">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
