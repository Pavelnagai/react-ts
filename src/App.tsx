import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import "./App.css"
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <Profile/>
            <Footer/>
        </div>)
}
export default App;

