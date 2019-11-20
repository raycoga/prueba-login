import React, {Component} from 'react';
import './Css/App.css';

import Navbar from "./ComponentesGlobales/Navbar"
import Content from "./ComponentesGlobales/Content"
import Footer from "./ComponentesGlobales/Footer" 

class App extends Component {
  render(){
    const {children} =this.props
    console.log(children)

    return (
      <div className="App">
        <Navbar />
           <Content body={children} />
        <Footer /> 
      </div>
    );
  }
}

export default App;
