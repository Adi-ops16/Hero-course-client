"use client";

import React from "react";

const FAQ = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                    Frequently Asked Questions (FAQ)
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Find answers about creating courses, enrolling, learning, and using Hero Courses.
                    We are here to make your learning and teaching experience simple and effective!
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title font-semibold">
                        How do I create an account on Hero Courses?
                    </div>
                    <div className="collapse-content text-sm text-gray-700">
                        Click signUp at the top-right corner. You can register as a learner to access courses, or as a developer to post your own courses. It is quick and free.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        How can I post my own course as a developer?
                    </div>
                    <div className="collapse-content text-sm text-gray-700">
                        After signing in as a developer, go to &quot;Add Your Course&quot;. Fill in course details, description, and resources. You can manage all your courses from your my courses.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        How many courses can I run at a time?
                    </div>
                    <div className="collapse-content text-sm text-gray-700">
                        You can run maximum three courses as a developer. This is to regulate and manage the platforms performance.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        Can I enroll in multiple courses at the same time?
                    </div>
                    <div className="collapse-content text-sm text-gray-700">
                        Yes! Learners can enroll in as many courses as they like. Each course will track your progress individually, so you can learn at your own pace.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        Can developers track student progress in their courses?
                    </div>
                    <div className="collapse-content text-sm text-gray-700">
                        Absolutely. Developers can view enrolled students, track course completion, and get feedback for improving their courses.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        How do I get help or support?
                    </div>
                    <div className="collapse-content text-sm text-gray-700">
                        You can reach our support team via the contact page, live chat, or email. We are available 7 days a week to assist learners and developers.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
