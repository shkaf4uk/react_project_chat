import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../../utils/FormControls/FormControls";

const MyPosts = props => {
    let postsElements = props.posts.map((post, index) =>
        (<Post key={index} id={index} massage={post.massage} likesCount={post.likesCount}/>));

    const addPost = (formData) => {
        props.addPost(formData.text);
        formData.text = '';
    }

    return (
        <div className={style.postsBlock}>
            <div className={style.postsBlock}>
                My posts
            </div>
            <div className={style.postsBlock}>New post</div>
            <PostReduxForm onSubmit={addPost}/>
            {postsElements}
        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'text'}
                   validate={[required, maxLength10]} placeholder={'Write a massage...'} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const PostReduxForm = reduxForm({form: 'MyPost'})(MyPostsForm)

export default MyPosts;