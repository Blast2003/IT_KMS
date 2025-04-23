"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaPalette,
  FaCog,
} from "react-icons/fa";
import { userRegisteredCourses } from "../../data/userRegisteredCourse";
import { learners } from "../../data/users";

export default function LearningInventoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(
    userRegisteredCourses.length / itemsPerPage
  );

  const displayedCourses = userRegisteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalCourses = userRegisteredCourses.length;
  const completedCount = userRegisteredCourses.filter(
    (c) => c.progress === "Completed"
  ).length;

  const currentLearner = learners[0];

  return (
    <div className="bg-gradient-to-br from-[#CED4DA] to-[#e3ecee] text-[#1f2937] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-[1224px] w-full bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Header placeholder */}
        <div className="border-b border-gray-200 h-[56px]" />
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-[280px] bg-[#F7FAFC] border-r border-gray-300 rounded-tr-lg rounded-br-lg p-6 flex flex-col items-center">
            <div className="bg-gray-200 rounded-lg shadow-md w-full p-6 text-center">
              <Image
                src={currentLearner.avatarUrl}
                alt={`${currentLearner.name} avatar`}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mb-4 mx-auto"
              />
              <h3 className="font-semibold text-base text-gray-900 mb-1">
                {currentLearner.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{currentLearner.title}</p>
              <p className="text-xs text-gray-600">
                Total Courses: {totalCourses} | Completed: {completedCount}
              </p>
            </div>
            <nav className="mt-6 w-full bg-white rounded-lg shadow-md divide-y divide-gray-200">
              <ul className="text-sm font-medium text-gray-700">
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 border-l-4 border-blue-600 bg-blue-50 text-blue-600 rounded-tr-lg hover:bg-blue-200 hover:rounded-br-lg"
                  >
                    <FaPalette /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-bl-lg rounded-br-lg hover:bg-blue-200 hover:rounded-br-lg"
                  >
                    <FaCog /> Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-8 bg-gray-200 border-l border-gray-600 pl-8">
            <div className="">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                My Learning Inventory
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Overview of your enrolled courses
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px]">
              {displayedCourses.map((course) => {
                  const widthPercent =
                    course.progress === "Completed"
                      ? "100%"
                      : course.progress === "In Progress"
                      ? "50%"
                      : "0%";

                  return (
                    <article
                      key={course.courseTitle}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:animate-pulse"
                      onClick={() => window.open(course.courseUrl, '_blank')}
                    >
                      <div className="relative">
                        <Image
                          src={course.imgUrl}
                          alt={course.courseTitle}
                          width={320}
                          height={120}
                          className="w-full h-[120px] object-cover"
                        />
                        <button
                          aria-label={`Play video ${course.courseTitle}`}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2"
                        >
                          <FaPlay className="text-gray-900" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-sm text-gray-900 mb-2">
                          {course.courseTitle}
                        </h3>
                        <div className="h-2 w-full bg-gray-300 rounded-full mb-4">
                          <div
                            className="h-2 bg-blue-600 rounded-full"
                            style={{ width: widthPercent }}
                          />
                        </div>
                        <div className="flex gap-3">
                          {course.progress === "Completed" ? (
                            <button className="bg-gray-300 text-gray-600 text-xs px-4 py-1 rounded-full cursor-pointer">
                              Review
                            </button>
                          ) : (
                            <button className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full cursor-pointer">
                              Continue
                            </button>
                          )}
                          <span
                            className={`text-xs rounded-full px-3 py-1 ${
                              course.progress === "Completed"
                                ? "text-green-600 bg-green-100"
                                : "text-blue-500 bg-blue-100"
                            } cursor-pointer`}
                          >
                            {course.progress}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              <nav className="flex justify-center items-center gap-6 mt-8 text-gray-600 text-sm select-none">
                <button
                  aria-label="Previous page"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="hover:text-gray-900 cursor-pointer"
                >
                  <FaChevronLeft />
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                    className={`${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                        : "hover:rounded-full hover:bg-blue-400 hover:w-8 h-8 cursor-pointer"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  aria-label="Next page"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="hover:text-gray-900 cursor-pointer"
                >
                  <FaChevronRight />
                </button>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
