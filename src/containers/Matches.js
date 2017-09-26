import React, { Component } from 'react';
import Header from '../components/Header.js';
import Match from '../components/Match.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { getMatches } from '../actions'

class Matches extends Component {

    constructor() {
        super();
        this.state={matches:[]};
    }

    componentDidMount(){
        console.log(getMatches());
        axios.get('http://localhost:8000/api/matches')
            .then(response => {
                this.setState({matches: response.data.data});
            });
    }

    _renderMatches() {
        return this.state.matches.map((match) => {
            return (<Match data={match} />);
        });
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
