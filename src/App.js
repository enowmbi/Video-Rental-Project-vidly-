import React, { Component } from 'react';
import Movies from './components/Movies';
import NavBar from  './components/NavBar';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import MovieForm from './components/MovieForm';
import Login from './components/Login';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies" component={Movies}  />
                        <Route path="/customers" component={Customers} />
                        <Route path="/Rentals"  component={Rentals} />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/login" component={Login} />
                        <Redirect from="/" exact  to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
