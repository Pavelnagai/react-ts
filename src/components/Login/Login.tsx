import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLength, required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store-redux";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
const maxLength30 = maxLength(30)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={Input}/>
            </div>
            <button>login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'Email'
})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect( mapStateToProps, {login}) (Login);