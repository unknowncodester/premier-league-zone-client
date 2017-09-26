import React, { Component } from 'react';
import Header from '../components/Header.js';
import LeagueTable from '../components/LeagueTable.js';
import FormTable from '../components/FormTable.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import {getLeague} from "../actions";

class Stats extends Component {

    constructor() {
        super();
        this.state={teams:[]};
    }

    componentDidMount(){
        console.log(getLeague());
        axios.get('http://localhost:8000/api/league')
            .then(response => {
                this.setState({teams: response.data.data});
            });
    }

    render() {
        return (
            <Row>
                <Header/>
                <Row>
                    <Col md='8'>
                        <LeagueTable teams={this.state.teams}/>
                    </Col>
                    <Col md='4'>
                        <FormTable/>
                    </Col>
                </Row>
                <Footer/>
            </Row>
        );
    }
}

export default Stats;
