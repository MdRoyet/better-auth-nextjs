"use client";
import React, { useState } from "react";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client"; // Added authClient for signOut
import { Button, Avatar } from "@heroui/react";

const SiteNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/"; // Redirect to homepage after logout
        },
      },
    });
  };

  if (isPending) {
    return (
      <nav className="h-16 flex items-center px-8 border-b border-zinc-200">
        <div className="animate-pulse bg-zinc-200 h-4 w-24 rounded"></div>
      </nav>
    );
  }

  const user = session?.user;

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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors"
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
                className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Auth Conditional Section */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">
                    {user.name}
                  </span>
                  <span className="text-[10px] text-zinc-500">
                    {user.email}
                  </span>
                </div>
                <Avatar
                  size="sm"
                  name={user.name}
                  className="bg-blue-100 text-blue-600 font-bold"
                />
                <Button
                  onPress={handleSignOut}
                  size="sm"
                  variant="flat"
                  color="danger"
                  className="font-bold rounded-full"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/signin"
                  className="text-sm font-bold text-zinc-500 hover:text-zinc-900"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-zinc-400 hover:bg-zinc-100 rounded-md"
            >
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
        <div className="md:hidden border-t border-zinc-100 bg-white p-4 space-y-4 dark:bg-zinc-950">
          <Link href="/" className="block text-base font-bold">
            Features
          </Link>
          <Link
            href="/dashboard"
            className="block text-base font-bold text-blue-600"
          >
            Dashboard
          </Link>
          <hr className="border-zinc-100" />
          {user ? (
            <div className="space-y-4">
              <p className="text-sm text-zinc-500">
                Signed in as{" "}
                <span className="font-bold text-zinc-900">{user.name}</span>
              </p>
              <Button
                onPress={handleSignOut}
                color="danger"
                fullWidth
                variant="flat"
                className="font-bold"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Link href="/auth/signin" className="block text-center font-bold">
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="block w-full rounded-xl bg-blue-600 py-3 text-center font-bold text-white"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default SiteNavBar;
