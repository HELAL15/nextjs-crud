import { useRouter } from 'next/navigation'
import React from 'react'

const Form = ({handleSubmit , data , handleChange  }) => {


  return (
    <>
      <form onSubmit={handleSubmit}>
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
            <button  className='bg-blue-500 text-white px-8 py-2 rounded-xl mt-5'>Add</button>
          </form>
    </>
  )
}

export default Form
