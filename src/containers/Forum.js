import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import RecentPosts from "../components/RecentPosts";
import Topics from "../components/Topics";

class Forum extends Component {
    render() {
        return (
            <Row>
                <Header/>
                <Col>
                    <RecentPosts/>
                </Col>
                <Col>
                    <Topics/>
                </Col>
                <Footer/>
            </Row>
        );
    }
}

export default Forum;
