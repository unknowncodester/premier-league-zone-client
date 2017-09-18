import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { AppBar } from 'material-ui';
import {
    Link
} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';


class Header extends Component {
    render() {
        return (
            <Row>
                <AppBar title="Premier League Zone">
                </AppBar>
                    <div>
                        <Link to="/">
                            <RaisedButton label="Home" style={style}>
                            </RaisedButton>
                        </Link>
                        <Link to="/teams">
                            <RaisedButton label="Teams" style={style}>
                            </RaisedButton>
                        </Link>
                        <Link to="/matches">
                            <RaisedButton label="Matches" style={style}>
                            </RaisedButton>
                        </Link>
                        <Link to="/stats">
                            <RaisedButton label="Stats" style={style}>
                            </RaisedButton>
                        </Link>
                        <Link to="/forum">
                            <RaisedButton label="Forum" style={style}>
                            </RaisedButton>
                        </Link>
                    </div>
            </Row>
        );
    }
}

const style = {
    margin: 12,
};

export default Header;
