import React from 'react';
import './App.css';


function App() {
    console.log("App rendering")
    return (
        <div>
            This is component
            <Rating/>
            <Accordion/>
            <Rating />
            <Star/>
            <AppTitle/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>"This is App component" </>
}

export function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

export function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>

        </div>
    )
}

function Star() {
    console.log("star rendered")
    return (
        <div>
            <div>star</div>
        </div>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
