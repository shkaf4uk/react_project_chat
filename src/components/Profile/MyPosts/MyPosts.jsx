import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div>My posts</div>
            <div>New post</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post massage={'Hi, how are you?'} likes={'5'}/>
            <Post massage={"It's my first post"} likes={20}/>
            <Post likes={1}/>
            <Post/>
        </div>
    )
}

export default MyPosts;