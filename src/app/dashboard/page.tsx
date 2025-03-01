'use client';
import useFetch from '@/hooks/useFetch';
import useFunction from '@/hooks/useFunction';
import { User } from '@/interface/User';
import { useRouter } from 'next/navigation';
import React from 'react';

function Dashboard() {
  const { data, loading, error, statusofuser } = useFetch<User>('profile/me');
  console.log(data);
  let router = useRouter();
  const {DeleteMyAccount} = useFunction<User>('profile')

  if (!localStorage.getItem('token')) {
    router.push('/login');
  }
  console.log(statusofuser);
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-6 rounded-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Dashboard</h1>

        {statusofuser ? (
          <>
            <h1 className="text-lg font-semibold text-gray-800">
              Welcome, {data?.user.name}
            </h1>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => router.push('/edit-profile')}
            >
              Edit Profile
            </button>
            <button className='mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition' onClick={() => DeleteMyAccount()}>Delete My Account</button>
          </>
        ) : (
          <>
            <h1 className="text-lg font-semibold text-gray-800">Welcome, Ghost</h1>
            <p className="text-sm text-gray-500 mt-2">
              Keep in mind: Without creating a profile, others can't see your profile.
            </p>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => router.push('/create-profile')}
            >
              Create Account
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
