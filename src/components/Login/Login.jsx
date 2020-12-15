import React from 'react';
import {Field, reduxForm} from "redux-form";

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <p>LOGIN</p>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>)
};

//заменил инпуты на Field, прописал component + name
const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'login'} placeholder={"Login"} component={'input'}/>
                </div>
                <div>
                    <p>PASSWORD</p>
                    <Field name={'password'} placeholder={"Password"} component={'input'}/>
                </div>
                <div>
                    <Field name={'rememberMe'} type={"checkbox"} component={'input'}/> remember me
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>)
};

//обернул с помощью HOC
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;