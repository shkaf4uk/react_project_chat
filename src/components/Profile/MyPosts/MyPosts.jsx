import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( (post, index) => (<Post key={index} id={index} massage={post.massage} likesCount={post.likesCount} />))
    return (
        <div>
            <div className={s.postsBlock}>
                My posts
            </div>
            <div>New post</div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;