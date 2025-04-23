"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBell, FaBox, FaSignOutAlt } from "react-icons/fa";
import logo from "../public/IT_KMS_logo.png";
import Link from "next/link";

interface HeaderProps {
  learner: {
    name: string;
    avatarUrl: string;
    notifications: { type: string; unreadCount: number }[];
  };
  currentPath: string;
}

export default function Header({ learner, currentPath }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/IT%20Certifications", label: "IT Certifications" },
    { href: "/Network%20&%20Security", label: "Network & Security" },
    { href: "/Hardware", label: "Hardware" },
    { href: "/Operating%20Systems", label: "Operating Systems" },
    { href: "/Servers%20&%20Other%20IT", label: "Servers & Other IT" },
  ];

  const handleProfileClick = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="w-full max-w mx-auto bg-white rounded-lg shadow-lg border border-gray-300 m-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/">
          <div className="flex items-center space-x-4 cursor-pointer hover:opacity-80">
            <Image
              src={logo}
              alt="TechLearn Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-extrabold text-blue-700">TechLearn</span>
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          <div className="relative cursor-pointer">
            <FaBell className="text-gray-600 text-xl" />
            {learner.notifications[0].unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {learner.notifications[0].unreadCount}
              </span>
            )}
          </div>

          {/* Profile & Dropdown Trigger */}
          <div className="relative">
            <div
              onClick={handleProfileClick}
              className="flex items-center space-x-2 cursor-pointer hover:opacity-85 hover:bg-gray-300 hover:rounded-4xl"
            >
              <Image
                src={learner.avatarUrl}
                alt={`${learner.name}'s profile`}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-gray-700 text-sm font-medium">{learner.name}</span>
            </div>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div ref={dropdownRef} className="absolute -right-[10px] mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20">
                <Link
                  href="/inventory"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                  onClick={closeMenu} // Close menu on click
                >
                  <FaBox className="mr-2" /> Inventory
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
                  onClick={closeMenu} // Close menu on click
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="flex flex-wrap justify-evenly px-6 py-3 text-gray-700 text-sm font-medium border-t border-gray-300 bg-gray-50">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`mr-6 mb-2 hover:text-blue-600 hover:underline ${
              currentPath === href ? 'text-blue-600' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}