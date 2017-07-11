import React, { Component } from 'react';

class Footer extends Component {

    render() {
        const {footerStyle, linkStyle} = styles;
        return (
                <div style={footerStyle}>
                    <a style={linkStyle} href="" >More Info</a>
                </div>
        );
    }
}

const styles = {
    footerStyle: {
        height: '20px',
        padding: '15px',
        backgroundColor: '#5a5656',
        color: 'white',
    },
    linkStyle: {
        padding: '25px',
        color: 'white',
    }
}

export default Footer;
