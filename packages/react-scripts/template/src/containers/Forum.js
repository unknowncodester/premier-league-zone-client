import React, { Component } from 'react';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';

class Forum extends Component {
    render() {
        return (
            <Row>
                <Header/>
                Forum coming soon
                <Footer/>
            </Row>
        );
    }
}

export default Forum;
