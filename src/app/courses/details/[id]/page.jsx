"use client";

import React, { useEffect, useState } from "react";
import useAxios from "@/app/Hooks/useAxios/useAxios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import Swal from "sweetalert2";

export default function CourseDetails() {
    const { id } = useParams();
    const axios = useAxios();
    const router = useRouter();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        axios.get(`/course_details/${id}`)
            .then(res => {
                setCourse(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log("Failed to fetch course details", err);
                setLoading(false);
            });
    }, [id, axios]);


    const handleBuying = () => {
        Swal.fire({
            icon: "success",
            title: "Thank you for your interest on our course.",
            text: "We will mail contact you very soon",
        })
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (!course) {
        return <p className="text-center mt-10">Course not found.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto my-10 px-4">
            <button
                onClick={() => router.back()}
                className="btn border-primary text-primary mb-5">
                <FaChevronLeft /> Go Back
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-100 shadow-xl rounded-2xl p-6">

                <div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <Image
                            width={600}
                            height={400}
                            src={course.thumbnail}
                            alt="course-image"
                            className="object-cover w-full h-72"
                        />
                    </div>

                    <div className="mt-5 p-4 bg-base-200 rounded-xl">
                        <h3 className="text-lg font-semibold mb-2">Course Instructor</h3>
                        <p className="font-medium">{course.course_by}</p>
                        <p className="text-sm text-gray-600">Email: {course.owner_email}</p>
                    </div>

                    <button onClick={handleBuying} className="btn btn-primary mt-6 w-full">Buy This Course</button>
                </div>

                <div className="flex flex-col justify-between">

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                            {course.courseName}
                        </h1>

                        <p className="text-sm mb-1">
                            <span className="font-semibold">Category: </span>
                            {course.category}
                        </p>

                        <p className="text-xl font-semibold text-success mb-4">
                            {course.coursePrice} BDT
                        </p>

                        <hr className="my-4" />

                        <h2 className="text-xl font-semibold mb-3">About This Course</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {course.description}
                        </p>
                    </div>


                    <div className="mt-6 bg-base-200 p-4 rounded-xl border">
                        <p className="text-sm text-gray-600">
                            ⭐ This course is part of our growing learning collection.
                            If you enjoy practical, project-based learning—this one&apos;s for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
