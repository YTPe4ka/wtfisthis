import { baseUrl } from '@/utils/url';
import axios from 'axios';
import Router from 'next/router';
import React, { useState, useEffect } from 'react';
function useEdit<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function EditMyAss(
    skills: string[] | undefined,
    status: string | undefined,
    bio: string | undefined,
    company: string | undefined,
    githubusername: string | undefined,
    location: string | undefined,
    website?: string | undefined,
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
        },
        {
          headers: {
            'x-auth-token': `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (res.status === 201) {
        Router.push('/dashboard');
        setData(res.data);
      }
      console.log(res);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, data, EditMyAss };
}

export default useEdit;
