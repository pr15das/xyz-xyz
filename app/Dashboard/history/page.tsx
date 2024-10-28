"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const History = () => {
  // Initialize state for selected date and entries
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [entries, setEntries] = useState<{ date: string; daily: string; activity: string; id: number }[]>([]);

  // Define some sample entries
  const sampleEntries: { [key: string]: { daily: string; activity: string } } = {
    "2024-10-28": {
      daily: "Reflected on recent Next.js project and noted improvements.",
      activity: "Completed a project in Next.js.",
    },
    "2024-10-29": {
      daily: "Focused on internship tasks and made plans for next week.",
      activity: "Started a new internship with hands-on learning.",
    },
    "2024-11-01": {
      daily: "Attended an AI seminar, gained insights on ethical AI.",
      activity: "Participated in an AI-focused seminar.",
    },
  };

  const handleSelectDate = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    setDate(selectedDate);
    const formattedSelectedDate = selectedDate.toISOString().split("T")[0];
    const existingEntry = entries.find((entry) => entry.date === formattedSelectedDate);

    if (!existingEntry) {
      const newEntry = sampleEntries[formattedSelectedDate] || {
        daily: "No entry for this date.",
        activity: "No activity for this date.",
      };

      setEntries([
        ...entries,
        {
          date: formattedSelectedDate,
          daily: newEntry.daily,
          activity: newEntry.activity,
          id: Date.now(),
        },
      ]);
    }
  };

  const handleDeleteEntry = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="p-4 flex">
      {/* Left Section for Entries */}
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-4">Your History</h1>
        <p className="mb-6">In this section, you will find all the entries that you have made.</p>
        
        {entries.map((entry) => (
          <div key={entry.id} className="p-6 border border-dotted border-gray-400 rounded-lg shadow-md mb-4 w-full">
            <h2 className="text-2xl font-semibold mb-4">Entry for {entry.date}</h2>
            
            {/* Daily Journal Section */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Daily Journal</h3>
              <p className="text-gray-700">{entry.daily}</p>
            </div>

            {/* Activity Journal Section */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Activity Journal</h3>
              <p className="text-gray-700">{entry.activity}</p>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDeleteEntry(entry.id)}
              className="px-4 py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete Entry
            </button>
          </div>
        ))}
      </div>

      {/* Right Section for Fixed Calendar */}
      <div className="hidden md:block fixed right-4 top-16 w-[300px]  mt-44 mr-48 ">
  <div className="border-dashed border-2 rounded-xl p-2 border-black ">
    <p className="tracking-tighter text-center mb-2 mt-1 text-lg ">Pick a Date</p>
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleSelectDate}
      className="w-[280px] h-[320px] rounded-md border"
    />
  </div>
</div>

    </div>
  );
};

export default History;
