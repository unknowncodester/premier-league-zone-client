import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import RecentPosts from "../components/RecentPosts";
import Topics from "../components/Topics";
import {connect} from "react-redux";

class Forum extends Component {
    render() {

        return (
            <Row>
                <Header/>
                <Col>
                    <RecentPosts posts={this.props.posts}/>
                </Col>
                <Col>
                    <Topics topics={this.props.topics}/>
                </Col>
                <Footer/>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        topics: state.topics,
    }
}

export default connect(mapStateToProps)(Forum);
