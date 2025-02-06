/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

export const Modal = ({children}) => {
  return (
    <>
    <div className='fixed inset-3 flex items-center justify-center z-20'>
      <dialog open={true} className='relative p-10 w-full mx-4 rounded-sm bg-transparent overflow-hidden'>
        {children}
      </dialog>
    </div>
    </>
    
)}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}

