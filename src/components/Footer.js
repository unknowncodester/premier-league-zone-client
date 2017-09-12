import React, { Component } from 'react';
import { Nav, NavItem, Row } from 'react-bootstrap';

class Footer extends Component {

    render() {
        return (
            <Row>
                <Nav bsStyle="pills" activeKey={1}>
                    <NavItem href="/home">More Info</NavItem>
                </Nav>
            </Row>
        );
    }
}

export default Footer;
