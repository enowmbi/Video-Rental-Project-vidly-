import React, { Component } from 'react';
import Movies from './components/Movies';
import NavBar from  './components/NavBar';
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Movies />
            </React.Fragment>
        );
    }
}

export default App;
