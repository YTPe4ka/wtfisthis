"use client"
import useFetch from '@/hooks/useFetch';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { User } from './../../../interface/UserID';

function userByID() {
  const { user_id } = useParams();
  const { loading, error, data, Profiles, user } = useFetch<User>(`profile/user/${user_id}`);
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isPending, setIsPending] = useState('');

  console.log(user);

  return (
    <div>
    <div className="col">
      <h1 className='text-blue-600 text-xl flex'>Dashboard</h1>
      <h1 className='text-blue-600 text-xl flex'>welcome {data?.user.name}</h1>
      <h1>developer at {data?.company ?? ""}</h1>
      <h1>Location {data?.location ?? ""}</h1>
      <h1>nos Bio {data?.bio ?? ""}</h1>
      <h1>Skill Set {data?.skills ?? ""}</h1>
      
      </div>
  </div>
  )
}

export default userByID
