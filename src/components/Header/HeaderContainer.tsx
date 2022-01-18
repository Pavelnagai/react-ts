import React from 'react';
import Header from "./Header";
import axios from "axios";
import {setAuthUserData, setToggleFetching} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store-redux";
import {UsersAPI} from "../../api/api";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.setToggleFetching(true)
        UsersAPI.loginAutorizUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                    this.props.setToggleFetching(false)
                }
            });
    }

    render() {

        return <Header {...this.props}/>

    }
}

const MapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(MapStateToProps, {setAuthUserData, setToggleFetching})(HeaderContainer)
