"use client";
import React, { useState } from "react"; // Added useState for loading
import { Icon } from "@gravity-ui/uikit";
import { Check, ArrowRotateLeft } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        callbackURL: "/dashboard", // Optional: where to go after success
      });

      if (error) {
        // Handle specific server errors (e.g., user already exists)
        alert(error.message || "An error occurred");
      } else {
        console.log("Success:", data);
      }
    } catch (err) {
      console.error("Fatal error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-950">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:bg-zinc-900">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black tracking-tight text-zinc-800 dark:text-white">
            Sign Up
          </h2>
          <p className="mt-2 text-sm font-medium text-zinc-500">
            Create your account to continue
          </p>
        </div>

        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          {/* Name Field */}
          <TextField
            isRequired
            name="name"
            className="flex flex-col gap-1.5"
            validate={(value) => (value.length < 3 ? "Name too short" : null)}
          >
            <Label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              Name
            </Label>
            <Input
              name="name"
              placeholder="Your Name"
              className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all focus-within:border-blue-500"
            />
            <FieldError className="text-xs font-medium text-danger" />
          </TextField>

          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            className="flex flex-col gap-1.5"
            validate={(value) =>
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? "Invalid email"
                : null
            }
          >
            <Label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              Email
            </Label>
            <Input
              name="email"
              type="email" // Explicitly set type here
              placeholder="john@example.com"
              className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all focus-within:border-blue-500"
            />
            <FieldError className="text-xs font-medium text-danger" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            name="password"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 8) return "Min 8 characters";
              if (!/[A-Z]/.test(value)) return "Need 1 uppercase";
              if (!/[0-9]/.test(value)) return "Need 1 number";
              return null;
            }}
          >
            <Label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              Password
            </Label>
            <Input
              name="password"
              type="password" // CRITICAL FIX: Hide password dots
              placeholder="••••••••"
              className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all focus-within:border-blue-500"
            />
            <Description className="text-[11px] leading-relaxed text-zinc-400">
              8+ chars, 1 uppercase, 1 number
            </Description>
            <FieldError className="text-xs font-medium text-danger" />
          </TextField>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="submit"
              isLoading={isLoading} // Built-in HeroUI loading state
              isDisabled={isLoading}
              className="h-12 w-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/20 transition-transform active:scale-95"
            >
              {!isLoading && <Icon data={Check} size={16} className="mr-2" />}
              {isLoading ? "Creating..." : "Create Account"}
            </Button>

            <Button
              type="reset"
              variant="light"
              isDisabled={isLoading}
              className="h-12 w-full font-semibold text-zinc-500"
            >
              <Icon data={ArrowRotateLeft} size={14} className="mr-2" />
              Reset Form
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
