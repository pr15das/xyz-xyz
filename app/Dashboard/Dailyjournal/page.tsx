
import NumberTicker from "@/components/ui/number-ticker";
import React from "react";


const Dailyjournal = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Daily Journal</h1>
      <p className="mb-4">
        Keeping a daily journal can help you reflect on your experiences,
        improve your writing skills, and track your progress over time.
        Documenting your daily activities and learnings can be a valuable asset
        when building your resume, showcasing your ability to articulate
        thoughts and reflect on personal growth.
      </p>

      <div className="flex items-between gap-28 mt-10 ">
        <div className="border-2 border-dotted border-gray-400 rounded-lg p-4 flex-grow mr-4 shadow-lg">
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

          <div className="flex justify-between mt-4">
            <button className="bg-white text-black border border-gray-300 rounded px-4 py-2 hover:bg-gray-100">
              Add+
            </button>
            <button className="bg-black text-white rounded px-4 py-2">
              Save
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 mr-20 mt-28 mb-28 ring-1 ring-yellow-400 rounded-3xl  xl:p-10 shadow-xl ">
          <p className="whitespace-pre-wrap text-8xl  mt-4 font-medium tracking-tighter text-black dark:text-white">
            <NumberTicker value={75} />
          </p>
          <p className="flex items-center text-2xl font-bold">my streak</p>
        </div>
      </div>
    </div>
  );
};

export default Dailyjournal;
