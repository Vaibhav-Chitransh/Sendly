import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import React from "react";

const ToneAdjustment = () => {
  return (
    <div className="w-full max-w-lg mt-6 mx-auto flex flex-col items-center">
      <label
        className="block text-gray-700 font-medium mb-2 text-center"
        htmlFor="tone-select"
      >
        Tone Adjustment
      </label>
      <Select>
        <SelectTrigger
          id="tone-select"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-sm"
        >
          <SelectValue placeholder="Select tone..." />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg mt-1">
          <SelectItem
            value="Professional"
            className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
          >
            Professional
          </SelectItem>
          <SelectItem
            value="Friendly"
            className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
          >
            Friendly
          </SelectItem>
          <SelectItem
            value="Formal"
            className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
          >
            Formal
          </SelectItem>
          <SelectItem
            value="Casual"
            className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
          >
            Casual
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ToneAdjustment;
