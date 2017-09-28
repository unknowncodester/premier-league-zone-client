import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import {Card, CardTitle, CardText, CardHeader} from 'material-ui';
import Badge from 'material-ui/Badge';
import LikesIcon from 'material-ui/svg-icons/toggle/star';

class RecentPosts extends Component {

    _renderPosts() {
        return this.props.posts.slice(0,3).map(function(post) {
            return (
                <Card>
                    <CardHeader title={post.topic.name}/>
                    <CardTitle>{post.title}</CardTitle>
                    <CardText>
                        <div>{post.body}</div>
                        <br/>
                        <small class="text-muted">- {post.created_at}</small>
                        <br/>
                        <small class="text-muted">- {post.user.name}</small>
                    </CardText>

                    <Badge badgeContent={post.likes} primary={true}>
                        <LikesIcon />
                    </Badge>

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
