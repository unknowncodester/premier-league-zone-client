import React, { Component } from 'react';
import Header from '../components/Header.js';
import TeamCard from '../components/TeamCard';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';
import {getTeams} from "../actions/actions";
import { connect } from 'react-redux';

class Teams extends Component {

    componentDidMount(){
        this.props.getTeams();
    }
    _renderTeams() {
        return this.props.teams.map(function(team) {
            return (<TeamCard key={team.id} data={team} />);
        });
    }

    render() {
        return (
            <Row>
                <Header/>
                    <h1>Premier League Teams</h1>
                    {this._renderTeams()}
                <Footer/>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
    }
}

export default connect(mapStateToProps, { getTeams })(Teams);