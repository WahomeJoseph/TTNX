/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post'
import { NewPost } from './NewPost'
import { Modal } from './Modal'

export const PostCard = ({ isPosting, onStopPosting }) => {
    const [posts, setPosts] = useState([])
    const handlePost = (postData) => {
        setPosts((existingPosts) => [postData, ...existingPosts])
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={handlePost} />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className='grid grid-cols-3 gap-2 md:grid-cols-4'>
                    {posts.map((post) =>
                        <Post key={post.body} body={post.body} account={post.account} />
                    )}
                </ul>
            )}
            {posts.length === 0 && (
                <div className='p-6 text-center text-[#f1f1f1]'>
                    <h2>There are no posts yet!</h2>
                    <span>Add something!</span>
                </div>
            )}

        </>
    )
}

PostCard.propTypes = {
    isPosting: PropTypes.bool.isRequired,
    onStopPosting: PropTypes.func.isRequired
}
