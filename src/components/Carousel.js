import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Social Media website",
                    subTitle: "CS490",
                    technology: "PHP, MySQL",
                    img: "",
                    link: "",
                    hover: ""

                },
                {
                    id: 0,
                    title: "Interpreter",
                    subTitle: "CS280",
                    technology: "C++",
                    img: "",
                    link: "",
                    hover: ""

                },
                {
                    id: 0,
                    title: "And More",
                    subTitle: "Check out my github",
                    technology: "",
                    img: "",
                    link: "",
                    hover: ""

                }
                
            ]

        }
    }

    render(){
        return(
            <p>Carousel works</p>
        );    
    }
} 

export default Carousel;