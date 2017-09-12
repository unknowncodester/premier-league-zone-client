import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class Team extends Component {
    render() {
        return (
            <ListGroupItem>
                {this.props.data.name}
            </ListGroupItem>
        );
    }
}

export default Team;
