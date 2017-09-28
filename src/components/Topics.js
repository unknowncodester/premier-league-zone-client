import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Topic from "./Topic";
import {getTopics} from "../actions/actions";

class Topics extends Component {

    _renderTopics() {
        return this.props.topics.map(function(topic) {
            return (<Topic name={topic.name}/>);
        });
    }

    render() {
        return (
            <Row>
                {this._renderTopics()}
            </Row>
        );
    }
}

export default Topics;
