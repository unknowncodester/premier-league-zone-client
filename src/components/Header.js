import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { AppBar } from 'material-ui';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component {
    render() {
        return (
            <Row>
                <AppBar showMenuIconButton={false} style={appBarStyle} title="Premier League Zone">
                </AppBar>
                    <div>
                        <Link to="/">
                            <RaisedButton label="Home" style={buttonStyle}>
                            </RaisedButton>
                        </Link>
                        <Link to="/teams">
                            <RaisedButton label="Teams" style={buttonStyle}>
                            </RaisedButton>
                        </Link>
                        <Link to="/matches">
                            <RaisedButton label="Matches" style={buttonStyle}>
                            </RaisedButton>
                        </Link>
                        <Link to="/stats">
                            <RaisedButton label="Stats" style={buttonStyle}>
                            </RaisedButton>
                        </Link>
                        <Link to="/forum">
                            <RaisedButton label="Forum" style={buttonStyle}>
                            </RaisedButton>
                        </Link>
                    </div>
            </Row>
        );
    }
}

const buttonStyle = {
    margin: 12,
};

const appBarStyle = {
    backgroundColor: '#b0b59d'
};

export default Header;
