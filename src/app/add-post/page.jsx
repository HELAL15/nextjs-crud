'use client'

import Form from '@/components/Form';
import { request } from '@/request';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const AddPost = () => {

  // const router = useRouter()

  const [res , setRes] = useState(null)

  const [data, setData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    request.post("topics", data)
      .then((res) => {
        setData({
          title: "",
          description: ""
        });
        // router.push('/')
      })
      .catch((err) => {
        console.error('Error adding post:', err);
      });
  };

  return (
    <>
      <section>
        <div className='w-full md:w-3/4 lg:w-1/2 bg-gray-500/50 py-5 mx-auto mt-10 px-4 flex flex-col gap-3 rounded'>
          <h1 className='text-2xl font-semibold capitalize'>add post here</h1>
          {/* <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                className='py-2 px-3 rounded border border-gray-300'
                name="title"
                value={data.title}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                className='py-2 px-3 rounded border border-gray-300'
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </div>
            <button className='bg-blue-500 text-white px-8 py-2 rounded-xl mt-5'>Add</button>
          </form> */}
          <Form handleChange={handleChange} handleSubmit={handleSubmit} data={data} setData={setData} res={res} />
        </div>
      </section>
    </>
  );
}

export default AddPost;
