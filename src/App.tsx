import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import {Route, withRouter} from "react-router-dom";
import React, {ComponentType, Suspense} from "react";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/Users-Container";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import {connect, useDispatch} from "react-redux";
import {AppStateType} from "./redux/store-redux";
import {initializedApp} from "./redux/app.reducer";
import {compose} from "redux";
import PrimarySearchAppBar from "./Bar";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import {logout} from "./redux/auth-reducer";
import {withAuthRedirect} from "./components/common/hoc/WithAuthRedirect";

const News = React.lazy(() => import("./components/Navbar/News/News"));
const Settings = React.lazy(() => import("./components/Navbar/Settings/Settings"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Music = React.lazy(() => import("./components/Navbar/Music/Music"));


export type AppPropsType = {}

class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <div
                style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
                <CircularProgress/>
            </div>
        }
        return (
            <div className={"app-wrapper"}>
                <div className={'header'}>
                    <PrimarySearchAppBar/>
                </div>
                <div className={'content'}>
                    <div className={'navBar'}>
                        <Navbar/>
                    </div>
                    <div className={"app-wrapper-content"}>
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <Route path='/profile/:userId?' component={ProfileContainer}/>
                            {/*<Route path='/dialogs' component={DialogsContainer}/>*/}
                            {/*<Route path='/news' component={News}/>*/}
                            {/*<Route path='/settings' component={Settings}/>*/}
                            {/*<Route path='/music' component={Music}/>*/}
                            <Route path='/users' component={UserContainer}/>
                            <Route path='/login' component={Login}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => (
    {
        initialized: state.app.initialized
    }
)

export default compose
< ComponentType > (
    withRouter,
        connect(mapStateToProps, {initializedApp, logout}))(App);

