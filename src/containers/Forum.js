import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';
import RecentPosts from "../components/RecentPosts";

class Forum extends Component {
    render() {
        return (
            <Row>
                <Header/>
                <RecentPosts/>
                <Footer/>
            </Row>
        );
    }
}

export default Forum;
