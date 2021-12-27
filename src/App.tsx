import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import "./App.css"
import {Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Music from "./components/Navbar/Music/Music";
import {store} from "./redux/store-redux";
import React from "react";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import {StoreType} from "./redux/state";


export type AppPropsType = {
    store: StoreType

}
const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path='/profile' element={<Profile
                        store={store}
                    />}/>
                    <Route path='/dialogs' element={<DialogsContainer
                        store={store}
                    />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/music' element={<Music/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default App;

