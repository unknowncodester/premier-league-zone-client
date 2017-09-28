import React, { Component } from 'react';
import Header from '../components/Header.js';
import LeagueTable from '../components/LeagueTable.js';
import FormTable from '../components/FormTable.js';
import Footer from '../components/Footer.js';
import { Row, Col } from 'react-bootstrap';
import {getLeague} from "../actions/actions";
import {connect} from "react-redux";

class Stats extends Component {

    componentDidMount(){
        this.props.getLeague();
    }

    render() {
        return (
            <Row>
                <Header/>
                <Row>
                    <Col md='8'>
                        <LeagueTable league={this.props.league}/>
                    </Col>
                    <Col md='4'>
                        <FormTable/>
                    </Col>
                </Row>
                <Footer/>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        league: state.league
    }
}

export default connect(mapStateToProps, { getLeague })(Stats);
