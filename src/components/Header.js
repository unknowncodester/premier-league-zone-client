import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { AppBar } from 'material-ui';
import { Nav, NavItem } from 'react-bootstrap';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Row>
                <AppBar title="Premier League Zone">
                </AppBar>

                <Nav bsStyle="pills">
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/teams">Teams</Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/matches">Matches</Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/stats">Stats</Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/forum">Forum</Link>
                    </NavItem>
                </Nav>
            </Row>
        );
    }
}

export default Header;
