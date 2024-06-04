import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <div className='w-full md:w-3/4 lg:w-1/2 bg-gray-500/50 py-5 mx-auto mt-10 px-4 flex items-center justify-between gap-4 rounded'>
          <h1 className='text-2xl font-bold capitalize'>helal list</h1>
          <Link href="/add-post" className='bg-white text-black px-8 py-2 rounded-xl'>add post</Link>
        </div>
      </header>
    </>
  )
}

export default Header
