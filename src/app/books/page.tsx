'use client';
import useFetch from '@/hooks/useFetch';
import useFunction from '@/hooks/useFunction';
import { Book } from '@/interface/books';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function BooksDashboard() {
  const { data, loading, error } = useFetch<Book[] | null>('books/books');
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const { DeleteBook } = useFunction<Book | null>("books/book/");
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const { PostBook } = useFunction<Book | null>(`books/books/`);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    PostBook(name,author,publisher);
  };

  if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
    router.push('/login');
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Верхняя карточка с общей инфой и кнопкой */}
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Books</h1>
        <p className="text-gray-800 text-lg">Welcome to our collection</p>
        <p className="text-gray-700 mb-4">Total books: {Array.isArray(data) ? data.length : 0}</p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Want Post a New Book?
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-start gap-4">
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
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {/* Мап по книгам */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {Array.isArray(data) &&
          data.map((book) => (
            <div
              key={book.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-1">{book.name}</h2>
              <p className="text-gray-600">✍️ Author: {book.author}</p>
              <p className="text-gray-600">🏢 Publisher: {book.publisher}</p>
              <p className="text-gray-600">📦 In Library: {book.quantity_in_library}</p>
              <button
                onClick={() => router.push(`/book/${book.id}`)}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Read More
              </button>
              <button
                onClick={() => DeleteBook(book.id)}
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BooksDashboard;
