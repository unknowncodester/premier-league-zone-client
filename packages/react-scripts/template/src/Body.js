import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
                <div style={BodyStyle}>
                    <div>
                        <h1>More Details</h1>
                        <p>ddd</p>
                    </div>
                </div>
        );
    }
}

const BodyStyle = {
    height: '400px',
    padding: '50px',
    backgroundColor: 'white',
    color: 'black',
};

export default Body;
