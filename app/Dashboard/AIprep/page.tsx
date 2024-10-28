import React from "react";

const AIprep = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">AI Powered Interview Prep</h1>
      <p className="mb-6">
        This section is designed to help you prepare effectively for your interviews. Here, you will find customized resume suggestions tailored to the job role you are applying for, along with pointers and documents to support your preparation. Make the most of these resources to present yourself as the best candidate for the position.
      </p>

      
      <div className="border-2 border-dotted border-gray-400 rounded-lg p-4 shadow-lg mb-8 ml-6 mr-6">
        <div className="mb-4">
          <h2 className="font-semibold">Job Title</h2>
          <textarea
            className="w-full h-10 border border-gray-300 rounded-md p-2"
            placeholder="Enter job title here..."
          />
        </div>

        <div className="mb-4">
          <h2 className="font-semibold">Job Roles</h2>
          <textarea
            className="w-full h-20 border border-gray-300 rounded-md p-2"
            placeholder="Enter job roles here..."
          />
        </div>

        <div className="mb-4">
          <h2 className="font-semibold">Job Description</h2>
          <textarea
            className="w-full h-32 border border-gray-300 rounded-md p-2"
            placeholder="Enter job description here..."
          />
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800">
            Generate
          </button>
          <button className="bg-white text-black border border-black rounded px-4 py-2 hover:bg-gray-100">
            Clear
          </button>
        </div>
      </div>

      
      <div className="flex gap-8">
        <div className="border-2 border-dotted border-yellow-500 rounded-lg p-6 flex-1 shadow-lg h-80 ml-6 ">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <p>This is your resume best tailored for this job.</p>
          <p className="mt-6 text-gray-600">
            - Experience tailored to job role<br />
            - Relevant skills highlighted<br />
            - Achievements in similar roles<br />
            - Additional certifications and soft skills<br />
            - Leadership and team collaboration experience
          </p>
        </div>

        <div className="border-2 border-dotted border-red-400 rounded-lg p-6 flex-1 shadow-lg h-80 mr-6">
          <h2 className="text-2xl font-semibold mb-4">Prep Notes</h2>
          <p>Sample notes for interview preparation:</p>
          <ul className="mt-6 list-disc pl-5 text-gray-600">
            <li>Research company history, mission, and values.</li>
            <li>Practice responses to behavioral interview questions.</li>
            <li>Align past experiences with role responsibilities.</li>
            <li>Review key skills and tools mentioned in the job post.</li>
            <li>Prepare questions to ask the interviewer.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIprep;
