import React from "react";

const Resume = () => {
  return (
    <div className="p-4 ml-10 mr-10">
 
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p className="mb-6 text-gray-700">
        This section allows you to create and customize a professional resume tailored to your preferred job role. Fill out each section to build a detailed profile that showcases your skills, experience, and educational background.
      </p>

      <div className="border-2 border-dotted border-gray-600 rounded-lg p-6 mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
        <p className="text-gray-700 mb-4">Email: johndoe@example.com | Phone: (123) 456-7890</p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">Summary</h3>
          <p className="text-gray-600">
            Highly motivated and skilled professional with experience in various domains. Strong background in project management, problem-solving, and team collaboration.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">Experience</h3>
          <p className="font-semibold">Job Title - Company Name</p>
          <p className="text-gray-600">Date Range</p>
          <p className="text-gray-600 mb-2">
            Description of responsibilities, achievements, and impact.
          </p>

          <p className="font-semibold">Job Title - Another Company</p>
          <p className="text-gray-600">Date Range</p>
          <p className="text-gray-600">
            Description of responsibilities, achievements, and impact.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">Education</h3>
          <p className="font-semibold">Degree - University Name</p>
          <p className="text-gray-600">Year of Graduation</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Skills</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-white border-2 border-black text-black rounded-lg px-4 py-2 mr-2">
          Edit
        </button>
        <button className="bg-black text-white rounded-lg px-4 py-2">Save</button>
      </div>
    </div>
  );
};

export default Resume;
