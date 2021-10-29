import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/rating";

export function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"AppTitle rendering"}/>
            <div> This is component</div>
            Article1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed = {true}/>
            <Accordion titleValue={"Users"} collapsed = {false}/>
            Article2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <PageTitle title={"My friends"}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1> {props.title} </h1>
}

export default App;
