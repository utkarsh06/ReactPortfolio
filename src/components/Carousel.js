import React from 'react';


import social from '../assets/images/michael-dziedzic--Rc6usOigMk-unsplash.jpg';
import compiler from '../assets/images/nathan-dumlao-71u2fOofI-U-unsplash.jpg';
import github from '../assets/images/richy-great-MAYEkmn7G6E-unsplash.jpg';
import Template from '../components/Template';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


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
                    link: "https://github.com/utkarsh06/CS490",
                    hover: ""

                },
                {
                    id: 1,
                    title: "Interpreter",
                    subTitle: "CS280",
                    technology: "C++",
                    img: "",
                    link: "https://github.com/utkarsh06/Programming-Languages",
                    hover: ""

                },
                {
                    id: 2,
                    title: "And More",
                    subTitle: "Check out my github",
                    technology: "",
                    img: "",
                    link: "https://github.com/utkarsh06",
                    hover: ""

                }
                
            ]

        }
    }

    handleTemplateClick = (id, template) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(items.id !== id){
                items.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return < Template item = {item} onClick = {(e => this.handleTemplateClick(item.id,e))} key = {item.id} />
        })
    }



    
    render(){
        return(
            <Container fluid = {true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );    
    }
} 

export default Carousel;