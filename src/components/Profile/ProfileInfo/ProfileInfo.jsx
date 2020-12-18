import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import largePhoto from '../../../images/unnamed.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.containerInfo}>
                <div className={style.profileImage}>
                    {props.profile.photos.large
                        ? <img src={props.profile.photos.large} alt={''}/>
                        : <img src={largePhoto} alt={''}/>  }
                </div>
                <div className={style.profileInfo}>

                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

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