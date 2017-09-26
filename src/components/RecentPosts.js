import React, { Component } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import {Card, CardTitle} from 'material-ui';

class RecentPosts extends Component {

    constructor() {
        super();
        this.state={posts:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/posts')
            .then(response => {
                this.setState({posts: response.data.data});
            });
    }

    _renderPosts() {
        return this.state.posts.map(function(post) {
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
