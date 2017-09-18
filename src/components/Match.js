import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

class Match extends Component {
    render() {
        return (
            <Card>
                <CardTitle
                    title={this.props.data.home_team.name + ' vs ' + this.props.data.away_team.name}
                    subtitle={this.props.data.date}
                />
                <CardText>
                    {this.props.data.home_team.name + ' ' + this.props.data.home_team_goals}
                    <br/>
                    {this.props.data.away_team.name + ' ' + this.props.data.away_team_goals}
                </CardText>
            </Card>
        );
    }
}

export default Match;
