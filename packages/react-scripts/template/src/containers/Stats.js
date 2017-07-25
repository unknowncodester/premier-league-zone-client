import React, { Component } from 'react';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';

class Stats extends Component {
    render() {
        return (
            <Row>
                <Header/>
                Stats coming soon
                <Footer/>
            </Row>
        );
    }
}

export default Stats;
