import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import * as axios from "axios";
import Topic from "./Topic";

class Topics extends Component {

    constructor() {
        super();
        this.state={topics:[]};
    }

    componentDidMount(){
        console.log(getTopics())
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
