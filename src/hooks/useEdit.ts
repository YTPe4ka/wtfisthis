import { baseUrl } from '@/utils/url';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import React, { useState, useEffect } from 'react';
function useEdit<T>(url: string) {
  const [data, setData] = useState<T | null>(null); // this is to set data in edit profile
  const [error, setError] = useState<string>(''); // this is to set any error
  const [loading, setLoading] = useState<boolean>(false); // this is to set any loading
  const router = useRouter(); // this to push any page
  async function EditMyAss( // function there to call inputs
    skills: string | undefined,
    status: string | undefined,
    bio: string | undefined,
    company: string | undefined,
    githubusername: string | undefined,
    location: string | undefined,
    website?: string | undefined,// there one thing this is optional must be called in the in other options it does not work
  ) {
    try {
      setLoading(true);
      let res = await axios.post(
        baseUrl + url,
        {
          skills,
          status,
          bio,
          company,
          githubusername,
          location,
          website,
        },// there we import to backend inputs
        {
          headers: {
            'x-auth-token': `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(res.status);
      if (res.status === 200) { // there if status 200 we set data just idk its not very need thing becs we any way push user to dashboard
        setData(res.data);
        console.log(res.status);
        router.push('/dashboard'); // in perfect style here there must be toastify to show user that everything is perfect
      }
      console.log(res);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, data, EditMyAss };//there we import data function and so on
}

export default useEdit;
