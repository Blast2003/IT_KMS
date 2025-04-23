"use client";
import React from "react";
import { courses } from "../data/courses"; // replace by API call
import { learners } from "../data/users"; // replace by API call
import HomePageSection from "../components/HomePageSection";
import HeroSection from "../components/HeroSectiom";

export default function HomePage() {
  const currentLearner = learners[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CED4DA] to-[#e3ecee] text-[#1f2937] flex flex-col items-center justify-start overflow-x-hidden">

      {/* Welcome Section */}
      <div className="w-full max-w-[1224px] mx-auto mt-6 bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-extrabold text-blue-700">
          Welcome back, {currentLearner.name}
        </h2>
        <p className="text-gray-600 mt-2">
          Explore new courses and enhance your skills today!
        </p>
      </div>

      {/* Hero Section */}
      <HeroSection/>

      {/* What to Learn Next Section */}
      <HomePageSection courses={courses} title="What to Learn Next" />

      {/* Learners Are Viewing Section */}
      <HomePageSection courses={courses} title="Learners Are Viewing" />

      {/* Call to Action */}
      <section className="w-full max-w-[1224px] mx-auto mt-12 mb-10 px-6 py-10 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-xl text-center">
        <h3 className="text-2xl font-extrabold mb-4">
          Ready to Learn More?
        </h3>
        <p className="text-lg mb-6">
          Join thousands of learners and start your IT journey today!
        </p>
        <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105">
          Explore Now
        </button>
      </section>

    </div>
  );
}
