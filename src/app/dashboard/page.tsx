"use client"
import useFetch from '@/hooks/useFetch'
import { User } from '@/interface/User'
import { useRouter } from 'next/navigation'
import React from 'react'

function Dashboard() {
    const { data, loading, error } = useFetch<User>('profile/me')
    console.log(data);
          let router = useRouter();
          if (!localStorage.getItem("token")) {
            router.push("/login")
          }
    return (
    <div>
      <div className="col">
        <h1 className='text-blue-600 text-xl flex'>Dashboard</h1>
        <h1 className='text-blue-600 text-xl flex'>welcome {data?.user.name}</h1>
        <button className='text-blue-600 text-xl flex' onClick={() => router.push("/edit-profile")}>hello kitty</button>
        </div>
    </div>
  )
}

export default Dashboard