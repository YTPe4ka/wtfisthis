'use client';
import React, { useState } from 'react';
import useEdit from '@/hooks/useEdit';

function CreateProfile() {
  const { EditMyAss } = useEdit('profile');
  const [status, setStatus] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [githubusername, setGithubusername] = useState('');
  const [bio, setBio] = useState('');
  const [socials, setSocials] = useState({
    twitter: '',
    facebook: '',
    youtube: '',
    linkedin: '',
    instagram: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    EditMyAss(skills, status, bio, company, website, githubusername, location);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Create Your Profile</h1>
      <p className="text-gray-600">Add some Information to your profile</p>
      <p className="text-sm text-gray-500 mb-6">* = required field</p>
      
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <label className="block text-gray-700">* Select Professional Status</label>
        <select
          className="w-full p-2 border rounded-md mt-1"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Company"
            className="w-full p-2 border rounded-md mt-1"
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Website"
            className="w-full p-2 border rounded-md mt-3"
            onChange={(e) => setWebsite(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded-md mt-3"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="*Skills (comma separated)"
            className="w-full p-2 border rounded-md mt-3"
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            type="text"
            placeholder="GitHub Username"
            className="w-full p-2 border rounded-md mt-3"
            onChange={(e) => setGithubusername(e.target.value)}
          />
        </div>

        <textarea
          placeholder="Write a short bio about yourself"
          className="w-full p-2 border rounded-md mt-3 h-24"
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        <h2 className="text-lg font-semibold mt-4">Social Links</h2>
        {Object.keys(socials).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)} URL`}
            className="w-full p-2 border rounded-md mt-2"
            onChange={(e) => setSocials({ ...socials, [key]: e.target.value })}
          />
        ))}

        <button
          type="submit"
          className="w-full mt-6 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;
