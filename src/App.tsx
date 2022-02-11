import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import {Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Music from "./components/Navbar/Music/Music";
import React from "react";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/Users-Container";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


export type AppPropsType = {}
const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={"app-wrapper"}>
            <HeaderContainer/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path='/profile/:userId?' component={ProfileContainer}/>
                <Route path='/dialogs' component={DialogsContainer}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' component={UserContainer}/>
                <Route path='/login' component={Login}/>
            </div>
        </div>
    )
}
export default App;

