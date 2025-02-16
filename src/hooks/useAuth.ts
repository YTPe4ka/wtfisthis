import { User } from '@/interface/User';
import { baseUrl } from '@/utils/url';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState<string>("")
    async function getMe() {
        let res = await axios.get( baseUrl + "auth/me")
    }
    useEffect(  () => {
        getMe();
    },[])
    async function login(email:string, password:string){}
    function logOut(){}



  return {login,logOut,user,error};
}

export default useAuth