import React, { Component } from 'react';
import Header from '../components/Header.js';
import LeagueTable from '../components/LeagueTable.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';

class Stats extends Component {

    render() {
        return (
            <Row>
                <Header/>
                <LeagueTable teams={leagueTableJson}/>
                <Footer/>
            </Row>
        );
    }
}

const leagueTableJson = [
    {
        "name": "Arsenal",
        "games": "3",
        "wins": "1",
        "draws": "1",
        "losses": "1",
        "points": "4"
    },
    {
        "name": "Bournemouth",
        "games": "1",
        "wins": "1",
        "draws": "0",
        "losses": "0",
        "points": "3"
    },
    {
        "name": "Burnley",
        "games": "1",
        "wins": "0",
        "draws": "1",
        "losses": "0",
        "points": "1"
    },
    {
        "name": "Brighton & Hove Albion",
        "games": "1",
        "wins": "0",
        "draws": "0",
        "losses": "1",
        "points": "0"
    }
];

export default Stats;
