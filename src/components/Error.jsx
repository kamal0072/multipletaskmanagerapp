import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div  className='p-3'>
      <h1 className='text-red-500 my-3'>Page Not Found... please check you code again.. </h1>
      <Link to="/" className='text-green-400 border-3 border-green-400 p-2 hover:bg-violet-400'>Go to Home</Link>
    </div>
  )
}
