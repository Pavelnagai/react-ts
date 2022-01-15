import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import {Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Music from "./components/Navbar/Music/Music";
import React from "react";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/Users-Container";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";


export type AppPropsType = {}
const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/profile" element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>
                    {/*<Route path='/profile/:userId?' element={<ProfileContainer/>}/>*/}
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/users' element={<UserContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default App;

