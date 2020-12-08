import React from 'react';
import style from './ProfileInfo.module.css';
import headerImg from '../../../images/emerald-lake-yoho-national-park-kayaker.jpg';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.headerImg}>
                <img src={headerImg} alt={''}/>
            </div>
            <div className={style.containerInfo}>
                <div className={style.profileImage}>
                    <img src={props.profile.photos.large} alt={''}/>
                </div>
                <div className={style.profileInfo}>
                    <div ><b>Name:</b> <span className={style.myName}>{props.profile.fullName}</span></div>
                    <div><b>Work:</b> <span>{props.profile.lookingForAJob ? 'searching' : 'have' }</span></div>
                    <div><b>About me:</b> {props.profile.aboutMe}</div>
                    <div><b>Contact with me:</b><br/>
                        {props.profile.contacts.facebook}<br/>
                        {props.profile.contacts.vk}<br/>
                        {props.profile.contacts.twitter}<br/>
                        {props.profile.contacts.instagram}<br/>
                        {props.profile.contacts.github}<br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;