"use client";

import React from "react";

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto bg-base-100 px-6 md:px-16 lg:px-32 lg:py-16 rounded-2xl shadow-md my-10 md:my-20">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 text-center">
                About Hero Courses
            </h2>
            <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
                Hero Courses is a modern platform that helps beginners and enthusiasts quickly
                learn web development technologies like HTML, CSS, JavaScript, React, Tailwind,
                and Next.js through short, practical, and project-based crash courses.
            </p>

            {/* Tabs */}
            <div className="tabs tabs-boxed flex flex-col md:flex-row md:justify-center gap-2 mb-8">

                <input type="radio" name="about_tabs" className="tab text-lg md:text-base" aria-label="Story" defaultChecked />
                {/* Story */}
                <div className="tab-content bg-base-100 p-4" id="story">
                    <p className="text-gray-700 leading-relaxed">

                        Hero Courses is a modern and dynamic learning platform designed specifically for beginners and enthusiasts eager to dive into the world of web development. It stands out by offering short, practical, and project-based crash courses that prioritize hands-on experience over lengthy theoretical lessons. The curriculum is carefully curated to cover a range of in-demand technologies, including foundational languages like HTML, CSS, and JavaScript, as well as popular modern frameworks and libraries such as React, Tailwind CSS, and Next.js. Through this focused, project-oriented approach, learners are able to quickly build tangible skills and gain the confidence needed to start creating their own web projects.
                    </p>
                </div>

                <input type="radio" name="about_tabs" className="tab text-lg md:text-base" aria-label="Mission" />
                {/* Mission */}
                <div className="tab-content bg-base-100 p-4" id="mission">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our mission is to help aspiring developers gain skills quickly and effectively.
                        We aim to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Provide concise and project-based learning experiences.</li>
                        <li>Make modern web technologies accessible to beginners.</li>
                        <li>Encourage practical application of knowledge through real projects.</li>
                        <li>Build confidence in learners to create their own applications.</li>
                    </ul>
                </div>


                <input type="radio" name="about_tabs" className="tab text-lg md:text-base" aria-label="Achievements" />
                {/* Achievements */}
                <div className="tab-content bg-base-100 p-4" id="achievements">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Over the years, Hero Courses has achieved key milestones:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Created 20+ crash courses covering HTML, CSS, JS, React, Tailwind, Next.js.</li>
                        <li>Helped hundreds of learners launch their first web applications.</li>
                        <li>Maintained a beginner-friendly teaching style while covering advanced topics.</li>
                        <li>Built a growing community of learners supporting each other online.</li>
                    </ul>
                </div>


                <input type="radio" name="about_tabs" className="tab text-lg md:text-base" aria-label="Team" />
                {/* Team */}
                <div className="tab-content bg-base-100 p-4" id="team">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Hero Courses is powered by a small but dedicated team:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Course Creators:</strong> Experienced developers simplifying complex topics.</li>
                        <li><strong>Support Team:</strong> Always ready to assist learners with questions.</li>
                        <li><strong>Content Designers:</strong> Making lessons engaging and easy to follow.</li>
                        <li><strong>Community Managers:</strong> Building a helpful learner community.</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        Together, the team ensures Hero Courses remains a friendly and effective
                        platform for learning web development.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
