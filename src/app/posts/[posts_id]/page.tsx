'use client';
import useFetch from '@/hooks/useFetch';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { Posts } from './../../../interface/PostsID';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { User } from '@/interface/User';
import useFunction from '@/hooks/useFunction';

function UserByID() {
  const { posts_id } = useParams();
  const { userinlogin } = useAuth();
  const { loading, error, data, Profiles, user, statusofLike } =
    useFetch<Posts>(`posts/${posts_id}`);
  const { data: datas, loading: wtfisthis, error: uzbeksila, statusofuser } =
    useFetch<User>('profile/me');

  const { Like } = useFunction<Posts>(`posts/like/${posts_id}`);
  const { UnLike } = useFunction<Posts>(`posts/unlike/${posts_id}`);
  const { PostComment } = useFunction<Posts>(`posts/comment/${posts_id}`);
  const [text, setText] = useState<string>('');

  console.log(userinlogin, 'фывфывфыв');
  console.log(user);
  console.log(posts_id);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    PostComment(text);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <button className="w-[140px] py-2 bg-[#0f3352] text-white rounded-md mb-4">
          <Link href={`/post`}>Back to Posts</Link>
        </button>
        <h1 className="text-blue-600 text-2xl font-bold mb-4">Comments</h1>
        <div className="flex items-center mb-4">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-16 h-16 rounded-full border"
          />
          <div className="ml-4">
            <h1 className="text-lg font-semibold">{user?.name ?? 'Unknown'}</h1>
            <p className="text-gray-600">{user?.text ?? 'No comment'}</p>
            <p className="text-gray-500 text-sm">{user?.date ?? 'Unknown date'}</p>
          </div>
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => Like()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            👍 {user?.likes.length || 0}
          </button>
          <button
            onClick={() => UnLike()}
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            👎
          </button>
        </div>
        <h1 className="text-lg font-semibold mb-2">Leave a comment</h1>
        <form onSubmit={onSubmit} className="mb-6">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Input your comment"
            className="w-full p-2 border rounded-md"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3">
            Submit
          </button>
        </form>
        <div>
          {user?.comments.map((comment: any) => (
            <div key={comment._id} className="border-b py-3">
              <div className="flex items-center">
                <img
                  src={comment.avatar}
                  alt="img"
                  className="w-12 h-12 rounded-full border"
                />
                <div className="ml-3">
                  <h1 className="text-gray-900 text-sm font-semibold">{comment.name}</h1>
                  <p className="text-gray-600 text-sm">{comment.text}</p>
                  <p className="text-gray-500 text-xs">Date: {comment.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserByID;
