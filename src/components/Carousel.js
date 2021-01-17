import React from 'react';


import compiler from '../assets/images/michael-dziedzic--Rc6usOigMk-unsplash.jpg';
import social from '../assets/images/nathan-dumlao-71u2fOofI-U-unsplash.jpg';
import github from '../assets/images/richy-great-MAYEkmn7G6E-unsplash.jpg';
import Template from '../components/Template';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.title = "PROJECTS";
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Social Media website",
                    subTitle: "CS490",
                    technology: "PHP, MySQL",
                    img: social,
                    link: "https://github.com/utkarsh06/CS490",
                    selected: false

                },
                {
                    id: 1,
                    title: "Interpreter",
                    subTitle: "CS280",
                    technology: "C++",
                    img: compiler,
                    link: "https://github.com/utkarsh06/Programming-Languages",
                    selected: false

                },
                {
                    id: 2,
                    title: "And More",
                    subTitle: "Check out my github",
                    technology: "",
                    img: github,
                    link: "https://github.com/utkarsh06",
                    selected: false

                }
                
            ]

        }
    }

    handleTemplateClick = (id, template) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return < Template item = {item} click = {(e => this.handleTemplateClick(item.id,e))} key = {item.id} />
        })
    }



    
    render(){
        return(
            <Container fluid = {true}>
                <Row> { this.title && <h2 className = " justify-content-center">{this.title}</h2> } </Row>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );    
    }
} 

export default Carousel;