import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../utils/FormControls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import style from './Login.module.css';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={style.signIn}>
            <p>SIGN IN</p>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>)
};

//заменил инпуты на Field, прописал component + name
const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'} placeholder={"Email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={'password'} name={'password'} placeholder={"Password"} component={Input} validate={[required]}/>
                </div>
                <div className={style.rememberMe}>
                    <Field name={'rememberMe'} type={"checkbox"} component={Input} />
                    <span>Remember me</span>
                </div>
                {props.error ? <div className={style.formErrors}>
                    {props.error}
                </div> : ''}

                <div className={style.form__btn}>
                    <button>Sign in</button>
                </div>
            </form>)
};

//обернул с помощью HOC
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

//сделал контейнерной компонентой
export default connect(mapStateToProps, {login})(Login);