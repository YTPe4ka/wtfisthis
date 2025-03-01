"use client";
import useFetch from "@/hooks/useFetch";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { User } from "./../../../interface/UserID";

function UserByID() {
  const { user_id } = useParams();
  const { loading, error, data, Profiles, user } = useFetch<User>(
    `profile/user/${user_id}`
  );
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isPending, setIsPending] = useState("");

  console.log(user);

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-blue-600 text-2xl font-bold mb-4">About User</h1>
        <h1 className="text-gray-800 text-xl font-semibold">
          User, {data?.user.name}
        </h1>
        <img className="rounded-lg" src={data?.user?.avatar} alt="" />
        <p className="text-gray-600">
          <span className="font-bold">Developer at:</span> {data?.company ?? "N/A"}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Location:</span> {data?.location ?? "Unknown"}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Bio:</span> {data?.bio ?? "No bio available"}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Skill Set:</span> {data?.skills ?? "None listed"}
        </p>
      </div>
    </div>
  );
}

export default UserByID;
