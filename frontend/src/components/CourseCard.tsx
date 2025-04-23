import React, { useRef, useState } from "react";
import Image from "next/image";
import {Course} from "../data/courses";
import { slugify, slugifyCategory } from "../utils/slugify";
import Link from "next/link";


interface CourseCardProps {
  course: Course;
  isHovered: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: number) => void;
}

export default function CourseCard({
  course,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: CourseCardProps) {
  const formattedDate = new Date(course.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const href = `/${slugifyCategory(course.category)}/${slugify(course.title)}`;

  // ref to the card wrapper
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipLeft, setFlipLeft] = useState(false);

  const POPUP_WIDTH = 320; 

  const handleMouseEnter = (id: number) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      if (rect.right + POPUP_WIDTH + 16 > window.innerWidth) {
        setFlipLeft(true);
      } else {
        setFlipLeft(false);
      }
    }
    onMouseEnter(id);
  };

  const handleMouseLeave = (id: number) => {
    onMouseLeave(id);
  };

  return (
    <div
      ref={cardRef}
      className="
        group
        bg-gradient-to-br from-white to-gray-50
        border border-gray-200 rounded-xl
        shadow-md
        transition-all duration-300
        cursor-pointer
        relative
      "
      style={{
        zIndex: isHovered ? 50 : 0,
      }}
      onMouseEnter={() => handleMouseEnter(course.id)}
      onMouseLeave={() => handleMouseLeave(course.id)}
    >
      <Link href={href}>
        <div className="p-6 rounded-xl">
          {/* Thumbnail */}
          <div className="relative rounded-md overflow-hidden mb-4">
            <Image
              src={course.imgUrl}
              alt={course.title}
              width={280}
              height={140}
              className="w-full h-[140px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>

          {/* Short description */}
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {course.description}
          </p>

          {/* Rating */}
          <p className="text-yellow-500 font-medium">⭐ {course.rating}</p>

          {/* Created date */}
          <p className="text-xs text-gray-400 mt-1">
            Created on: {formattedDate}
          </p>
        </div>
      </Link>

      {/* Hover Popup */}
      <div
        className={`
          absolute
          bg-gradient-to-br from-white to-gray-100
          p-6 rounded-xl shadow-lg
          w-80 top-0
          transition-all duration-300 z-40
          ${flipLeft ? "right-full mr-3" : "left-full ml-3"}
          ${isHovered ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-4"}
        `}
        style={{ top: "-10px" }}
      >
        <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
        <p className="text-sm text-gray-600 mb-2">{course.description}</p>
        <p className="text-yellow-500 font-medium">⭐ {course.rating}</p>
        <p className="text-xs text-gray-400">Created on: {formattedDate}</p>
      </div>
    </div>
  );
}
