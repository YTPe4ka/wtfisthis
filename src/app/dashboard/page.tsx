'use client';
import useFetch from '@/hooks/useFetch';
import { User } from '@/interface/User';
import { useRouter } from 'next/navigation';
import React from 'react';

function Dashboard() {
  const { data, loading, error, statusofuser } = useFetch<User>('profile/me');
  console.log(data);
  let router = useRouter();
  if (!localStorage.getItem('token')) {
    router.push('/login');
  }
  return (
    <div>
      {statusofuser ? (
        <div className="col">
          <h1 className="text-blue-600 text-xl flex">Dashboard</h1>
          <h1 className="text-blue-600 text-xl flex">
            welcome {data?.user.name}
          </h1>
          <button
            className="text-blue-600 text-xl flex"
            onClick={() => router.push('/edit-profile')}
          >
            Edit Proifle
          </button>
        </div>
      ) : (

        <div className="col">
        <h1 className="text-blue-600 text-xl flex">Dashboard</h1>
        <h1 className="text-blue-600 text-xl flex">
          welcome Ghost
        </h1>
        <p className="opacity-50" >Keep in mind WithOut Creating Profile Others cant See Ur Profile</p>
        <button
          className="text-blue-600 text-xl flex"
          onClick={() => router.push('/create-profile')}
        >
          Create account
        </button>
      </div>
      )}
    </div>
  );
}

export default Dashboard;
