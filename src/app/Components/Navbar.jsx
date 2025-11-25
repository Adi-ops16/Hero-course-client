"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAd, FaBook, FaBookmark, FaBookOpen, FaHome, FaPlusCircle, FaRegQuestionCircle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { deleteCookie } from "cookies-next";

export default function Navbar() {
    const { user, logOut } = useAuth()

    const pathName = usePathname();

    const activeLink = (href) =>
        pathName === href
            ? "text-primary font-semibold"
            : "text-gray-600 hover:text-primary";


    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "You have successfully Logged out",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 2500
                })
                deleteCookie("authUser")
            })
    }

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
            {
                user && <>
                    <li>
                        <Link href="/create-a-course" className={activeLink("/create-a-course")}>
                            <FaPlusCircle />
                            Create course
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-courses" className={activeLink("/my-courses")}>
                            <FaBookmark />
                            My courses
                        </Link>
                    </li>
                </>
            }
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
                    <ul className="menu menu-horizontal">{links}</ul>
                </div>

                <div className="navbar-end">
                    {user ?
                        <button onClick={handleLogOut} className="btn btn-primary">
                            LogOut
                        </button>
                        :
                        <Link href="/auth/login" className="btn btn-primary">
                            Login
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
}


