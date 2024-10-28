import React from "react";

const ProfilePage = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-10 ml-24">
      <div className="border-2 border-dotted border-gray-600 rounded-lg p-4 mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">1. Personal Details</h2>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Name:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Age:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Gender:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Phone No:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Email ID:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Father Name:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Address:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-black text-white rounded-lg px-4 py-2">
            Save
          </button>
        </div>
      </div>

      <div className="border-2 border-dotted border-gray-600 rounded-lg p-4 mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">
          2. Academic Qualifications
        </h2>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Degree:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Institution:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-32"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Year:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">CGPA or %:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="mt-4">
          <button className="bg-white border-2 border-black text-black rounded-lg px-4 py-2">
            Add +
          </button>
          <button className="bg-black text-white rounded-lg px-4 py-2 ml-2">
            Save
          </button>
        </div>
      </div>

      <div className="border-2 border-dotted border-gray-600 rounded-lg p-4 mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">3. Additional Courses</h2>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Title:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Institution:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Type:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Duration:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="mt-4">
          <button className="bg-white border-2 border-black text-black rounded-lg px-4 py-2">
            Add +
          </button>
          <button className="bg-black text-white rounded-lg px-4 py-2 ml-2">
            Save
          </button>
        </div>
      </div>

      <div className="border-2 border-dotted border-gray-600 rounded-lg p-4 mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">
          4. Industrial Training and Internship
        </h2>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Title:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Institution:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Duration:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Activity:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="mt-4">
          <button className="bg-white border-2 border-black text-black rounded-lg px-4 py-2">
            Add +
          </button>
          <button className="bg-black text-white rounded-lg px-4 py-2 ml-2">
            Save
          </button>
        </div>
      </div>


      <div className="border-2 border-dotted border-gray-600 rounded-lg p-4 mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">5. Projects</h2>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Title:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Guide:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Duration:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Description:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="mt-4">
          <button className="bg-white border-2 border-black text-black rounded-lg px-4 py-2">
            Add +
          </button>
          <button className="bg-black text-white rounded-lg px-4 py-2 ml-2">
            Save
          </button>
        </div>
      </div>


      <div className="border-2 border-dotted border-gray-600 rounded-lg p-4 mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">
          6. Extracurricular Activities
        </h2>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Activity:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Institution:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <label className="block w-1/3 mb-1">Duration:</label>
          <textarea
            className="w-2/3 p-1 border-2 border-gray-400 rounded-lg h-10"
            defaultValue=""
          />
        </div>
        <div className="mt-4">
          <button className="bg-white border-2 border-black text-black rounded-lg px-4 py-2">
            Add +
          </button>
          <button className="bg-black text-white rounded-lg px-4 py-2 ml-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
