import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import "./App.css"
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Music from "./components/Navbar/Music/Music";
import {store} from "./redux/store-redux";
import React from "react";


export type AppPropsType = {
    store: any

}
const App: React.FC<AppPropsType> = (props) => {
    const state = store.getState()
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path='/profile' element={<Profile
                        post={state.profilePage}
                        messageForNewPost={state.profilePage.newPost}
                        dispatch={store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/dialogs' element={<Dialogs message={state.dialogPage.message}
                                                             dialog={state.dialogPage.dialog}
                                                             store={store}
                                                             dispatch={store.dispatch.bind(store)}
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

