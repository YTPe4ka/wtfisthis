'use client';
import React, { useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { User } from '@/interface/User';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Login from '../login/page';
import useEdit from '@/hooks/useEdit';

function CreateProfile() {
  // const router = useRouter();
  const { me } = useParams();
  const [AboutMe, setAboutMe] = useState<null>(null);
  const [social, setSocial] = useState<null>(null);
  const [skills, setSkills] = useState<string >("");
  const [status, setStatus] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [website, setWebsite] = useState<string>(''); //website
  const [githubusername, setGithubusername] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [useless, setUseless] = useState<string>('');
  // const { data, error,loading:loadings } = useFetch<User>('profile/me');
  const { EditMyAss, data: datas, loading } = useEdit('profile');
  // console.log(loadings,"Sdssdssssssss");
//  useEffect(() => {
//   console.log(data,"ddddddddddddddddddddddddddddddddddddddddddddd  s");
  
//   // if (data) {
//     setCompany(data?.company || '');
//     setBio(data?.bio || '');
//     setStatus(data?.status || '');
//     setSkills(data?.skills || '');
//     setWebsite(data?.website || '');
//     setGithubusername(data?.githubusername || '');
//     setLocation(data?.location || '');
//   // }
// }, [loadings]);
  // console.log(datas);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    EditMyAss(skills, status, bio, company, website, githubusername, location);
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="text-4xl">Create Your Profile</h1>
      <h2 className="text-2xl">Add some Information to your profile</h2>
      <p className="text-sm">* = required field</p>
      <form
        action=""
        onSubmit={onSubmit}
        className="flex flex-col gap-3 items-center"
      >
        <select
          id="person"
          name="person"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="* Select Professional Status">
            * Select Professional Status
          </option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="manager">manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructur or Teacher">Instructur or Teacher</option>
          <option value="Intern">Intern</option>
          <option value="other">other</option>
        </select>
        <p className="opacity-50">
          Give us an idea of where you are at in your career
        </p>
        <input
          type="text"
          placeholder="Company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <p className="opacity-50">
          Could be your own company or one you work for
        </p>
        <input
          type="text "
          placeholder="Website"
          name="website"
          onChange={(e) => setWebsite(e.target.value)}
        />
        <p className="opacity-50">Could be your own or a company website</p>
        <input
          type="text "
          placeholder="Location"
          name="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <p className="opacity-50">
          City & state suggested {`(eg. Boston, MA)`}
        </p>
        <input
          type="text "
          placeholder="*Skills"
          name="skills"
          onChange={(e) => setSkills(e.target.value)}
        />
        <p className="opacity-50">
          Please use comma separated values {`(eg. HTML,CSS,JavaScript,PHP)`}
        </p>
        <input
          type="text "
          placeholder="GitHub Username"
          name="githubusername"
          onChange={(e) => setGithubusername(e.target.value)}
        />
        <p className="opacity-50">
          If you want your latest repos and a Github link, include your username
        </p>
        <textarea
          placeholder="Write A short bio about ur self"
          name="bio"
          value={bio}
          onChange={(e: any) => setBio(e.target.value)}
        ></textarea>
        <p className="opacity-50">Tell us a little about yourself</p>
        <h1>Add about ur self</h1>
        <input
          type="text"
          placeholder="Twitter URl"
          onChange={(e) => setUseless(e.target.value)}
        />
        <input
          type="text"
          placeholder="Facebook URl"
          onChange={(e) => setUseless(e.target.value)}
        />
        <input
          type="text"
          placeholder="YouTube URl"
          onChange={(e) => setUseless(e.target.value)}
        />
        <input
          type="text"
          placeholder="Linkedin URl"
          onChange={(e) => setUseless(e.target.value)}
        />
        <input
          type="text"
          placeholder="Instagram URl"
          onChange={(e) => setUseless(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CreateProfile;
