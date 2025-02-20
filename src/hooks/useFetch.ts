import { baseUrl } from '@/utils/url'
import axios from 'axios'
import React, { useState,useEffect } from 'react'

function useFetch<T>(url:string) {
  const [data, setData] = useState<T | null>(null)
  const [Profiles, setProfiles] = useState<T | undefined>(undefined)
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)



  async function getMe(){
    try {
      setError("")
      setLoading(true)
        let res = await axios.get(baseUrl + url,{
          headers :{
            "x-auth-token":`${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
          }
        })
        setData(res.data)
    } catch (error: any) {
        setError(error.message)
    }finally{
      setLoading(false)
    }
  }
  

  useEffect(() => {
    getMe()
    GetProfiles()
  },[url]);
  
  
  
 async function GetProfiles() {
          try {
            setLoading(true)
            let res = await axios.get(baseUrl + url,{ 
              headers:{
                "Content-Type": "application/json"
              }
            })
            setProfiles(res.data)
            console.log(res);
            
          } catch (error:any) {
            setError(error.massage)
            setLoading(false)
          }finally {
            setLoading(false)
          }
 }
  
  

  
  
  
  
  
  
  
    return {loading,error,data,Profiles}
}

export default useFetch