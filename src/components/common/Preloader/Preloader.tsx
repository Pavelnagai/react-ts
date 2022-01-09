import React from 'react';
import preloader from "../../../assect/images/configPageLoader.gif";

const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}><img src={preloader}/></div>
    );
};

export default Preloader;