import React, { Component } from 'react';
import Header from '../components/Header.js';
import Team from '../components/Team.js';
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

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
    }
}

export default connect(mapStateToProps, { getTeams })(Teams);