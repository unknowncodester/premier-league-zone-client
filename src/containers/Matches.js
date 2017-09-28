import React, { Component } from 'react';
import Header from '../components/Header.js';
import Match from '../components/Match.js';
import Footer from '../components/Footer.js';
import { Row } from 'react-bootstrap';
import { getMatches } from '../actions/actions'
import {connect} from 'react-redux';

class Matches extends Component {

    componentDidMount(){
        this.props.getMatches();
    }
    _renderMatches() {
        return this.props.matches.map((match) => {
            return (<Match data={match} />);
        });
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

const mapStateToProps = (state) => {
    return {
        matches: state.matches,
    }
}

export default connect(mapStateToProps, { getMatches })(Matches);
