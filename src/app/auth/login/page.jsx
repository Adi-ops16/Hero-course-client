'use client';
import GoogleButton from "@/app/Components/AuthComponents/GoogleButton";
import useAuth from "@/app/Hooks/useAuth/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function LoginPage() {

  const { setUser, signInUser } = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()

  const handleLogin = (data) => {

    signInUser(data.email, data.password)
      .then(res => {
        Swal.fire({
          icon: "success",
          title: "Welcome to Hero courses",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2500,
        })
        setUser(res.user)
        router.push("/")
      })

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-5">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-blue-600"
            >
              <path d="M12 2L15 8H9L12 2ZM2 20L5 14H19L22 20H2Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-3">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Login to continue your journey</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className={`w-full border ${errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* google button */}
        <GoogleButton title="Login"></GoogleButton>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Don&apos;t have an account?
          <a href="/auth/register" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}
