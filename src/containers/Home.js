import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import LatestNews from "../components/LatestNews";
import RecentPosts from "../components/RecentPosts";
import LeagueTableSmall from "../components/LeagueTableSmall";
import {connect} from 'react-redux';
import {getLeague} from "../actions/actions";

class Home extends Component {

    constructor() {
        super();
        this.state={league:[]};
    }

    render() {
        return (
            <Row>
                <Header/>
                <Col md="4">
                    <LatestNews/>
                </Col>
                <Col md="4">
                    <RecentPosts posts={this.props.posts}/>
                </Col>
                <Col md="4">
                    <LeagueTableSmall league={this.props.league}/>
                </Col>
                <Footer/>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        league: state.league,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
