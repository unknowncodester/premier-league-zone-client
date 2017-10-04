import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import LatestNews from "../components/LatestNews";
import RecentPosts from "../components/RecentPosts";
import LeagueTableSmall from "../components/LeagueTableSmall";
import {connect} from 'react-redux';
import {getLeague, getPosts, getNews} from "../actions/actions";

class Home extends Component {

    componentDidMount(){
        this.props.getLeague();
        this.props.getPosts();
        this.props.getNews();
    }

    render() {
        return (
            <Row>
                <Header/>

                <Col md="4">
                    <h1>Latest News</h1>
                    <LatestNews news={this.props.news}/>
                </Col>
                <Col md="4">
                    <h1>Recent Posts</h1>
                    <RecentPosts posts={this.props.posts}/>
                </Col>
                <Col md="4">
                    <h1>League Table</h1>
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
        posts: state.posts,
        news: state.news,
    }
};

export default connect(mapStateToProps, { getLeague, getPosts, getNews })(Home);
