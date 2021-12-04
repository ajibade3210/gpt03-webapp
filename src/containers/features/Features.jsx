import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'Froomthey fine jphn he give  Froomthey fine jphn he give Froomthey fine jphn he give'
    },
    {
        title: 'Become the tended active',
        text: 'Froomthey fine jphn he give  Froomthey fine jphn he give Froomthey fine jphn he give'
    },
    {
        title: 'Message or am Nothing',
        text: 'Froomthey fine jphn he give  Froomthey fine jphn he give Froomthey fine jphn he give'
    },
    {
        title: 'Really boy law county',
        text: 'Froomthey fine jphn he give  Froomthey fine jphn he give Froomthey fine jphn he give'
    },
]

const Features = () =>{
    return(
       <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You just Need To Realize it. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index)=> (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
       </div>
    )
}

export default Features