'use client'

import useAxios from '@/app/Hooks/useAxios/useAxios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function FeaturedCourses() {
    const axios = useAxios()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get('/featured_course')
            .then(res => setCourses(res.data))
            .catch(err => console.log("Failed to load featured courses", err))
    }, [axios])


    return (
        <div className="max-w-7xl mx-auto my-16 px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">
                Featured Courses
            </h2>

            {courses.length === 0 ? (
                <p className="text-center text-gray-500">No featured courses available.</p>
            ) : (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="pb-10"
                >
                    {courses.map(course => (
                        <SwiperSlide key={course._id}>
                            <div className="rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 my-6">
                                <Image
                                    src={course.thumbnail}
                                    width={500}
                                    height={300}
                                    alt="course thumbnail"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-primary mb-2">
                                        {course.courseName}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                                        {course.description}
                                    </p>

                                    <div className="flex justify-between items-center mt-4">
                                        <p className="font-bold text-lg text-secondary">
                                            {course.coursePrice} BDT
                                        </p>
                                        <a
                                            href={`/courses/${course._id}`}
                                            className="btn btn-primary btn-sm"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}
