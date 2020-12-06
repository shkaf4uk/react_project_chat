import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map((post, index) =>
        (<Post key={index} id={index} massage={post.massage} likesCount={post.likesCount}/>))

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let changePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <div className={style.postsBlock}>
                My posts
            </div>
            <div className={style.postsBlock}>New post</div>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={changePost}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}


export default MyPosts;