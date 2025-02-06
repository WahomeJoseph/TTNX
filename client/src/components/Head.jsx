/* eslint-disable no-unused-vars */
import React from 'react'
import { MdMessage, MdPostAdd } from 'react-icons/md'
import PropTypes from 'prop-types'

export const Head = ({onCreatePost }) => {
  return (
    <header className='flex justify-between bg-[#ece1fa] items-center border-b border-[#8c6cf7] rounded-sm p-6 text-center'>
        <h2 className='flex text- items-center gap-2 text-xl'><MdMessage size={22}/>Tyutor Posts</h2>
        <span><button onClick={onCreatePost} className='flex flex-inline gap-1 p-2 border-none text-[#2a2630] bg-[#a99fb] rounded-md cursor-pointer font-bold shadow-sm hover:bg-[#8c6cf7]'><MdPostAdd size={22}/>New Post</button></span>
    </header>
)}

Head.propTypes = {
  onCreatePost: PropTypes.func.isRequired,
}

