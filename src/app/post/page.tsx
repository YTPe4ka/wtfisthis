'use client';
import React, { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';
import { User } from '@/interface/User';
import { Posts } from '@/interface/PostsID';
import useFunction from '@/hooks/useFunction';
function page() {
  const { loading, error, data, Profiles, user, posts } =
    useFetch<Posts | null>('posts');

  const { DeleteMyPost } = useFunction<Posts | null>("posts/");
  const {
    data: datas,
    loading: wtfisthis,
    error: uzbeksila,
    statusofuser,
  } = useFetch<User | null>('profile/me');
  console.log(posts);
  console.log(datas);
  const { PostComment } = useFunction<Posts | null>(`posts`);
  const [text, setText] = useState<string>('');

    const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      PostComment(text);
    };
















  return (
    <div className="px-16">
      <h1 className="font-bold text-[50px] leading-[60px] text-[#0f3352] pt-8">
        Posts
      </h1>
      <h2 className="text-[#343a40] text-lg pt-3">Welcome to the community</h2>

      <form onSubmit={onSubmit} className="mb-6">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your Post"
            className="w-full p-2 border rounded-md"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3">
            Submit
          </button>
        </form>




      <div className="my-6">
        {posts?.length ? (
          <ul className="space-y-4">
            {data?.map((posts: any) => (
              <li
                key={posts._id}
                className="p-4 pr-20 border rounded-md shadow-sm bg-white flex justify-between"
              >
                <div className="flex gap-10">
                  <div className="py-6 w-[150px] rounded-full">
                    <img
                      src={posts.avatar}
                      alt={posts.name}
                      className="w-[150px] rounded-full"
                    />
                    <span className="text-xl text-sky-400">{posts.name}</span>
                  </div>

                  <div className="py-6 flex flex-col gap-3">
                    <h3 className="font-bold text-2xl"></h3>
                    <p className="text-lg col flex">
                      {posts.text} {`posted on ${posts.date}`}{' '}
                      {posts.likes.length + ' likes'}
                    </p>
                    {posts.location && (
                      <i className="text-lg">{posts.location}</i>
                    )}
                    <button className="w-[140px] py-2 bg-[#0f3352] text-white rounded-md ">
                      <Link href={`/posts/${posts._id}`}>Discussion</Link>
                    </button>
                    {datas && datas.user._id === posts.user ? (
                      <button
                        className="w-[140px] py-2 bg-[#0f3352] text-white rounded-md ml-4"
                        onClick={() => DeleteMyPost(posts._id)}
                      >
                        Delete
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No developers found.</p>
        )}
      </div>
    </div>
  );
}

export default page;
