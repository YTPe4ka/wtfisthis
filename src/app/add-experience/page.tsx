import React from "react";

const AddExperience = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-teal-600">Add An Experience</h1>
      <p className="text-gray-600 flex items-center gap-2 mt-2">
        <span>⚙️</span> Add any developer/programming positions that you have had in the past
      </p>
      <p className="text-red-500 mt-1">* = required field</p>
      
      <form className="mt-4 space-y-4">
        <input type="text" placeholder="* Job Title" className="w-full p-2 border rounded-md" required />
        <input type="text" placeholder="* Company" className="w-full p-2 border rounded-md" required />
        <input type="text" placeholder="Location" className="w-full p-2 border rounded-md" />
        
        <div className="flex flex-col">
          <label className="text-gray-700">From Date</label>
          <input type="date" className="p-2 border rounded-md" />
        </div>
        
        <div className="flex items-center gap-2">
          <input type="checkbox" id="currentJob" className="w-4 h-4" />
          <label htmlFor="currentJob" className="text-gray-700">Current Job</label>
        </div>
        
        <div className="flex flex-col">
          <label className="text-gray-700">To Date</label>
          <input type="date" className="p-2 border rounded-md" />
        </div>
        
        <textarea placeholder="Job Description" className="w-full p-2 border rounded-md h-28"></textarea>
        
        <div className="flex gap-4">
          <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-md">Отправить</button>
          <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-md">Go Back</button>
        </div>
      </form>
    </div>
  );
};

export default AddExperience;
