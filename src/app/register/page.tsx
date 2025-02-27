"use client"
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Login() {
    const {login,logOut,user,error,loading,Register} = useAuth() 
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
      let router = useRouter();
      if (localStorage.getItem("token")) {
        router.push("/dashboard")
      }
    const onSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
     await Register(name,email,password)
    }
    
    // if (loading) {
    //     return <h1>gay</h1>
    // }
    if (error) {
        return <h1>{error}</h1>
    }

  return (
    <div>

        <form action="" onSubmit={onSubmit}>
            <input onChange={(e) => setName(e.target.value)}   type="text" placeholder='Name plsss bro'/>
            <input onChange={(e) => setEmail(e.target.value)}   type="text" placeholder='Email Address'/>
            <input onChange={(e) => setPassword(e.target.value)}   type="password" placeholder='Password'/>
            <button>{loading?"Loading...":"Submit"}</button>
        </form>
    </div>
  )
}

export default Login