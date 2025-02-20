"use client"
import { useRouter } from 'next/router';
import React from 'react'

function Register() {
      let router = useRouter();
      if (localStorage.getItem("token")) {
        router.push("/dashboard")
      }
  return (
    <div>Register</div>
  )
}

export default Register