import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store-redux";
import {Redirect} from "react-router-dom";
import {FormDataType, LoginReduxForm} from './LoginForm';

type LoginPropsType = {
    // isAuth: boolean
    // login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {
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
// const mapStateToProps = (state: AppStateType) => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }
// export default connect(mapStateToProps, {login})(Login);
export default Login