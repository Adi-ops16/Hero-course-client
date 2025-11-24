import React from 'react';
import banner from '../../../assets/banner.jpg';

const Banner = () => {
    return (
        <div
            className="hero rounded-2xl my-10"
            style={{
                backgroundImage: `url(${banner.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="hero-overlay bg-opacity-40 rounded-2xl"></div>

            {/* Content */}
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Master Web Development With Short, Effective Crash Courses
                    </h1>

                    <p className="mb-6 text-sm sm:text-base md:text-lg opacity-90">
                        Learn HTML, CSS, JavaScript, React, Tailwind, and Next.js with clean explanations
                        and beginner-friendly projects. Build real applications step-by-step and level up
                        your full-stack journey.
                    </p>

                    <div className="flex gap-3 justify-center flex-wrap">
                        <button className="btn btn-primary px-6 text-sm sm:text-base">
                            Start Learning
                        </button>

                        <button className="btn btn-outline btn-secondary px-6 text-sm sm:text-base">
                            Browse Courses
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
