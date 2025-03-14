"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LoginPageImage from "../assets/login_page_image2.avif";

export function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen w-screen gap-2 p-4 bg-gray-100 dark:bg-zinc-900">
      <div className="hidden md:block w-full bg-white shadow-lg ml-4 rounded-lg overflow-hidden">
        <img
          src={LoginPageImage}
          alt="signupImage"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full bg-white shadow-lg rounded-lg p-6">
  <div className="max-w-md w-full mx-auto rounded-lg p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">
      Welcome Back to Sendly
    </h2>
    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
      Log in to continue sending smarter emails effortlessly
    </p>
    <form className="my-8" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="you@example.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="••••••••" type="password" />
      </LabelInputContainer>

      <div className="flex justify-between items-center mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-600" />
          <span className="text-neutral-600 dark:text-neutral-300 text-sm">Remember me</span>
        </label>
        <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        type="submit"
      >
        Log in &rarr;
        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <div className="flex flex-col space-y-4">
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:shadow-md transition-shadow cursor-pointer"
          type="button"
        >
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Continue with Google
          </span>
          <BottomGradient />
        </button>
      </div>

      <p className="text-sm text-center mt-4 text-neutral-600 dark:text-neutral-300">
        Don't have an account?{" "}
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  </div>
</div>

    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
