import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import "./App.css"
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Music from "./components/Navbar/Music/Music";
import {StoreType,} from "./redux/state";
import React from "react";


export type AppPropsType = {
    store: StoreType

}
const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path='/profile' render={() => <Profile
                    post={state.profilePage}
                    messageForNewPost={state.profilePage.newPost}
                    // newPost={props.newPost}
                    updatePostText={props.store.updatePostText.bind(props.store)}
                    addPost={props.store.addPost.bind(props.store)}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs message={state.dialogPage.message}
                                                              dialog={state.dialogPage.dialog}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    )
}
export default App;

