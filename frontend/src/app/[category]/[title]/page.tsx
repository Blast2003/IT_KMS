// app/[category]/[courseName]/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { slugify, slugifyCategory } from "../../../utils/slugify";
import {
  FaPlay,
  FaClock,
  FaAward,
  FaGlobe,
  FaStar,
  FaDownload, 
  FaCode
} from "react-icons/fa";
import { courses } from "../../../data/courses";
import { instructors } from "../../../data/users";
import { reviewsData } from "../../../data/reviewsData";

interface Params {
  params: {
    category: string;
    title: string;
  };
}

export default function CoursePage({ params }: Params) {
  const { category, title } = params;
  const relatedCourses = courses.slice(4);


  // find the course by slug
  const course = courses.find(
    (c) =>
      slugifyCategory(c.category) === slugifyCategory(category) &&
      slugify(c.title) === title
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Course not found.</p>
      </div>
    );
  }

  const decodedCategory = decodeURIComponent(category);

  // tab state
  const tabs = ["Description", "Reviews", "Related Resources"] as const;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>(
    "Description"
  );


  // ratings summary
  const totalReviews = 245;
  const averageRating = 4.8;
  const distribution = [
    { stars: 5, pct: 80 },
    { stars: 4, pct: 60 },
    { stars: 3, pct: 40 },
    { stars: 2, pct: 20 },
    { stars: 1, pct: 5 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#CED4DA] to-[#e3ecee] text-[#1f2937]">

      {/* Preview + Enroll */}
      <div className="max-w-6xl w-full mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-center text-sm text-gray-500 mb-2">
            ${course.price.toFixed(2)}
          </p>
          <div className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group transition-all duration-200">
            <Image
              src={course.imgUrl}
              alt={course.title}
              width={640}
              height={360}
              className="w-full h-auto object-cover group-hover:scale-105 group-hover:blur-xs transition-all duration-200"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-200">
              <div className="p-3 bg-white bg-opacity-80 rounded-full">
                <FaPlay className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {decodedCategory}
            </span>
          </div>

          <h1 className="text-2xl font-bold mb-2">{course.title}</h1>

          <div className="flex items-center mb-4">
            <span className="font-medium mr-2">Rate</span>
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(course.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              <span className="text-sm text-gray-600 ml-2">
                ({course.reviewsCount} reviews)
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {course.summary}
          </p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition mb-6 cursor-pointer">
            Enroll Now
          </button>

          <div className="flex justify-evenly text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <FaClock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            {course.certificateAvailable && (
              <div className="flex items-center space-x-1">
                <FaAward className="w-4 h-4" />
                <span>Certificate</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <FaGlobe className="w-4 h-4" />
              <span>{course.language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <nav className="max-w-6xl mx-auto px-6 mt-12">
        <ul className="flex"> {/* Removed border-b from the ul */}
            {tabs.map((tab) => (
            <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mr-8 pb-2 cursor-pointer ${
                activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
                style={{ paddingBottom: activeTab === tab ? 'calc(0.5rem - 2px)' : '0.5rem' }} 
            >
                {tab}
            </li>
            ))}
        </ul>
        </nav>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === "Description" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <p className="text-gray-700 whitespace-pre-line">
                {course.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-3">Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((p) => (
                      <li
                        key={p}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <span className="text-green-500">✔</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-3">What You’ll Get</h3>
                  <ul className="space-y-2">
                    {course.whatYouGet.map((w) => (
                      <li
                        key={w}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <span className="text-gray-600">•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="bg-white p-6 w-[300px] h-[200px] rounded-lg shadow">
              <h3 className="font-semibold mb-4">Course Instructor</h3>
              <div className="flex items-center space-x-4">
                <Image
                  src={instructors[0].avatarUrl}
                  alt={instructors[0].name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div className="space-y-1">
                  <p className="font-medium">{instructors[0].name}</p>
                  <p className="text-sm text-gray-500">
                    {instructors[0].title}
                  </p>
                  <div className="flex items-center text-sm text-yellow-400">
                    <FaStar className="w-4 h-4 mr-1" />
                    <span>
                      {instructors[0].rating.toFixed(1)} Instructor Rating
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ratings Summary */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <h3 className="font-semibold">Course Ratings</h3>
              <div className="flex items-center">
                <span className="text-3xl font-bold">{averageRating}</span>
                <div className="flex items-center ml-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(averageRating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Based on {totalReviews} reviews
              </p>

              <div className="space-y-2">
                {distribution.map(({ stars, pct }) => (
                  <div key={stars} className="flex items-center space-x-2">
                    <span className="w-12 text-sm">{stars} stars</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-sm">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Cards */}
            <div className="space-y-6">
              {reviewsData.map((r) => (
                <div
                  key={r.id}
                  className="bg-white p-6 rounded-lg shadow space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={r.avatarUrl}
                        alt={r.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{r.name}</p>
                        <div className="flex items-center text-sm text-yellow-400">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <FaStar
                                key={i}
                                className={`w-4 h-4 ${
                                  i < r.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{r.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Related Resources" && (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((resource) => (
                <div
                key={resource.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                <div className="relative h-40">
                    <Image
                    src={resource.imgUrl || ""} // Use the image URL from the data
                    alt={resource.title}
                    fill
                    className="object-cover"
                    />
                    <span className="absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded"
                    style={{
                        backgroundColor:
                        resource.type === "pdf"
                            ? "#1D4ED8"
                            : resource.type === "code"
                            ? "#16A34A"
                            : resource.type === "video"
                            ? "#DC2626"
                            : "gray", // Default background color
                    }}
                    >
                    {resource.type.toUpperCase()}
                    </span>
                </div>
                <div className="p-4">
                    <h4 className="font-semibold mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{resource.summary}</p>
                    <div className="flex items-center text-sm text-blue-600 font-medium hover:underline cursor-pointer">
                    {resource.type === "pdf" && <FaDownload className="mr-2" />}
                    {resource.type === "code" && <FaCode className="mr-2" />}
                    {resource.type === "video" && <FaPlay className="mr-2" />}
                    {resource.type === "pdf" && "Download"}
                    {resource.type === "code" && "View Code"}
                    {resource.type === "video" && "Watch Now"}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        )}
      </div>

    </div>
  );
}
