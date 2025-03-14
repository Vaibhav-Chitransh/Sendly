"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Enter your email idea",
  },
  {
    text: "AI generates the content",
  },
  {
    text: "Personalizing the tone",
  },
  {
    text: "Checking for grammar & clarity",
  },
  {
    text: "Formatting for readability",
  },
  {
    text: "Scheduling or sending instantly",
  },
  {
    text: "Tracking email performance",
  },
  {
    text: "Boosting your communication!",
  },
];

export function WorkingBtn() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center cursor-pointer"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        See the Journey
      </button>
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120] cursor-pointer"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
