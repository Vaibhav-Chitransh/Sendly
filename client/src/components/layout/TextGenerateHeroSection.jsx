"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Say goodbye to writer’s block! Whether it's professional emails, quick replies, or personalized messages—Sendly’s AI crafts the perfect email in seconds. Save time, stay productive, and send emails effortlessly!
`;

export function TextGenerateHeroSection() {
  return <TextGenerateEffect words={words} />;
}
