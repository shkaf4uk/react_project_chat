import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../utils/FormControls/FormControls";

const MyPosts = (props) => {
    console.log(props)
    let postsElements = props.posts.map((post, index) =>
        (<Post key={index} id={index}
               massage={post.massage} likesCount={post.likesCount} profile={props.profile} />));

    const addPost = (formData) => {
        props.addPost(formData.text);
        formData.text = '';
    }

    return (
        <div className={style.postsBlock}>
            <PostReduxForm onSubmit={addPost}/>
            {postsElements}
        </div>
    )
};

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.textarea}>
            <Field component={Textarea} name={'text'} placeholder={'Write a massage...'} />
            <button className={'btn btn-secondary'}>Add post</button>
        </div>
    </form>
}

const PostReduxForm = reduxForm({form: 'MyPost'})(MyPostsForm)

export default MyPosts;