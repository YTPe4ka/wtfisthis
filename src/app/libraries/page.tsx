'use client';
import useFetch from '@/hooks/useFetch';
import { User } from '@/interface/User';
import { useRouter } from 'next/navigation';
import React from 'react';

function Dashboard() {
  const { data, loading, error, statusofuser } = useFetch<User | null>('libraries/libraries');
  const router = useRouter();

  if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
    router.push('/login');
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Верхняя карточка с общими данными */}
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Libraries</h1>
        <p className="text-gray-800 text-lg">Welcome To Our Libraries store</p>
        <p className="text-gray-700">count of our books: {Array.isArray(data) ? data.length : 0}</p>
      </div>

      {/* Mап по библиотекам */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {Array.isArray(data) &&
          data.map((library: any) => (
            <div
              key={library.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-1">{library.name}</h2>
              <p className="text-gray-600">📍 {library.address}</p>
              <p className="text-gray-600">📚 Books: {library.total_books}</p>
              <button onClick={() => router.push(`/library/${library.id}`)} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Read Books
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
