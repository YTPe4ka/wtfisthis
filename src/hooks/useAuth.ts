"use client";
import { User } from '@/interface/User';
import { baseUrl } from '@/utils/url';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function useAuth() {
    const [userinlogin, setUserinLogin] = useState<User | null>(null) // this is to set user
    const [error, setError] = useState<string>("")// this to set error
    const [loading, setLoading] = useState<boolean>(false) // this to set loading 
    const router = useRouter()//this is to push user when status is perfect


    ///////////////////////////////////////
    async function getMe() {
        try {
            // setLoading(true)
            setError("")
            let res = await axios.get( baseUrl + "auth/me",{
                headers:{
                    'x-auth-token': `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',

                }
            })
            setUserinLogin(res.data)
        } catch (error:any) {
            setError(error.message)
        }finally{
        setLoading(false)
        }
       
    }
    ///////////////////////////////////////

    useEffect(  () => {
        getMe();
    },[])

    ///////////////////////////////////////

    async function login(email:string, password:string){

        try {
            let res = await axios.post(baseUrl + "auth",{
                email,
                password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.status === 200) {
                router.push("/dashboard")
                localStorage.setItem ("token",res.data.token)
            }
            console.log(res);
        } catch (error:any) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    ///////////////////////////////////////
    async function Register(name:string,email:string, password:string,){
        try {
            let res = await axios.post(baseUrl + "users",{
                name,
                email,
                password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.status);
            
            if (res.status === 200) {
                router.push("/dashboard")
                localStorage.setItem ("token",res.data.token)
            }
            console.log(res);
        } catch (error:any) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    ///////////////////////////////////////

    function logOut(){
        // logOut function realized in 
    }



  return {login,logOut,userinlogin,error,loading,Register};
}

export default useAuth