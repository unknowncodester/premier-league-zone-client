import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import * as axios from "axios";
import Topic from "./Topic";
import {getTopics} from "../actions/actions";

class Topics extends Component {

    constructor() {
        super();
        this.state={topics:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/topics')
            .then(response => {
                this.setState({topics: response.data.data});
            });
    }

    _renderTopics() {
        return this.state.topics.map(function(topic) {
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
