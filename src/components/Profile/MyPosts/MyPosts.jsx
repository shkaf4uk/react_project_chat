import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile_reducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map( (post, index) => (<Post key={index} id={index} massage={post.massage} likesCount={post.likesCount} />))

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let changePost = () => {
        let text = newPostElement.current.value;
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newPost: text};
        let action = updateNewPostText(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div className={s.postsBlock}>
                My posts
            </div>
            <div>New post</div>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={changePost} />
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}


export default MyPosts;