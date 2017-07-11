import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Navigation from './Navigation.js';
import Body from './Body.js';
import Footer from './Footer.js';
import { Row, Grid, Col } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Navigation/>
                    <Header/>
                    <Body/>
                    <Footer/>
                </Grid>
            </div>
        );
    }
}

export default App;
