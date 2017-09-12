import React, { Component } from 'react';
import Header from '../components/Header.js';
import Team from '../components/Team.js';
import Footer from '../components/Footer.js';
import { Row, ListGroup } from 'react-bootstrap';
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

        let renderedTeams = [];
        this.state.teams.forEach(function(team) {
            renderedTeams.push(<Team key={team.id} data={team} />);
        });

        return renderedTeams;
    }

    render() {
        return (
            <Row>
                <Header/>
                <ListGroup>
                    {this._renderTeams()}
                </ListGroup>
                <Footer/>
            </Row>
        );
    }
}

export default Teams;
