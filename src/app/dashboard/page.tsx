'use client';
import useFetch from '@/hooks/useFetch';
import { User } from '@/interface/User';
import { useRouter } from 'next/navigation';
import React from 'react';

function Dashboard() {
  const { data, loading, error, statusofuser,can_rent_books,location } = useFetch<User>('auth/profile/');
  let router = useRouter();
  
  if (!localStorage.getItem('token')) {
    router.push('/login');
  }
  console.log(data);
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-md p-6 rounded-lg w-96 text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Dashboard</h1>
      <>
            <h1 className="text-lg font-semibold text-gray-800">
              Welcome To Our Library 
            </h1>
            <h1>Ur Location: {statusofuser ? (location) : ("....")}</h1>
            <h1>Can u rent A book: {statusofuser ? (can_rent_books ? (<p>Yes</p>) : (<p>No</p>)) : "...."} </h1>
            <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition' onClick={() => router.push('/libraries') }>Libraries</button>
            <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition' onClick={() => router.push('/books') }>Books</button>
          </>
          </div>
    </div>
  )
}

export default Dashboard