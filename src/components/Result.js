import React, { Component } from 'react';
import {Card, CardText, CardTitle} from 'material-ui/Card';

class Match extends Component {

    _getTitle(){
        return `${this.props.data.home_team.name} vs ${this.props.data.away_team.name}`;
    }

    render() {
        return (
            <Card>
                <CardTitle
                    title={this._getTitle()}
                    subtitle={this.props.data.date}
                />
                <CardText>
                    {`${this.props.data.home_team.name} ${this.props.data.home_team_goals}`}
                    <br/>
                    {this.props.data.away_team.name + ' ' + this.props.data.away_team_goals}
                </CardText>
            </Card>
        );
    }
}

export default Match;
