import React from 'react';
import AboutMe from '../components/AboutMeContent';
import Branding from '../components/Branding';
import ImageHolder from '../components/ImageHolder';


function about(props){

    return (
        <div>
            <Branding title = {props.title} />
            <AboutMe> Utkarsh is a Computer Science and Applied Mathematics double major with a passion to learn. he has experience in Full Stack Development, API Development, Machine learning, and Data Analysis accumulated through years of work and course projects.
Along with being a high achieving scholar with a CGPA of 3.88, Utkarsh is also currently serving as the President of Computer Science Developers Club, RU-N. </AboutMe>
        </div>
    );
}

export default about