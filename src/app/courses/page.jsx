'use client'
import React, { useEffect, useState } from 'react'
import useAxios from '../Hooks/useAxios/useAxios'
import Image from 'next/image'
import Link from 'next/link'

export default function Courses() {
  const [courses, setCourses] = useState([])
  const axios = useAxios()

  useEffect(() => {
    axios.get('/all-courses')
      .then(res => setCourses(res.data))
      .catch(err => console.log("Failed to fetch courses:", err))
  }, [axios])


  if (!courses.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
        <h2 className="text-2xl font-semibold text-gray-700">
          Loading Courses...
        </h2>
      </div>
    )
  }


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        Explore Our Courses
      </h1>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div
            key={course._id}
            className="bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">

            <Image
              width={200}
              height={200}
              src={course.thumbnail}
              alt={course.courseName}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">
                {course.courseName}
              </h2>

              <p className="text-sm text-gray-500">
                Category: <span className="font-medium text-gray-700">{course.category}</span>
              </p>

              <p className="text-sm text-gray-500">
                Instructor: <span className="text-gray-700 font-medium">{course.course_by}</span>
              </p>

              <p className="text-lg font-bold text-primary">
                $ {course.coursePrice}
              </p>

              <Link href={`/courses/details/${course._id}`} className="btn btn-primary w-full mt-2">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
