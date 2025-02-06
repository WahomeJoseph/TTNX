/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

export const Post = ({body, account}) => {
  return (
    <div  className='flex flex-col p-8 items-center shadow-sm shadow-[#8c6cf7] m-8'>
        <h2 className='items-center text-xl uppercase text-[#8c6cf7]'>My Tweets</h2>
        <span className='jusify-start text-justify text-[#f1f1f1]'>{body}</span>
        <span className='text-justify text-justify text-[#f1f1f1]'>{account}</span>
    </div>
  )
}

Post.propTypes = {
    body: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
}
