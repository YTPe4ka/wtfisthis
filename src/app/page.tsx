"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function page() {
  let router = useRouter();
  if (localStorage.getItem("token")) {
    router.push("/dashboard")
  }
  return (
    
    <div>
      <h1>home page</h1>   
      <button onClick={() => router.push("/login")}>Login</button>
      <button onClick={() => router.push("/register")}>Register</button>
    </div>
  )
}

export default page