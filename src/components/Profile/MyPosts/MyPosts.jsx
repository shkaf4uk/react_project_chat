import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, massage: 'Hi, how are you?', likesCount: 5},
        {id: 2, massage: "It's my first post", likesCount: 20},
        {id: 2, massage: "TEST", likesCount: 2},
        {id: 2, massage: "TES2", likesCount: 24},
        {id: 3, likesCount: 1},
    ];

    let postsElements = posts.map( p => (<Post massage={p.massage} likesCount={p.likesCount} />))

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