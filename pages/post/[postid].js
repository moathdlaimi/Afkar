import React from 'react'
import axios from 'axios'

const ShowPost = ({ post }) => {

    return <div className="post-container">  
        <h1 className="text-2xl font-bold ">{post.title}</h1>
        <p>{post.body}</p> 
    </div>
}

export default ShowPost

ShowPost.getInitialProps = async ({
    
    query: { postid } }) => {
        const post = await axios.get(
            `${process.env.ROOT}/api/posts/${postid}`)

        return { post: post.data.data } 
    }