import React from 'react'

const Navigation = () => {
  return (
    
    <div className=' flex items-center justify-between w-full bg-black h-20 text-white fixed'>
       <h1 className=' px-9 py-4 text-3xl font-irish ml-2' >Abhishek Das </h1>
  <div className=' flex mr-10'>
    <ul className=' flex space-x-16  mr-10 px-2'>
      <li>
        <a href="" className='text-2xl'>Home</a>
      </li>
      <li>
        <a href="" className='text-2xl' >Experiance</a>
      </li>
      <li>
        <a href=""  className='text-2xl' >Skill</a>
      </li>
      <li>
        <a href="" className='text-2xl' >About</a>
      </li>
      <li>
        <a href="" className='text-2xl'  >Contact</a>
      </li>
    
    </ul>
  </div>
    </div>
  )
}

export default Navigation