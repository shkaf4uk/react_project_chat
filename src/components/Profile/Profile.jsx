import React from 'react';
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={'content'}>
            <div><img src={'https://img.theculturetrip.com/768x432/wp-content/uploads/2016/03/suspension-bridge-1149942_1280.jpg'} /></div>
            <div><img src={'https://i.pinimg.com/564x/7a/7e/be/7a7ebe744313282a2bfa30cb154a39cb.jpg'}/></div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;