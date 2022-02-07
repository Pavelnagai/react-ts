import React from 'react';
import Header from "./Header";
import {loginUser, setAuthUserData, setToggleFetching} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.loginUser()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const MapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(MapStateToProps,
    {setAuthUserData, setToggleFetching, loginUser})
(HeaderContainer)
