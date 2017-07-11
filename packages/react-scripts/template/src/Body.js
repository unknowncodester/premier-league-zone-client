import React, { Component } from 'react';
import { Row, Jumbotron, Button } from 'react-bootstrap';

class Body extends Component {
    render() {
        return (
            <Row>
                <Jumbotron>
                    <h1>Latest News</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ultricies sapien, pellentesque commodo est. Nulla maximus diam ut purus scelerisque, posuere sollicitudin turpis pellentesque. Curabitur lobortis accumsan eleifend. Sed pretium risus et diam ullamcorper, eu blandit ligula tristique. Pellentesque eu ligula semper massa commodo dignissim. Mauris suscipit iaculis turpis, eget feugiat ex fringilla vitae. Curabitur et urna velit. Curabitur vestibulum mauris non elementum posuere. Fusce et metus eu dui faucibus mollis et id ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>                  <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
            </Row>
        );
    }
}

export default Body;
