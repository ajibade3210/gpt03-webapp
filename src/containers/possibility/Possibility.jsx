import React from 'react';
import './possibility.css';
import possiblityImage from '../../assets/possibility.png';

const Possibility = () =>{
    return(
       <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possiblityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access To Get Started</h4>
                <h1 className="gradient__text">The possibility are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance aid bed any for travelling assistance aid bed any for travelling assistance aid</p>
                <h4>Request For Early Access</h4>
            </div>
       </div>
    )
}

export default Possibility