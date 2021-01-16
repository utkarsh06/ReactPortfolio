import React from 'react';
import Branding from '../components/Branding';
import Carousel from '../components/Carousel';

function home(props){

    return (
        <div>
            <Branding title = {props.title} subTitle = {props.subTitle} text = {props.text}/>
            <Carousel />
        </div>
    );
}

export default home