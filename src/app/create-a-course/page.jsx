'use client'
import { AuthContext } from '@/Provider/AuthContext';
import React, { use } from 'react'
import { useForm } from 'react-hook-form';
import { FaBookOpen, FaImage } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth/useAuth';
import useAxios from '../Hooks/useAxios/useAxios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function CreateACourse() {
    const router = useRouter()
    const { user } = useAuth()
    const axios = useAxios()

    const { register, handleSubmit } = useForm()

    const handleCourseSubmit = data => {
        const { courseName, category, coursePrice, thumbnail, description } = data
        const courseData = {
            courseName,
            category,
            coursePrice,
            thumbnail,
            description,
            course_by: user.displayName,
            owner_email: user.email,
        }


        Swal.fire({
            title: "Adding course",
            text: "Do you want to add this course?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/courses', courseData)
                    .then(res => {
                        Swal.fire({
                            title: "Course created",
                            text: "Your course has been added",
                            icon: "success"
                        });
                        router.push("/my-courses")
                    })
                    .catch(err => {
                        console.log("course can't be posted", err)
                    })
            }
        });


    }

    return (
        <div className="min-h-[calc(100vh-200px)] bg-[#F9FAFB] py-10 px-4">

            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-blue-600 to-blue-800 py-8 text-center text-white">
                    <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
                        <FaBookOpen className="text-3xl" />
                        Add New Course
                    </h1>
                    <p className="text-sm text-blue-100 mt-1">
                        Share your knowledge with the world — add your course details below.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(handleCourseSubmit)}
                    className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Course Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Course Name
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white">
                            <FaBookOpen className="text-gray-400" />
                            <input
                                {...register('courseName')}
                                type="text"
                                required
                                placeholder="e.g. Mastering React"
                                className="w-full bg-white border-none outline-none py-2 px-2"
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Category
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3">

                            <select
                                {...register('category')}
                                required
                                className="select w-full border-none outline-none bg-white"
                                defaultValue="">
                                <option value="" disabled>
                                    Select category
                                </option>
                                <option>Web Development</option>
                                <option>Frontend</option>
                                <option>Backend</option>
                                <option>UI/UX</option>
                                <option>Programming Fundamentals</option>
                            </select>
                        </div>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Price (BDT)
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3">

                            <input
                                {...register('coursePrice')}
                                required
                                type="number"
                                placeholder="e.g. 999"
                                className="w-full bg-white border-none outline-none py-2 px-2"
                            />
                        </div>
                    </div>

                    {/* Thumbnail */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Thumbnail Image URL
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white">
                            <FaImage className="text-gray-400" />
                            <input
                                {...register('thumbnail')}
                                type="text"
                                placeholder="https://example.com/course.jpg"
                                className="w-full bg-white border-none outline-none py-2 px-2"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Course Description
                        </label>
                        <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2">

                            <textarea
                                {...register('description')}
                                placeholder="Write a short description about your course..."
                                className="textarea w-full border-none outline-none focus-within:outline-0 resize-none"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 flex justify-center mt-6">
                        <button
                            type="submit"
                            className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-lg shadow-md">
                            Add Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
