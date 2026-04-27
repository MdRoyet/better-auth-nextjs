"use client";
import React from "react";
// Gravity UI icons require the Icon component to render correctly
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

const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    /* Full screen centering wrapper with a soft neutral background */
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-950">
      {/* The White Form Card */}
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
          <TextField
            isRequired
            name="name"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              Name
            </Label>
            <Input
              placeholder="Your Name"
              className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all focus-within:border-blue-500"
            />
            <FieldError className="text-xs font-medium text-danger" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              Email
            </Label>
            <Input
              placeholder="john@example.com"
              className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all focus-within:border-blue-500"
            />
            <FieldError className="text-xs font-medium text-danger" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              Password
            </Label>
            <Input
              placeholder="Enter your password"
              className="h-11 rounded-xl border-zinc-200 bg-zinc-50/50 transition-all focus-within:border-blue-500"
            />
            <Description className="text-[11px] leading-relaxed text-zinc-400">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs font-medium text-danger" />
          </TextField>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="submit"
              className="h-12 w-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/20 transition-transform active:scale-95"
            >
              <Icon data={Check} size={16} className="mr-2" />
              Create Account
            </Button>

            <Button
              type="reset"
              variant="light"
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
