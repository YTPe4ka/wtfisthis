'use client';
import useFetch from '@/hooks/useFetch';
import useFunction from '@/hooks/useFunction';
import { Book } from '@/interface/User';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

function BookDetail() {
  const { book_id } = useParams();
  const router = useRouter();
  const { data, loading, error } = useFetch<Book | null>(`books/book/${book_id}`);
  const [want, setWant] = useState<boolean>(false);

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const { PostBook } = useFunction<Book | null>(`books/book/${book_id}`);

  if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
    router.push('/login');
  }

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  if (error || !data) return <p className="text-center mt-10 text-red-500">Book not found.</p>;
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    PostBook(name,author,publisher);
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">{data.name}</h1>
        <p className="text-gray-800 text-lg mb-1">✍️ Author: {data.author}</p>
        <p className="text-gray-700 mb-1">🏢 Publisher: {data.publisher}</p>
        <p className="text-gray-700 mb-1">📦 Quantity In Library: {data.quantity_in_library}</p>

        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>

        <button
          onClick={() => setWant(!want)}
          className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Want some changes?
        </button>

        {want && (
          <form onSubmit={onSubmit} className="mt-6 flex flex-col items-start gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Author"
              className="w-full p-2 border border-gray-300 rounded"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Publisher"
              className="w-full p-2 border border-gray-300 rounded"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            //   onClick={(e) => {
            //     e.preventDefault();
            //     console.log({ name, author, publisher });
            //     // Тут ты можешь отправить PATCH/PUT запрос
            //   }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default BookDetail;
