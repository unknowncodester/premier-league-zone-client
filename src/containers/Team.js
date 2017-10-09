import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import TeamCard from "../components/TeamCard";
import { getTeam } from "../actions/actions";


class Team extends Component {

    componentDidMount(){
        this.props.getTeam(this.props.match.params.id);
    }

    _renderTeamDetail(){
        return <div>
            <h1>{this.props.team.name}</h1>
            <h1>{this.props.team.established}</h1>
        </div>
    }


    render() {

        return (
            <Row>
                <Header/>
                <Col md="4">
                    <h1>Team</h1>
                    {this._renderTeamDetail()}
                </Col>
                <Col md="4">
                    <h1>Fixtures</h1>
                </Col>
                <Col md="4">
                    <h1>Results</h1>
                </Col>
                <Footer/>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        team: state.team,
    }
}

export default connect(mapStateToProps, { getTeam })(Team);
