'use client'
import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth/useAuth'
import useAxios from '../Hooks/useAxios/useAxios'
import Swal from 'sweetalert2'
import Link from 'next/link'

export default function MyCourses() {

    const { user } = useAuth()
    const axios = useAxios()

    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

    // post courses
    useEffect(() => {
        if (!user?.email) return;

        axios.get(`/my-courses?email=${user.email}`)
            .then(res => {
                setCourses(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log("Couldn't fetch developer’s courses", err)
                setLoading(false)
            })
    }, [user, axios])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/courses/${id}`)
                    .then(res => {
                        if (res.data.deletedCount !== 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
                                icon: "success"
                            });
                            setCourses(prev => prev.filter(r => r._id !== id))
                        }
                    })
            }
        });
    }


    if (!loading && courses.length === 0) {
        return (
            <div className="max-w-4xl mx-auto text-center mt-20 p-6">
                <h2 className="text-3xl font-semibold text-primary mb-4">
                    You haven&apos;t created any courses yet
                </h2>
                <p className="text-gray-600 mb-6">
                    Start building your first course and help others learn!
                </p>
                <a href="/create-a-course" className="btn btn-primary">
                    Create a Course
                </a>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        )
    }


    return (
        <div className="max-w-7xl mx-auto my-10 px-4">
            <h1 className="text-3xl font-bold text-primary mb-6">
                My Courses
            </h1>

            <div className="overflow-x-auto rounded-xl shadow-md bg-base-100">
                <table className="table">
                    <thead className="bg-primary text-white text-base">
                        <tr>
                            <th>Sl</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {courses.map((course, i) => (
                            <tr key={course._id} className="hover">
                                <td>{i + 1}</td>
                                <td className="font-medium">{course.courseName}</td>
                                <td>$ {course.coursePrice}</td>
                                <td>{course.category}</td>

                                <td className="text-center">
                                    <Link href={`courses/details/${course._id}`} className="btn btn-info btn-sm text-white mr-2">
                                        View
                                    </Link>
                                    <button onClick={() => handleDelete(course._id)} className="btn btn-error btn-sm text-white">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
