import React from "react";
import logo from '../../assets/email_sendly_image_logo.gif';
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="josefin-sans-extra-bold shadow-md bg-white">
      <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-2 dark:bg-neutral-800">
        <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div class="flex items-center justify-between">
            <a
              class="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
              href="#"
              aria-label="Sendly"
            >
              <span class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
                <img class="w-10 h-auto" src={logo} alt="Logo" />
                <span className="yellowtail text-3xl">Sendly</span>
              </span>
            </a>
            <div class="sm:hidden">
              <Button
                class="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <svg
                  class="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span class="sr-only">Toggle navigation</span>
              </Button>
            </div>
          </div>
          <div
            id="hs-navbar-example"
            class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
            aria-labelledby="hs-navbar-example-collapse"
          >
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <Button className='josefin-sans-very-bold cursor-pointer'>Signup</Button>
              <Button className='josefin-sans-very-bold cursor-pointer bg-radial from-teal-500 to-teal-200'>Contact Us</Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
