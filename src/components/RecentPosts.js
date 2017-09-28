import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import {Card, CardTitle, CardText} from 'material-ui';

class RecentPosts extends Component {

    _renderPosts() {
        return this.props.posts.slice(0,3).map(function(post) {
            return (
                <Card>
                    <CardTitle>{post.title}</CardTitle>
                    <CardText>{post.body}</CardText>
                </Card>
            );
        });
    }

    render() {
        return (
            <Row>
                {this._renderPosts()}
            </Row>
        );
    }
}

export default RecentPosts;
