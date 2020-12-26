import React from 'react'
import style from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../utils/FormControls/FormControls";
import {required} from "../../../utils/validators";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <b>Full name:</b> <span className={style.myName}>
            <Field name={'fullName'} placeholder={"Full name"} component={Input} validate={[required]}/>
        </span>
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
        <div>
            <button onClick={props.onSubmit}>Save</button>
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: 'profile-data'})(ProfileDataForm)

export default ProfileDataFormRedux