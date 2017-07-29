import React, { Component } from 'react';
import Header from '../components/Header.js';
import Team from '../components/Team.js';
import Footer from '../components/Footer.js';
import { Row, ListGroup } from 'react-bootstrap';

class Teams extends Component {

    _renderTeams() {

        let renderedTeams = [];
        teams.forEach(function(team) {
            renderedTeams.push(<Team data={team} />);
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

const teams =
[
    {
        "id": 1,
        "name": "Arsenal"
    },
    {
        "id": 2,
        "name": "Bournemouth",
    },
    {
        "id": 3,
        "name": "Brighton",
    },
];

export default Teams;
