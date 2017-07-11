import React, { Component } from 'react';
import { Nav, NavItem, Row } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Row>
                <Nav bsStyle="pills" activeKey={1}>
                    <NavItem href="/home">Home</NavItem>
                    <NavItem href="Item">Matches</NavItem>
                    <NavItem href="Item">Stats</NavItem>
                    <NavItem href="Item">Forum</NavItem>
                </Nav>
            </Row>
        );
    }
}

export default Navigation;
