'use client';
import React, { useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { User } from '@/interface/User';
import useEdit from '@/hooks/useEdit';

function EditProfile() {
  const { data, loading } = useFetch<User>('profile/me');
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

  useEffect(() => {
    if (data) {
      setCompany(data.company || '');
      setBio(data.bio || '');
      setStatus(data.status || '');
      setSkills(data.skills || '');
      setWebsite(data.website || '');
      setGithubusername(data.githubusername || '');
      setLocation(data.location || '');
    }
  }, [loading]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    EditMyAss(skills, status, bio, company, website, githubusername, location);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Edit Your Profile</h1>
      <p className="text-gray-600">Modify your profile details</p>
      <p className="text-sm text-gray-500 mb-6">* = required field</p>

      <form onSubmit={onSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <label className="block text-gray-700">* Select Professional Status</label>
        <select
          className="w-full p-2 border rounded-md mt-1"
          value={status}
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
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Website"
            className="w-full p-2 border rounded-md mt-3"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded-md mt-3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="*Skills (comma separated)"
            className="w-full p-2 border rounded-md mt-3"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            type="text"
            placeholder="GitHub Username"
            className="w-full p-2 border rounded-md mt-3"
            value={githubusername}
            onChange={(e) => setGithubusername(e.target.value)}
          />
        </div>

        <textarea
          placeholder="Write a short bio about yourself"
          className="w-full p-2 border rounded-md mt-3 h-24"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        <h2 className="text-lg font-semibold mt-4">Social Links</h2>
        {Object.keys(socials).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)} URL`}
            className="w-full p-2 border rounded-md mt-2"
            value={socials[key as keyof typeof socials]}
            onChange={(e) =>
              setSocials({ ...socials, [key]: e.target.value })
            }
          />
        ))}

        <button
          type="submit"
          className="w-full mt-6 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
