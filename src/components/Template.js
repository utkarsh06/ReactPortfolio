import React from 'react';
import TemplateInfo from './TemplateInfo';


function Template(props){
    return(
        <div className = "d-inline-block u-template" onClick = { () => props.click(props.item)}>
            <img className = "u-template-image" src = {props.item.img} alt = {props.item.img} />
            { props.item.selected && <TemplateInfo title = {props.item.title} subTitle = {props.item.subTitle} link = {props.item.link} /> }
        </div>
    );
}

export default Template;