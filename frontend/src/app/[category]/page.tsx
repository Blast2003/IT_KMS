"use client";

import React, { useState } from "react";
import { courses } from "../../data/courses";
import { motion } from "framer-motion";
import CourseCard from "../../components/CourseCard";
import { useParams } from "next/navigation";

export default function ITCertifications() {
  const { category } = useParams();

  const headingText = decodeURIComponent(category as string)
    .replace(/%20/g, " ")
    .replace(/26/g, "and");

  const [hoveredCourseId, setHoveredCourseId] = useState<number | null>(null);

  // show 4 Courses for each time
  const [visibleCount, setVisibleCount] = useState(4); 

  const handleMouseEnter = (id: number) => setHoveredCourseId(id);
  const handleMouseLeave = () => setHoveredCourseId(null);

  // update showed course after click
  const handleShowMore = () => setVisibleCount((prev) => prev + 4); 

  // Update visible courses and check button's appearance 
  const visibleCourses = courses.slice(0, visibleCount);
  const hasMoreCourses = visibleCount < courses.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#CED4DA] to-[#e3ecee] text-[#1f2937] flex flex-col items-center overflow-x-hidden m-0"
    >
      <main className="w-full max-w-[1224px] mx-auto mt-8 px-4 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            {headingText}
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Courses to get you started with real-world expertise
          </p>
        </motion.div>

        {/* Most Popular Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="bg-blue-600 w-4 h-8 rounded-l mr-3"></span>
            Most Popular
          </h2>

          <div className="grid gap-6 grid-cols-2">
            {visibleCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isHovered={hoveredCourseId === course.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>

          {hasMoreCourses && (
            <div className="mt-8 text-center">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Show More
              </button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center mb-16 shadow-xl"
        >
          <div className="max-w-[1024px] mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Learning Journey Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join over 250,000 learners and access 500+ expert-led courses with
              lifetime access across all devices.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-md">
              Browse All Courses
            </button>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
