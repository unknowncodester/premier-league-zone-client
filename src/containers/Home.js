import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import LatestNews from "../components/LatestNews";
import RecentPosts from "../components/RecentPosts";
import LeagueTableSmall from "../components/LeagueTableSmall";
import axios from "axios";
import { getLeague } from "../actions";

class Home extends Component {

    constructor() {
        super();
        this.state={teams:[]};
    }

    componentDidMount(){
        console.log(getLeague())
        axios.get('http://localhost:8000/api/league')
            .then(response => {
                this.setState({teams: response.data.data});
            });
    }

    render() {
        return (
            <Row>
                <Header/>
                <Col md="4">
                    <LatestNews/>
                </Col>
                <Col md="4">
                    <RecentPosts/>
                </Col>
                <Col md="4">
                    <LeagueTableSmall teams={this.state.teams}/>
                </Col>
                <Footer/>
            </Row>
        );
    }
}

export default Home;
