import React, { Component } from 'react';
import Header from '../components/Header.js';
import Team from '../components/Team.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';
import axios from 'axios';

class Teams extends Component {

    constructor() {
        super();
        this.state={teams:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/teams')
            .then(response => {
                this.setState({teams: response.data.data});
            });
    }
    _renderTeams() {
        return this.state.teams.map(function(team) {
            return (<Team key={team.id} data={team} />);
        });
    }

    render() {
        return (
            <Row>
                <Header/>
                    {this._renderTeams()}
                <Footer/>
            </Row>
        );
    }
}

export default Teams;
