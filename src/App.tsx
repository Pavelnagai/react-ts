import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/rating";

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"AppTite rendering"}/>
            <div> This is component </div>
            Article1
            <Rating value={3}/>
            <Accordion title={"Good morning"}/>
            <Accordion title={"View beautiful"}/>
            Article2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={6}/>
            <PageTitle title={"My friends"}/>
        </div>
    );
}
function PageTitle(props: any) {
    debugger
    console.log("AppTitle rendering")
    return <h1> {props.title} </h1>
}

export default App;
