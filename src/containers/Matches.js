import React, { Component } from 'react';
import Header from '../components/Header.js';
import Match from '../components/Match.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';
import axios from 'axios';

class Matches extends Component {

    constructor() {
        super();
        this.state={matches:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/matches')
            .then(response => {
                this.setState({matches: response.data.data});
            });
    }

    _renderMatches() {
        let renderedMatches = [];

        this.state.matches.forEach(function(match) {
            renderedMatches.push(<Match data={match} />);
        });

        return renderedMatches;
    }

    render() {
        return (
            <Row>
                <Header/>
                {this._renderMatches()}
                <Footer/>
            </Row>
        );
    }
}

export default Matches;
