"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
import { WorkingBtn } from "./WorkingBtn";
import { FlipWords } from "../ui/flip-words";

export function Features() {
  const words = ["fast", "better", "effortlessly", "instantly"];
  return (
    <div className="my-4 mx-4 h-full flex">

      <div className="w-3/4 bg-white shadow-lg rounded-md">
        <div className="flex flex-col justify-center w-full my-8 px-8">

            <div className="text-4xl josefin-sans-extra-bold mb-5">
              <span style={{ color: "#0d0d0d" }}>Write Smart, Send </span>
              <FlipWords words={words} /> <br />
              <span style={{ color: "#0d0d0d" }}>emails with Sendly</span>
            </div>

            <h1 className="text-2xl josefin-sans-very-bold mb-2">Curious how Sendly transforms your email writing?</h1>
            <h1 className="josefin-sans-bold mb-2">From a simple idea to a perfectly crafted email, Sendly does all the hard work for you! Our AI refines, personalizes, and optimizes your message—so you can send with confidence.</h1>
            <h1>Hit the button below to see it in action!</h1>

          <WorkingBtn />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center w-1/4 mx-20">
        <CardStack items={CARDS} />
      </div>

    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "AI-Powered Email Drafting",
    designation: "Generate Emails in Seconds",
    content: (
      <p>
        Instantly craft professional and well-structured emails using AI. No
        more struggling with words—just type a prompt and let{" "}
        <Highlight>Sendly’s AI</Highlight> do the magic!
      </p>
    ),
  },
  {
    id: 1,
    name: "Smart Personalization",
    designation: "Tailored for Every Recipient",
    content: (
      <p>
        Improve engagement by letting AI{" "}
        <Highlight>adapt tone and style</Highlight> based on the recipient.
        Whether it's a formal request or a casual follow-up—Sendly has got you
        covered.
      </p>
    ),
  },
  {
    id: 2,
    name: "Schedule & Automate",
    designation: "Send Emails at the Perfect Time",
    content: (
      <p>
        Write now, send later! <Highlight>Schedule emails</Highlight> for the
        best delivery time or set up automated follow-ups to stay ahead in
        communication.
      </p>
    ),
  },
  {
    id: 3,
    name: "AI-Enhanced Grammar & Tone",
    designation: "Polish Your Writing Instantly",
    content: (
      <p>
        No more typos or awkward phrasing!{" "}
        <Highlight>Sendly refines your grammar</Highlight> and suggests
        improvements to make your emails more impactful and professional.
      </p>
    ),
  },
  {
    id: 4,
    name: "Analytics & Insights",
    designation: "Track Email Performance",
    content: (
      <p>
        Get real-time reports on{" "}
        <Highlight>open rates, clicks, and responses</Highlight>. Optimize your
        email strategy with data-driven insights.
      </p>
    ),
  },
];
