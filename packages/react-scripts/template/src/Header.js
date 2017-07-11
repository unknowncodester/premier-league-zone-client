import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
                <div style={HeaderStyle}>
                    <h3>Premier League Zone</h3>
                </div>
        );
    }
}

const HeaderStyle = {
    height: '50px',
    padding: '10px',
    color: 'black',
};

export default Header;
