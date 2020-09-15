import React, { Component } from 'react';
import './App.css';
import Register from './containers/Register';
import DidMount from './containers/DidMount'
import './index.css';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="container">
        <Register />
        <DidMount />
      </div>
    );
  }
}

export default App;
