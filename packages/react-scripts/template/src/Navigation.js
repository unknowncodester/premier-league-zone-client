import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
                <div style={NavigationStyle}>
                    <a href="" style={LinkStyle}>Home</a>
                    <a href="" style={LinkStyle}>Matches</a>
                    <a href="" style={LinkStyle}>Stats</a>
                    <a href="" style={LinkStyle}>Forum</a>
                </div>
        );
    }
}

const NavigationStyle = {
    height: '30px',
    padding: '10px',
    backgroundColor: '#5a5656',
};

const LinkStyle = {
    padding: '15px',
    color: 'white',
}

export default Navigation;
