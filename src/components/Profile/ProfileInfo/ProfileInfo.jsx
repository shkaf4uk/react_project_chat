import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import largePhoto from '../../../images/unnamed.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    const saveProfileData = (formData) => {
        saveProfile(formData).then(response => {
            if (!response) {
                setEditMode(false);
            }
        });
    }

    return (
        <div>
            <div className={style.containerInfo}>
                <div className={style.profileImage}>
                    {profile.photos.large
                        ? <img src={profile.photos.large} alt={''}/>
                        : <img src={largePhoto} alt={''}/>}
                     {isOwner &&
                    <div className={style.icon}>
                        <input type={'file'} onChange={onMainPhotoSelected} id="file" className={style.input_file}/>
                        <label htmlFor="file" className={style.labelFile}>
                            <FontAwesomeIcon icon={'download'} />
                            <span> Upload a photo</span>
                        </label>
                    </div>}
                </div>

                <div className={style.profileInfo}>

                    {/*изменение статуса*/}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    {editMode ?
                        // форма при редактировании профиля
                        <ProfileDataForm onSubmit={saveProfileData}
                                         initialValues={profile}
                                         profile={profile} editMode={editMode} /> :
                        //форма при загрузке страницы
                        <ProfileData isOwner={isOwner}
                                     profile={profile}
                                     setEditMode={setEditMode} editMode={editMode}/>}
                </div>
            </div>
        </div>
    )
}

//форма при загрузке страницы
const ProfileData = (props) => {
    return <div className={style.profileInfo_profileData}>
        <div><b>Name:</b> <span className={style.myName}>{props.profile.fullName}</span></div>
        <div><b>Work:</b> <span>{props.profile.lookingForAJob ? 'searching' : 'have'}</span></div>
        <div><b>My skills:</b> <span>{props.profile.lookingForAJobDescription}</span></div>
        <div><b>About me:</b> {props.profile.aboutMe}</div>
        <b>Contact with me:</b> {Object.keys(props.profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} editMode={props.editMode}/>
        })}

        { props.isOwner ? <div><button className={'btn btn-secondary'}
                                       onClick={() => props.setEditMode(true)}>Edit profile</button></div> : ''}
    </div>
}

export const Contact = ({contactTitle, contactValue, editMode}) => {
    if (!editMode) {
        if (contactValue === null || contactValue === '') {
            return false
        } else {
            return <div className={style.Contact}><b>{contactTitle}:</b> {contactValue}</div>
        }
    } else {
        return <div className={style.Contact}><b>{contactTitle}:</b> {contactValue}</div>
    }

}

export default ProfileInfo;