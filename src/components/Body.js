import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import LatestNews from "./LatestNews";
import RecentPosts from "./RecentPosts";
import LeagueTableSmall from "./LeagueTableSmall";

class Body extends Component {
    render() {
        return (
            <Row>
                <Col md='4'>
                    <LatestNews/>
                </Col>
                <Col md='4'>
                    <RecentPosts/>
                </Col>
                <Col md='4'>
                    <LeagueTableSmall/>
                </Col>
            </Row>
        );
    }
}

export default Body;
