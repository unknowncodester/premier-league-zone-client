import React, { Component } from 'react';
import { PageHeader, Row } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Row>
                <PageHeader>Premier League <small>zone</small></PageHeader>
            </Row>
        );
    }
}

export default Header;
