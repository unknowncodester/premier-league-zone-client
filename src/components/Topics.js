import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui';
import * as axios from "axios";
import Topic from "./Topic";

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
            <Card>
                <CardHeader
                    title='Topics'
                />
                {this._renderTopics()}
            </Card>
        );
    }
}

export default Topics;
