import React, { Component } from 'react';
import Header from '../components/Header.js';
import Match from '../components/Match.js';
import Result from '../components/Result.js';
import Footer from '../components/Footer.js';
import {Col, Row} from 'react-bootstrap';
import { getMatches } from '../actions/actions'
import {connect} from 'react-redux';

class Matches extends Component {

    componentDidMount(){
        this.props.getMatches();
    }

    _renderMatches() {
         const upcomingMatches = this.props.matches.filter((match) => {
             return match.home_team_goals === null;
         });

         return upcomingMatches.map((match) => {
             return (<Match data={match} />);
         });
    }

    _renderResults() {
        const results = this.props.matches.filter((match) => {
            return match.home_team_goals !== null;
        });

        return results.map((result) => {
            return (<Result data={result} />);
        });
    }

    render() {
        return (
            <Row>

                <Header/>
                    <Col md="6">
                        <h1>Fixtures</h1>
                        {this._renderMatches()}
                    </Col>
                    <Col md="6">
                        <h1>Results</h1>
                        {this._renderResults()}
                    </Col>
                <Footer/>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        matches: state.matches,
    }
}

export default connect(mapStateToProps, { getMatches })(Matches);
