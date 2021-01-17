import React from 'react';
import { useSpring, animated } from 'react-spring';

function TemplateInfo (props){

    const style = useSpring({opacity: 1, from :{opacity :0 }});

    return (
        <animated.div className = "u-template-info" style ={style}>
            <p className = "u-template-title">{props.title}</p>
            <p className = "u-template-subTitle">{props.subTitle}</p>
            <a href= {props.link} target = "_blank" rel = "nopopener noreferrer">Check out</a>
        </animated.div>
    );

}


export default TemplateInfo;