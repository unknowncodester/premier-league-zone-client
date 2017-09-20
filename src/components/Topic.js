import React, { Component } from 'react';
import {Card, CardText, CardTitle} from 'material-ui';

class Topic extends Component {
    render() {
        return (
            <Card>
                <CardTitle title={this.props.name}/>
                <CardText>this will be a topic post</CardText>
            </Card>
        );
    }
}

export default Topic;
