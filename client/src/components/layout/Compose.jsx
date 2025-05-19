import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import botImage from "../../assets/bot_image.gif";
import { Paperclip } from "lucide-react";
import { Button } from "../ui/button";
import DateTimeSchedule from "./DateTimeSchedule";
import ToneAdjustment from "./ToneAdjustment";

const Compose = () => {
  return (
    <div className="bg-black min-h-screen w-full p-0 flex flex-col">
      <div className="bg-gray-200 flex-1 w-full p-8 grid grid-cols-3 gap-10 rounded-xl shadow-lg mx-auto max-w-7xl mt-10">
        {/* Left: Email Fields */}
        <div className="col-span-2 flex flex-col gap-8 justify-start">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className="block text-gray-700 font-semibold mb-1">To</span>
              <Input type="email" placeholder="john@example.com" />
            </div>
            <div>
              <span className="block text-gray-700 font-semibold mb-1">
                Subject
              </span>
              <Input type="text" placeholder="Enter Email Subject" />
            </div>
          </div>
          <div>
            <span className="block text-gray-700 font-semibold mb-1">Body</span>
            <div className="relative">
              <Textarea
                className="flex h-48 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                placeholder="Write your message here..."
              />
              <button
                type="button"
                className="absolute bottom-2 right-4 cursor-pointer p-2 rounded-full bg-white dark:bg-zinc-700 shadow hover:bg-gray-100 dark:hover:bg-zinc-600 transition"
                onClick={() => alert("AI content generation coming soon!")}
                aria-label="Generate with AI"
              >
                <img src={botImage} className="w-10 mix-blend-multiply" />
              </button>
            </div>
          </div>
          <div>
            <Button className="cursor-pointer flex items-center gap-2 mt-2 w-fit">
              <Paperclip size={20} />
              <span>Attach files</span>
            </Button>
          </div>
        </div>
        {/* Right: Schedule & Tone */}
        <div className="flex flex-col gap-8 justify-start items-center">
          <DateTimeSchedule />
          <ToneAdjustment />
        </div>
      </div>
      <div className="w-full h-54 my-5 flex items-center justify-center bg-white rounded-xl shadow border border-gray-100 max-w-7xl mx-auto">
        {/* Template select section placeholder */}
        <span className="text-gray-400 text-lg">
          Template select section (coming soon)
        </span>
      </div>
    </div>
  );
};

export default Compose;
