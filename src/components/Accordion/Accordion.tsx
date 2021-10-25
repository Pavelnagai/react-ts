import React from "react";

export function Accordion(props: any) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody title={props.title}/>
        </div>
    )
}


function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return (
        <div>
            {props.title}
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


function AccordionTitle(props: any) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
