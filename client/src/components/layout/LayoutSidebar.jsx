// LayoutSidebar.jsx
"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar"; // Adjusted import path
import {
  IconArrowLeft,
  IconBrandTabler,
  IconClock,
  IconEdit,
  IconNotes,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Changed from motion/react
import LogoImage from "../../assets/email_sendly_image_logo.gif";
import { UserButton } from "@clerk/clerk-react";
import Compose from "./Compose";
import History from "./History";

// Utility function (since it's missing from your code)
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export function LayoutSidebar() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Compose",
      href: "#",
      icon: (
        <IconEdit className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "History",
      href: "#",
      icon: (
        <IconClock className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
    },
    {
      label: "Templates",
      href: "#",
      icon: (
        <IconNotes className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Vaibhav Chitransh",
                icon: (
                    <UserButton />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <History />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to="#" // Changed from href to to for React Router
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src={LogoImage} className="w-10 mix-blend-multiply" />
      <motion.span
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        <span className="yellowtail text-3xl">Sendly</span>
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="#" // Changed from href to to for React Router
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src={LogoImage} className="w-10 mix-blend-multiply" />
    </Link>
  );
};