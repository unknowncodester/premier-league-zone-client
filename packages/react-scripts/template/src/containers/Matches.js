import React, { Component } from 'react';
import Header from '../components/Header.js';
import Match from '../components/Match.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';

class Matches extends Component {

    _renderMatches() {

        let renderedMatches = [];
        matches.forEach(function(match) {
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

const matches =
[
    {
        "home_team": "Arsenal",
        "away_team": "Bournemouth",
        "date": "2017-08-14 00:00:00",
        "home_team_goals": 1,
        "away_team_goals": 2
    },
    {
        "home_team": "Arsenal",
        "away_team": "Brighton & Hove Albion",
        "date": "2017-08-21 00:00:00",
        "home_team_goals": 3,
        "away_team_goals": 2
    },
    {
        "home_team": "Burnley",
        "away_team": "Arsenal",
        "date": "2017-08-21 00:00:00",
        "home_team_goals": 0,
        "away_team_goals": 0
    }
];


export default Matches;
