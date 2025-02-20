"use client"
import React, { useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
import { User } from '@/interface/User'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Login from '../login/page';
import useEdit from '@/hooks/useEdit';

function EditProfile() {
  // const router = useRouter();
  const { me } = useParams();
  const [AboutMe, setAboutMe] = useState<null>(null);
  const [social, setSocial] = useState<null>(null);
  const [skills, setSkills] = useState<string[] | undefined>([]);
  const [status, setStatus] = useState<string | undefined>("");
  const [bio, setBio] = useState<string | undefined>("");
  const [company, setCompany] = useState<string | undefined>("");
  const [website, setWebsite] = useState<string | undefined>(""); //website
  const [githubusername, setGithubusername] = useState<string | undefined>("");
  const [location, setLocation] = useState<string | undefined>("");
  const [useless, setUseless] = useState<string | undefined>("");
  const { data, loading, error } = useFetch<User>('profile/me')
  useEffect(()=>{
    setCompany(data?.company)
    setBio(data?.bio ?? "")
    setStatus(data?.status)
    setSkills(data?.skills)
    setWebsite(data?.website ?? "")
    setGithubusername(data?.githubusername ?? "")
    setLocation(data?.location ?? "")
  },[loading])
  console.log(data?.company);
  
  const { EditMyAss,data:datas } = useEdit("profile")
  // console.log(datas);
  
const onSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        EditMyAss(skills,status,bio,company,website,githubusername,location,)
      }


  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="text-4xl">Edit Your Profile</h1>
      <h2 className="text-2xl">Add some changes to your profile</h2>
      <p className="text-sm">* = required field</p>
      <form
        action=""
        onSubmit={onSubmit}
        className="flex flex-col gap-3 items-center"
      >
        <select
          id="person"
          name="person"
          value={data?.status || ""}
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
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <p className="opacity-50">
          Could be your own company or one you work for
        </p>
        <input
          type="text "
          placeholder="Website"
          name="website"
          value={data?.website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <p className="opacity-50">Could be your own or a company website</p>
        <input
          type="text "
          placeholder="Location"
          name="location"
          value={data?.location || ""}
          onChange={(e) => setLocation(e.target.value)}
        />
        <p className="opacity-50">
          City & state suggested {`(eg. Boston, MA)`}
        </p>
        <input
          type="text "
          placeholder="*Skills"
          name="skills"
          value={data?.skills || ""}
          onChange={(e) => setSkills([e.target.value])}
        />
        <p className="opacity-50">
          Please use comma separated values {`(eg. HTML,CSS,JavaScript,PHP)`}
        </p>
        <input
          type="text "
          placeholder="GitHub Username"
          name="githubusername"
          value={data?.githubusername || ""}
          onChange={(e) => setGithubusername(e.target.value)}
        />
        <p className="opacity-50">
          If you want your latest repos and a Github link, include your username
        </p>
        <textarea
          placeholder="Write A short bio about ur self"
          name="bio"
          value={data?.bio || ""}
          onChange={(e:any) => setBio(e.target.value)}
        ></textarea>
        <p className="opacity-50">Tell us a little about yourself</p>
        <h1>Add about ur self</h1>
        <input type="text" placeholder="Twitter URl"  onChange={(e) => setUseless(e.target.value)}/>
        <input type="text" placeholder="Facebook URl" onChange={(e) => setUseless(e.target.value)}/>
        <input type="text" placeholder="YouTube URl" onChange={(e) => setUseless(e.target.value)}/>
        <input type="text" placeholder="Linkedin URl" onChange={(e) => setUseless(e.target.value)}/>
        <input type="text" placeholder="Instagram URl" onChange={(e) => setUseless(e.target.value)}/>

        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default EditProfile