
'use client'

import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import { request } from '@/request'




const Posts = () => {

  const [data , setData] = useState([])
  const [loading , setLoading] = useState(false)
  const [isDeleted , setIsDeleted] = useState(false)

useEffect(()=>{
  const getData = async () =>{
    try{
      setLoading(true)
      const res = await request.get("topics/")
      setLoading(false)
      // setIsDeleted((prev)=>!prev)
        setData(res.data.topics)
      
    }catch(error){
      console.log(error);
    }
  }

  getData()

},[isDeleted])

console.log(data);

  return (
    <>
      <section className=''>
        <div className='w-full md:w-3/4 lg:w-1/2 bg-gray-500/50 py-5 mx-auto mt-10 px-4 flex flex-col gap-3 rounded'>
        {loading ? (
          <div className='text-3xl font-bold text-center py-5'>loading...</div>
        ) : data && data.length > 0 ? (
          data.map((topic) => (
            <Post
              title={topic.title}
              key={topic._id}
              description={topic.description}
              id={topic._id}
              checkDelete={setIsDeleted}
            />
          ))
        ) : (
          <div className='text-3xl font-bold text-center py-5'>No Posts</div>
        )}
        </div>
      </section>
    </>
  )
}

export default Posts
