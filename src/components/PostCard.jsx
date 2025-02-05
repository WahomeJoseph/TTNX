/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Post } from './Post'
import { NewPost } from './NewPost'
import PropTypes from 'prop-types'
import { Modal } from './Modal'

export const PostCard = ({isPosting, onStopPosting}) => {
    const [message, setMessage] = useState('')
    const [username,setUserName] = useState('')
    const [showModal, setShowModal] = useState(true)

    const toggleModal = () => {
        setShowModal(true)
    }

    const handleModal = () => {
        setShowModal(false)
    }

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const handleName = (event) => {
        setUserName(event.target.value)
    }
  return (
    <> 
       {isPosting ? (
        <Modal onClose={onStopPosting}>
            <NewPost messageChange={handleMessage} nameChange={handleName}/>
        </Modal> 
       ) : null}
        
        
        <ul>
            <Post messageChange={message} setMessage={setMessage} nameChange={username} setUserName={setUserName}/>
            <Post messageChange={message} setMessage={setMessage} nameChange={username} setUserName={setUserName}/>
        </ul>
    </>
  )
}

PostCard.propTypes = {
    isPosting: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    setMessage: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    setUserName: PropTypes.func.isRequired,
    onStopPosting: PropTypes.func.isRequired
}
