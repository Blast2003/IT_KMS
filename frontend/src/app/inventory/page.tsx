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
  FaTimes,
} from "react-icons/fa";
import { userRegisteredCourses } from "../../data/userRegisteredCourse";
import { learners } from "../../data/users";

export default function LearningInventoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalSource, setModalSource] = useState<string | null>(null);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(userRegisteredCourses.length / itemsPerPage);

  const displayedCourses = userRegisteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalCourses = userRegisteredCourses.length;
  const completedCount = userRegisteredCourses.filter(
    (c) => c.progress === "Completed"
  ).length;

  const currentLearner = learners[0];

  const closeModal = () => {
    setModalSource(null);
  };

  const getProgressProps = (status: string) => {
    switch (status) {
      case "Completed":
        return { percent: 100, color: "bg-green-500" };
      case "In Progress":
        return { percent: 50, color: "bg-blue-500" };
      default:
        return { percent: 0, color: "bg-gray-400" };
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#CED4DA] to-[#e3ecee] text-[#1f2937] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-[1224px] w-full bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="border-b border-gray-200 h-[56px]" />
        <div className="flex">
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
                  <Link href="#" className="flex items-center gap-3 px-4 py-3 border-l-4 border-blue-600 bg-blue-50 text-blue-600 rounded-tr-lg hover:bg-blue-200 hover:rounded-br-lg">
                    <FaPalette /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-bl-lg rounded-br-lg hover:bg-blue-200 hover:rounded-br-lg">
                    <FaCog /> Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          <main className="flex-1 p-8 bg-gray-200 border-l border-gray-600 pl-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              My Learning Inventory
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Overview of your enrolled courses
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px]">
              {displayedCourses.map((course) => {
                const formattedDate = new Date(course.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });
                const { percent, color } = getProgressProps(course.progress);
                return (
                  <article
                    key={course.courseTitle}
                    className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
                  >
                    <div className="p-6 rounded-xl relative">
                      <div className="relative overflow-hidden mb-4">
                        <Image
                          src={course.imgUrl}
                          alt={course.courseTitle}
                          width={280}
                          height={140}
                          className="w-full h-[140px] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalSource(course.courseUrl);
                            }}
                            aria-label={`Play video ${course.courseTitle}`}
                            className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100"
                          >
                            <FaPlay className="text-gray-900 text-xl cursor-pointer" />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {course.courseTitle}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {course.summary}
                      </p>
                      <p className="text-yellow-500 font-medium">⭐ {course.rating}</p>
                      <p className="text-xs text-gray-400 mt-1">Created on: {formattedDate}</p>

                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${color} h-2 rounded-full transition-width duration-300`}
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Progress: {course.progress}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

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
                >{i + 1}</button>
              ))}
              <button
                aria-label="Next page"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="hover:text-gray-900 cursor-pointer"
              >
                <FaChevronRight />
              </button>
            </nav>
          </main>
        </div>
      </div>

      {modalSource && (
        <div className="fixed inset-0 bg-black opacity-97 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative w-[900px] h-[360px] flex">
            <button
              onClick={closeModal}
              aria-label="Close video modal"
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer z-20"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Left: Video */}
            <div className="w-2/3 pr-4">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={modalSource.replace("watch?v=", "embed/")}
                  title={displayedCourses.find((c) => c.courseUrl === modalSource)?.courseTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="w-1/3 pl-4 overflow-y-auto mt-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {displayedCourses.find((c) => c.courseUrl === modalSource)?.courseTitle}
              </h3>
              <p className="text-sm text-gray-600 mb-8">
                {displayedCourses.find((c) => c.courseUrl === modalSource)?.summary}
              </p>
              <p className="text-yellow-500 font-medium mb-4">
                ⭐ {displayedCourses.find((c) => c.courseUrl === modalSource)?.rating}
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Created on: {new Date(
                  displayedCourses.find((c) => c.courseUrl === modalSource)?.createdAt || ""
                ).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
