"use client";

import React from "react";
import { FaUserPlus, FaLaptopCode, FaBookOpen, FaRocket } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUserPlus className="text-4xl text-primary mb-3" />,
            title: "1. Sign Up & Create Your Account",
            desc: "Join Hero Courses as a learner or developer. Developers can post courses, while learners can explore and enroll in courses easily.",
        },
        {
            icon: <FaLaptopCode className="text-4xl text-primary mb-3" />,
            title: "2. Post Your Own Course",
            desc: "Developers can create and publish their courses by providing course details, description, and resources. You can manage all your posted courses. Only three courses can be published by a developer at a time.",
        },
        {
            icon: <FaBookOpen className="text-4xl text-primary mb-3" />,
            title: "3. Browse & Learn Courses",
            desc: "Learners can browse available courses. Explore, enroll, and start learning immediately.",
        },
        {
            icon: <FaRocket className="text-4xl text-primary mb-3" />,
            title: "4. Track Progress & Launch Skills",
            desc: "Learners track their progress and complete projects to build real skills. Developers can see student enrollment and feedback for their courses.",
        },
    ];

    return (
        <section className="py-16 bg-base-100" id="how-it-works">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-12 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                        How <span className="text-primary">Hero Courses</span> Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                        Hero Courses helps developers share knowledge and learners gain real-world web development skills through practical crash courses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div data-aos="fade-up"
                            key={index}
                            className="bg-white border border-gray-100 shadow-md hover:shadow-lg rounded-2xl p-6 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                {step.icon}
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
