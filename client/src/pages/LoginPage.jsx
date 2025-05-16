"use client";
import React from "react";
import LoginPageImage from "../assets/login_page_image2.avif";
import { SignIn } from "@clerk/clerk-react";

export function LoginPage() {
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
        <div className="flex justify-center items-center py-10">
          <SignIn signUpUrl="/signup" forceRedirectUrl="/" />
        </div>
      </div>
    </div>
  );
}
