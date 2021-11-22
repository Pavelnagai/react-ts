import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import "./App.css"
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Music from "./components/Navbar/Music/Music";
import {PostPropsType, RootStateType} from "./redux/state";

export type AppPropsType = {
    state: RootStateType
}
const App = (props: AppPropsType) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path='/profile' render={() => <Profile
                    post={props.state.profilePage.post}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs message={props.state.dialogPage.message}
                                                              dialog={props.state.dialogPage.dialog}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    )
}
export default App;

