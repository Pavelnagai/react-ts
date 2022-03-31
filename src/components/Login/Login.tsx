import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store-redux";
import {Redirect} from "react-router-dom";
import {FormDataType, LoginReduxForm} from './LoginForm';


const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
export default Login