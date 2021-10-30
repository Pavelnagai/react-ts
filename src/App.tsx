import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

export function App() {
    console.log("App rendering")
    return (
        <div>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

