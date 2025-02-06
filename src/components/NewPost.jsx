/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const NewPost = ({onCancel, onAddPost}) => {
    const [message, setMessage] = useState('')
    const [username,setUserName] = useState('')
    
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }
    const handleName = (event) => {
        setUserName(event.target.value)
    }
    const handleSubmit = (e) => {
        e.prevenDefault()
        const postData = {
            body: message,
            author: username
        }
        onAddPost(postData)
        console.log(postData)
    }
    return (
        <div className='bg-transparent items-center justify-center text-[#f1f1f1] flex flex-col p-6'>
            <form action="" onSubmit={handleSubmit} className='w-1/2 rounded-sm p-4 shadow-sm shadow-[#8c6cf7]'>
                <div className='flex flex-col p-2 '>
                    <label htmlFor="message">Post:</label>
                    <textarea name="message" rows={4} placeholder='Enter your post message'  onChange={handleMessage} autoComplete='off' required className='bg-[#ece1fa] text-black rounded-sm p-3 border focus:outline-none focus:border-[#8c6cf7]'></textarea>
                </div>
                <div className='flex flex-col p-2'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id='username' placeholder='Enter your username' onChange={handleName} autoComplete='off' required className='bg-[#ece1fa] text-black w-full rounded-sm p-3 border focus:outline-none focus:border-[#8c6cf7]'/>
                </div>
                <div className='flex justify-between'>
                    <button type='button' onClick={onCancel} className='w-full rounded text-xl mb-2 ml-2 hover:bg-[#8c6cf7] cursor-pointer bg-[#f1f1] mt-4 p-2'>Cancel</button>
                    <button className='w-full rounded-sm text-xl mb-2 ml-2 hover:bg-[#8c6cf7] cursor-pointer bg-[#f1f1] mt-4 p-2'>Submit</button>
                </div>
            </form>
        </div>
)
   
}
NewPost.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onAddPost: PropTypes.func.isRequired
}

