import React, { Component } from 'react';
import Header from '../components/Header.js';
import LeagueTable from '../components/LeagueTable.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';
import axios from 'axios';

class Stats extends Component {

    constructor() {
        super();
        this.state={teams:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/league')
            .then(response => {
                this.setState({teams: response.data.data});
            });
    }

    render() {
        return (
            <Row>
                <Header/>
                <LeagueTable teams={this.state.teams}/>
                <Footer/>
            </Row>
        );
    }
}

export default Stats;
