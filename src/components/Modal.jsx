/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

export const Modal = ({children, onClose}) => {
  return (
    <>
    <div onClick={onClose} className='fixed top-16 left-56 justify-centerw-full h-100vh z-1'>
        <dialog open={true} className='border-none p-8 z-1 rounded-sm bg-tranparent shadow-sm overflow-hidden'>
            {children}
        </dialog>
    </div>
    </>
    
)}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}

