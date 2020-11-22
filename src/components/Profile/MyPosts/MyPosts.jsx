import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <div>New post</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;