import { baseUrl } from '@/utils/url'
import axios from 'axios'
import React, { useState,useEffect } from 'react'

function useFetch<T>(url:string) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)



  async function getMe(){
    try {
      setError("")
      setLoading(true)
        let res = await axios.get(baseUrl + "auth/me")
        setData(res.data)
    } catch (error: any) {
        setError(error.message)
    }finally{
      setLoading(false)

    }
  }
  

  useEffect(() => {
    getMe()
  },[url]);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    return {loading,error,data}
}

export default useFetch