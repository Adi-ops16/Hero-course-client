"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="bg-base-200 text-base-content py-12 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                <div className="flex flex-col items-start space-y-4">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-primary">
                        <path d="M12 2L15 8H9L12 2ZM2 20L5 14H19L22 20H2Z" />
                    </svg>
                    <p className="text-gray-700">
                        Hero Courses<br />
                        Empowering developers and learners to build real web applications
                        with practical crash courses.
                    </p>
                </div>

                <div>
                    <h6 className="footer-title text-secondary mb-4">Courses</h6>
                    <ul className="space-y-2">
                        <li>
                            <a href="/courses" className="link link-hover">
                                All Courses
                            </a>
                        </li>
                        <li>
                            <a href="/courses/new" className="link link-hover">
                                Add Your Course
                            </a>
                        </li>
                        <li>
                            <a href="/my-courses" className="link link-hover">
                                My Courses
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className="footer-title text-secondary mb-4">Company</h6>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about-us" className="link link-hover">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="link link-hover">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/blog" className="link link-hover">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="link link-hover">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className="footer-title text-secondary mb-4">Legal</h6>
                    <ul className="space-y-2">
                        <li>
                            <a href="/terms" className="link link-hover">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="link link-hover">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/cookie" className="link link-hover">
                                Cookie Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Hero Courses. All rights reserved.
            </div>
        </footer>
    );
}
