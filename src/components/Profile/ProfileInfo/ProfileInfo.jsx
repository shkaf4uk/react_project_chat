import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import largePhoto from '../../../images/unnamed.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({saveProfile, profile, savePhoto, isOwner, status, updateStatus}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }

    //change photo
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    //change profile
    const onSubmit = (formData) => {
        saveProfile(formData);
        if (formData.userId === profile.userId) {
            setEditMode(false);
        }
    }

    return (
        <div>
            <div className={style.containerInfo}>
                <div className={style.profileImage}>
                    {profile.photos.large
                        ? <img src={profile.photos.large} alt={''}/>
                        : <img src={largePhoto} alt={''}/>}
                </div>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div className={style.profileInfo}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    {editMode ?
                        <ProfileDataForm onSubmit={onSubmit}
                                         initialValues={profile}
                                         profile={profile} /> :
                        <ProfileData isOwner={isOwner}
                                     profile={profile}
                                     setEditMode={setEditMode}/>}
                </div>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        <div><b>Name:</b> <span className={style.myName}>{props.profile.fullName}</span></div>
        <div><b>Work:</b> <span>{props.profile.lookingForAJob ? 'searching' : 'have'}</span></div>
        <div><b>My skills:</b> <span>{props.profile.lookingForAJobDescription}</span></div>
        <div><b>About me:</b> {props.profile.aboutMe}</div>

        <b>Contact with me:</b> {Object.keys(props.profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
    })}
        { props.isOwner ? <div><button onClick={() => props.setEditMode(true)}>Edit profile</button></div> : ''}
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    if (contactValue === null || contactValue === '') {
        return false
    } else {
        return <div>{contactTitle}: {contactValue}</div>
    }
}

export default ProfileInfo;