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


const App = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;

