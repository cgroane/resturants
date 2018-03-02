import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/nav/Nav';
import router from './router';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // get user location

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div>
          {router}
          </div>
      </div>
    );
  }
}

export default App;
