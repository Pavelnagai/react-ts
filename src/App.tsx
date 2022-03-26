import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import React, {ComponentType} from "react";
import UserContainer from "./components/Users/Users-Container";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./redux/store-redux";
import {initializedApp} from "./redux/app.reducer";
import {compose} from "redux";
import PrimarySearchAppBar from "./Bar";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";


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
                        <Switch>
                            <Route exact path="/"
                                   render={() => <Redirect to={"/profile"}/>}/>
                            <Route path="/dialogs"
                                   render={()=><DialogsContainer/>}/>
                            <Route path="/profile/:userId?"
                                   render={()=><ProfileContainer/>}/>
                            <Route path="/users"
                                   render={() => <UserContainer/>}/>
                            <Route path="/login"
                                   render={() => <Login/>}/>
                            <Route path="*"
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => (
    {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth
    }
)

const AppContainer = compose
    < ComponentType > (
        withRouter,
            connect(mapStateToProps, {initializedApp}))(App);

export const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}