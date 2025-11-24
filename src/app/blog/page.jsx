"use client";

import Image from "next/image";
import React from "react";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";

import mern from '../../assets/Mern stack.jpg'
import tailwind from '../../assets/tailwind.jpg'
import next from '../../assets/next.jpg'

export default function Page() {
    const blogs = [
        {
            title: "Getting Started with Web Development",
            excerpt:
                "A beginner-friendly guide to understanding HTML, CSS, JavaScript, and how they work together to build modern web applications.",
            date: "January 12, 2025",
            image: mern,
            link: "https://www.geeksforgeeks.org/mern/understand-mern-stack/"
        },
        {
            title: "Why You Should Learn Next.js in 2025",
            excerpt:
                "Next.js is now the most popular React framework. Learn why developers prefer it and how it can boost your development workflow.",
            date: "February 02, 2025",
            image: next,
            link: "https://en.wikipedia.org/wiki/Next.js"
        },
        {
            title: "Tailwind CSS: Build Beautiful UIs Faster",
            excerpt:
                "Tailwind makes styling effortless. Learn how you can design responsive layouts without writing a single custom CSS file.",
            date: "December 28, 2024",
            image: tailwind,
            link: "https://en.wikipedia.org/wiki/Tailwind_CSS"
        },
    ];
    console.log(blogs[0].image)
    return (
        <section className="py-16 bg-[#f9faf9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12" data-aos="fade-down">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Latest Blogs</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest tutorials, tips, and development guides.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <Image
                                src={blog.image}
                                alt="blog thumbnail"
                                className="w-full h-48 object-cover"
                            ></Image>

                            <div className="p-5 space-y-3">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 text-sm">{blog.excerpt}</p>

                                <div className="flex items-center gap-2 text-secondary text-sm mt-2">
                                    <FaCalendarAlt className="text-primary" />
                                    <span>{blog.date}</span>
                                </div>

                                <a target="_blank" href={blog.link} className="mt-3 btn btn-primary bg-primary text-white w-full rounded-xl">
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
