'use client'

import { request } from '@/request'
import { BASE } from '@/utils/constants'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const Post = ({title , id , description , checkDelete}) => {

  const [loading , setLoading] = useState(false)


console.log(BASE);
  const handleDelete = (del)=>{
    setLoading(true)
    request.delete(`topics/?id=${del}`)
    .then((res)=>{
      checkDelete((prev)=>!prev)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <div className='w-full py-5 px-4 flex items-center justify-between gap-4 rounded-xl'>
        <div>
          <h2 className='text-xl capitalize font-semibold'>{title}</h2>
          <p className='text-neutral-400'>{description}</p>
        </div>
        <div className='actions flex items-center gap-3'>
          <Link href={`/edit-post/${id}`} className='bg-yellow-500 text-black px-8 py-2 rounded-xl'>edit</Link>
          <button onClick={()=>handleDelete(id)} className='bg-red-500 text-white px-8 py-2 rounded-xl'>
            {
              loading? "loading..." : "remove"
            }
          </button>
        </div>
      </div>
    </>
  )
}

export default Post
