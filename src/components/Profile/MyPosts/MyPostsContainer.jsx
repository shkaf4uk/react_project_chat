import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let changePost = (text) => {
        let action = updateNewPostText(text);
        props.store.dispatch(action);
    }

    return <MyPosts updateNewPostText={changePost}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} dispatch={props.dispatch} />
}

export default MyPostsContainer;