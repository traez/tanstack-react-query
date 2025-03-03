"use client";
import Link from "next/link";
import { FaDatabase } from "react-icons/fa";
import { HiOutlineCursorClick } from "react-icons/hi";
import { BsGear } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-4 px-4 md:py-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tanstack React Query Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Experience the power of efficient data fetching and state management
            with React Query
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/comments"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              View Comments
            </Link>
            <Link
              href="/formpost"
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Form Posts Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center justify-center h-14 w-14 bg-blue-100 text-blue-600 rounded-lg mb-4 mx-auto">
                <FaDatabase size={24} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Data Fetching
              </h3>
              <p className="text-gray-600 text-center">
                Optimized API requests with automatic caching and background
                updates
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center justify-center h-14 w-14 bg-green-100 text-green-600 rounded-lg mb-4 mx-auto">
                <BsGear size={24} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                State Management
              </h3>
              <p className="text-gray-600 text-center">
                Simplified state handling with built-in loading and error states
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center justify-center h-14 w-14 bg-purple-100 text-purple-600 rounded-lg mb-4 mx-auto">
                <HiOutlineCursorClick size={24} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Mutations
              </h3>
              <p className="text-gray-600 text-center">
                Create, update and delete data with automatic UI synchronization
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
