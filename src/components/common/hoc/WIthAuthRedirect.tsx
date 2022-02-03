import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";

type MapStateProps = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateProps) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component  {...restProps as T}/>
    }
    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent
}