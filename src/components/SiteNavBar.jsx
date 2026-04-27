"use client";
import React, { useState } from "react";
import Link from "next/link"; // Using standard Next.js links

const SiteNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30">
                H
              </div>
              <span className="text-xl font-black tracking-tight text-zinc-900 dark:text-white">
                HERO
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#"
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-bold text-blue-600"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none dark:hover:bg-zinc-800"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="#"
              className="block rounded-md px-3 py-4 text-base font-bold text-zinc-900 dark:text-white"
            >
              Features
            </Link>
            <Link
              href="/dashboard"
              className="block rounded-md px-3 py-4 text-base font-bold text-blue-600"
            >
              Dashboard
            </Link>
            <Link
              href="/sign-up"
              className="mt-4 block w-full rounded-xl bg-blue-600 py-3 text-center font-bold text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SiteNavBar;
