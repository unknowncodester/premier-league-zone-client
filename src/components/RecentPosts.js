import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import {Card, CardTitle} from 'material-ui';
import {getPosts} from "../actions/actions";

class RecentPosts extends Component {

    _renderPosts() {
        return this.props.posts.map(function(post) {
            return (
                <Card>
                    <CardTitle>{post.title}</CardTitle>
                    {post.body}
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
