
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      title: 'Utkarsh Gaur',
      headerLinks:[
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: "Perseverence",
        subTitle: "Projects",
        text: "Checkout my projects below"
      },
      about: {
        title: "About me",
      },
      contact: {
        title: "Contact me",
      }
    }

  }
  
  render() {
    return (
      <div>Hello</div>
    );
  }
}

export default App;
