import React, { Component } from 'react';
import {Card, CardText, CardTitle} from 'material-ui/Card';

class Match extends Component {
    render() {
        return (
            <Card>
                <CardTitle
                    title={this.props.data.home_team.name + ' vs ' + this.props.data.away_team.name}
                    subtitle={this.props.data.date}
                />
            </Card>
        );
    }
}

export default Match;
