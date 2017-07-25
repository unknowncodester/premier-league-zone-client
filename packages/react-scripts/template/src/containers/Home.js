import React, { Component } from 'react';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Row>
                <Header/>
                <Body/>
                <Footer/>
            </Row>
        );
    }
}

export default Home;
