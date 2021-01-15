import React from 'react';
import Branding from '../components/Branding';

function home(props){

    return (
        <Branding title = {props.title} subTitle = {props.subTitle} text = {props.text}/>

    );
}

export default home