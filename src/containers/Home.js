import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';
import LatestNews from "../components/LatestNews";
import RecentPosts from "../components/RecentPosts";
import LeagueTableSmall from "../components/LeagueTableSmall";

class Home extends Component {
    render() {
        return (
            <Row>
                <Header/>
                <LatestNews/>
                <RecentPosts/>
                <LeagueTableSmall/>
                <Footer/>
            </Row>
        );
    }
}

export default Home;
