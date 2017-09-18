import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import {FlatButton} from 'material-ui';

class Match extends Component {
    render() {
        return (
            <Card>
                <CardTitle title={this.props.data.home_team.name + ' vs ' + this.props.data.away_team.name} subtitle={this.props.data.date} />
                <CardText>
                    {this.props.data.home_team.name}
                    {this.props.data.home_team_goals}
                    {this.props.data.away_team.name}
                    {this.props.data.away_team_goals}
                    {this.props.data.date}
                </CardText>
            </Card>
        );
    }
}

export default Match;
