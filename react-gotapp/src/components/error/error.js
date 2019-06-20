import React from 'react';
import img from './img.jpg';
import './error.css'

const Error = () => {
    return (
        <>
            <img src={img} alt="error" className="error-img"></img>
            <span>Something goes wrong</span>
        </>
        
    )
}

export default Error;