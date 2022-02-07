import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";

const mapStateToPropsRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {

            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props} />
        }


    }

    let ConnectRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)


    return ConnectRedirectComponent

};


//------------------------------------REACT-ROUTER-DOM 6 ---------------------------------------------------
// import React, {ComponentType} from "react";
// import {Navigate} from "react-router-dom";
// import {connect} from "react-redux";
// import {AppStateType} from "../../../redux/store-redux";
//
// type MapStateProps = {
//     isAuth: boolean
// }
// const mapStateToProps = (state: AppStateType): MapStateProps => {
//     return {
//         isAuth: state.auth.isAuth,
//     }
// }
//
// export function WithAuthRedirect<T>(Component: ComponentType<T>) {
//     debugger
//     const RedirectComponent = (props: MapStateProps) => {
//         let {isAuth, ...restProps} = props
//         if (!isAuth) return <Navigate to={'/login'}/>
//         return <Component  {...restProps as T}/>
//     }
//     let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
//     return ConnectRedirectComponent