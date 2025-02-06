/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post'
import { NewPost } from './NewPost'
import { Modal } from './Modal'

export const PostCard = ({isPosting, onStopPosting}) => {
    const [posts, setPosts] = useState([])
    const handlePost = (postData) => {
        setPosts((existingPosts) => [postData, ...existingPosts])
    }
    
  return (
    <> 
       {isPosting ? (
        <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={handlePost}/>
        </Modal> 
       ) : null}
        <ul>
            {posts.map((post) => {
                <Post body={post.body} author={post.author}/>
            })}
            {/* <Post messageChange={message} setMessage={setMessage} nameChange={username} setUserName={setUserName}/> */}
        </ul>
    </>
  )
}

PostCard.propTypes = {
    isPosting: PropTypes.bool.isRequired,
    onStopPosting: PropTypes.func.isRequired
}
