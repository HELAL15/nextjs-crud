'use client'


import React, { useEffect, useState } from 'react';
import { request } from '@/request';
import { useRouter } from 'next/navigation';

const UpdatePost = ({params}) => {

  const router = useRouter()


  const { id } = params

  const [data, setData] = useState({
    newTitle: '',
    newDesc: ''
  });

  // useEffect(() => {
  //   if (id) {
  //     axios.get(`topics?id=${id}`)
  //       .then((res) => {
  //         setData(res.data.topic);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching current data:', error);
  //       });
  //   }
  // }, [id]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    request.put(`topics/${id}`, data)
      .then((res) => {
        console.log(res);
        setData({
          newTitle: '',
          newDesc: ''
        })
        router.push('/')
      })
      .catch((err) => {
        console.error('Error updating post:', err);
      });
  };

  return (
    <section>
      <div className='w-full md:w-3/4 lg:w-1/2 bg-gray-500/50 py-5 mx-auto mt-10 px-4 flex flex-col gap-3 rounded'>
        <h1 className='text-2xl font-semibold capitalize'>Update post</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-3'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              className='py-2 px-3 rounded border border-gray-300'
              name="newTitle"
              value={data.newTitle}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              className='py-2 px-3 rounded border border-gray-300'
              name="newDesc"
              value={data.newDesc}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='bg-blue-500 text-white px-8 py-2 rounded-xl mt-5'>Update</button>
        </form>
      </div>
    </section>
  );
}

export default UpdatePost;
