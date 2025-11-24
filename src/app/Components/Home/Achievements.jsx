"use client";

import React from "react";
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaAward } from "react-icons/fa";

const Achievements = () => {
    const achievementData = [
        {
            icon: <FaUsers size={30} className="text-primary" />,
            title: "5000+ Learners",
            description: "Thousands of students have started their web development journey with Hero Courses.",
        },
        {
            icon: <FaBookOpen size={30} className="text-primary" />,
            title: "100+ Courses",
            description: "Wide range of crash courses covering HTML, CSS, JavaScript, React, Tailwind, and Next.js.",
        },
        {
            icon: <FaChalkboardTeacher size={30} className="text-primary" />,
            title: "200+ Developers",
            description: "Developers contribute and share their courses, helping learners gain real-world skills.",
        },
        {
            icon: <FaAward size={30} className="text-primary" />,
            title: "Top-Rated Platform",
            description: "Recognized for providing practical, hands-on learning for aspiring web developers.",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12">Our Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievementData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#f9faf9] p-6 rounded-2xl shadow-md flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className="p-4 bg-primary/20 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
