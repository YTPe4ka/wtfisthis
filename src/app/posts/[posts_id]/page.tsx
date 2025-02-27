'use client';
import useFetch from '@/hooks/useFetch';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Posts } from './../../../interface/PostsID';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { User } from '@/interface/User';

function userByID() {
  const { posts_id } = useParams();
  const { userinlogin } = useAuth()
  const { loading, error, data, Profiles, user, statusofLike,  } =
    useFetch<Posts>(`posts/${posts_id}`);
    const { Like } = useFetch<Posts>(`posts/like/${posts_id}`);
    const { UnLike } = useFetch<Posts>(`posts/unlike/${posts_id}`);
    const { PostComment } = useFetch<Posts>(`posts/comment/${posts_id}`);
    const [text, setText] = useState<string>('');
  console.log(userinlogin,"фывфывфыв");
  
  console.log(user);
  console.log(posts_id);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    PostComment(text);
  };
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="col bg-white shadow-md p-4 rounded-lg">
        <button className="w-[140px] py-2 bg-[#0f3352] text-white rounded-md ">
          <Link href={`/posts`}>Back to Posts</Link>
        </button>
        <h1 className="text-blue-600 text-xl font-bold mb-4">Comments</h1>
        <img
          src={user?.avatar}
          alt={user?.name}
          className="w-24 h-24 rounded-full border mb-3"
        />
        <h1 className="text-lg font-semibold">Developer: {user?.name ?? ''}</h1>
        <h1 className="text-gray-600">Comment: {user?.text ?? ''}</h1>
        <h1 className="text-gray-500 text-sm">Date: {user?.date ?? ''}</h1>
        <button
          onClick={() => Like()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3"
        >
          {user?.likes.length || ''} 👍
        </button>
        <button
          onClick={() => UnLike()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3 ml-5"
        >
          👎
        </button>

        <h1>leave a comment </h1>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Input ur comment"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3 ml-5">Submit</button>
        </form>
        <div>
          {user?.comments.map((comment:any) => (
            <div key={comment._id}>
              <img src={comment.avatar} alt="img"  className="w-45 h-45 rounded-full border"/>
              <h1 className="text-gray-900 text-sm">{comment.name}</h1>
              <h1 className="text-gray-600 text-sm">{comment.text}</h1>
              <h1 className="text-gray-500 text-sm">Date: {comment.date}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhNDlmODI2OThkNDQwMDU2ODA4YTMyIn0sImlhdCI6MTc0MDI1MDE0MCwiZXhwIjoxNzQwNjgyMTQwfQ.RaYx_mE4cBrJqFp17OXXrWXGUsY5KtMlCwrecsUAjyA
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhNDlmODI2OThkNDQwMDU2ODA4YTMyIn0sImlhdCI6MTc0MDI1MDE0MCwiZXhwIjoxNzQwNjgyMTQwfQ.RaYx_mE4cBrJqFp17OXXrWXGUsY5KtMlCwrecsUAjyA

export default userByID;
