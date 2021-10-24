import React from 'react';
import Rating from './Rating';
import Accordion from "./Accordion";
import Star from "./star";
import AppTitle from "./AppTitle";

function App() {
    console.log("App rendering")
    return (
        <div>
            This is component
            <Rating/>
            <Accordion/>
            <Rating/>
            <Star/>
            <AppTitle/>
        </div>
    );
}

export default App;
