import React, { useState } from "react";

function getCurrentDateTimeLocal() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - offset * 60 * 1000);
  return localDate.toISOString().slice(0, 16);
}

function DateTimeSchedule() {
  const [sendDate, setSendDate] = useState(getCurrentDateTimeLocal());

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6 mt-8 flex flex-col gap-4 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        Schedule Send
      </h2>
      <div className="w-full">
        <label
          htmlFor="sendDate"
          className="block text-gray-600 mb-1 font-medium"
        >
          Select Date & Time
        </label>
        <input
          type="datetime-local"
          id="sendDate"
          value={sendDate}
          onChange={(e) => setSendDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-sm text-gray-700 bg-gray-50"
        />
      </div>
    </div>
  );
}

export default DateTimeSchedule;
