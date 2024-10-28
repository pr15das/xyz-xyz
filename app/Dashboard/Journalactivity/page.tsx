import NumberTicker from "@/components/ui/number-ticker";
import React from "react";

const Journalactivity = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Activity Journal</h1> 
      <p className="mb-4">
        Documenting specific activities like internships, seminars, and workshops helps track your progress, experiences, and key learnings, which will allow us to create curated resumes and personalized interview prep reports.
      </p>

      <div className="flex items-between gap-28 mt-10">
        <div className="border-2 border-dotted border-gray-400 rounded-lg p-4 flex-grow mr-4 shadow-lg">
            <p className="font-bold mb-5">Internship</p>
          <div className="mb-4">
            <h2 className="font-semibold">Title</h2>
            <textarea
              className="w-full h-12 border border-gray-300 rounded-md p-2"
              placeholder="Enter title here..."
            />
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Description</h2>
            <textarea
              className="w-full h-24 border border-gray-300 rounded-md p-2"
              placeholder="Enter description here..."
            />
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Key Learnings</h2>
            <textarea
              className="w-full h-24 border border-gray-300 rounded-md p-2"
              placeholder="Enter key learnings here..."
            />
          </div>

          <div className=" mt-4">
            <button className="bg-white text-black border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 mr-2">
              Add+
            </button>
            <button className="bg-black text-white rounded px-4 py-2 mr-2">
              Save
            </button>
            <button className="text-red-600 border border-red-600 rounded px-4 py-2 hover:bg-red-100">
              End Activity
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 mr-20 mt-28 mb-28 ring-1 ring-yellow-400 rounded-3xl xl:p-10 shadow-xl">
          <p className="whitespace-pre-wrap text-8xl mt-4 font-medium tracking-tighter text-black dark:text-white">
            <NumberTicker value={75} />
          </p>
          <p className="flex items-center text-2xl font-bold">My Streak</p>
        </div>
      </div>
    </div>
  );
};

export default Journalactivity;
