import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../utils/FormControls/FormControls";
import {required} from "../../../utils/validators";
import style from "./ProfileInfo.module.css";

// форма при редактировании профиля
const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <b>Full name:</b>
            <Field name={'fullName'} placeholder={"Full name"} component={Input} validate={[required]}/>
        </div>
        <div><b>Work:</b>
            <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
        </div>
        <div><b>My skills:</b>
            <Field name={'lookingForAJobDescription'} placeholder={"My skills"} component={Textarea} validate={[required]}/>
        </div>
        <div><b>About me:</b>
            <Field name={'aboutMe'} placeholder={"About me"} component={Textarea} validate={[required]}/>
        </div>
        <b>Contact with me:</b> {Object.keys(profile.contacts).map(key => {
        return <Field key={key} name={'contacts.' + key} placeholder={key} component={Input} />})}

        {error ? <div className={style.formErrors}>{error}</div> : ''}
        <div>
            <button className={'btn btn-success'}>Save</button>
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: 'profile-data'})(ProfileDataForm)

export default ProfileDataFormRedux