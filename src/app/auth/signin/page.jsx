"use client";
import React, { useState } from "react"; // 1. Added useState
import { Icon } from "@gravity-ui/uikit";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client"; // Ensure this is imported

const SignIn = () => {
  // 2. Define the isLoading state
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // 3. Start loading

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: userData.email,
        password: userData.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        alert(error.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      setIsLoading(false); // 4. Stop loading regardless of outcome
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-950">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:bg-zinc-900">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black tracking-tight text-zinc-800 dark:text-white">
            Sign In
          </h2>
          <p className="mt-2 text-sm font-medium text-zinc-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
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
              type="email"
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
          >
            <Label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              Password
            </Label>
            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all focus-within:border-blue-500"
            />
            <FieldError className="text-xs font-medium text-danger" />
          </TextField>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="submit"
              isLoading={isLoading}
              isDisabled={isLoading}
              className="h-12 w-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/20 transition-transform active:scale-95"
            >
              {!isLoading && <Icon data={Check} size={16} className="mr-2" />}
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
