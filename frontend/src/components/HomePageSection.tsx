"use client";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { Course } from "../data/courses";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface HomePageSectionProps {
  courses: Course[];
  title: string;
}

export default function HomePageSection({ courses, title }: HomePageSectionProps) {
  const [hoveredCourseId, setHoveredCourseId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const COURSES_PER_PAGE = 4;
  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);

  const handleMouseEnter = (id: number) => setHoveredCourseId(id);
  const handleMouseLeave = () => setHoveredCourseId(null);

  return (
    <section className="w-full max-w-[1224px] mx-auto mt-10 px-6 py-12 bg-gray-50 rounded-lg relative">
      <h3 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        {title}
      </h3>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0 px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses
                  .slice(
                    pageIndex * COURSES_PER_PAGE,
                    (pageIndex + 1) * COURSES_PER_PAGE
                  )
                  .map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      isHovered={hoveredCourseId === course.id}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentPage > 0 && (
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-500 transition-colors -translate-x-1/2 cursor-pointer"
        >
          <AiOutlineLeft size={24} /> {/* Use the left arrow icon */}
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-500 transition-colors translate-x-1/2 cursor-pointer"
        >
          <AiOutlineRight size={24} /> {/* Use the right arrow icon */}
        </button>
      )}
    </section>
  )
}