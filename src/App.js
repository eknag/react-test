import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import React from 'react';


const pages = [{name: "home", src: './index.html'},
               {name: "google", src: 'https://www.google.com'},
               {name: "git Page", src: 'https://www.eknag.github.io'}];

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav pages={pages}/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Do not edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}



export default App;
