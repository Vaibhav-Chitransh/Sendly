import React from "react";
import heroImage from "../../assets/hero_section_image.gif";
import { Button } from "../ui/button";
import { Cover } from "../ui/Cover";
import { TextGenerateHeroSection } from "./TextGenerateHeroSection";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row shadow-lg bg-white mt-4 mx-4 rounded-md">
      <div className="w-full h-full my-6 flex flex-col gap-5 ml-15 mx-10">
        <div className="">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <span style={{ color: "#085454" }}>Write Emails 10x faster</span>{" "}
            <br /> <span style={{ color: "#0d0d0d" }}>with</span>{" "}
            <Cover>Sendly</Cover>
          </h1>
          <TextGenerateHeroSection />
        </div>
        <div className="mt-8">
          <Button className="cursor-pointer font-bold">Get Started</Button>
        </div>
      </div>
      <div className="hidden md:flex w-full items-center justify-center">
        <img
          src={heroImage}
          alt="hero_image"
          className="w-full mx-2 border rounded"
        />
      </div>
    </div>
  );
};

export default HeroSection;
