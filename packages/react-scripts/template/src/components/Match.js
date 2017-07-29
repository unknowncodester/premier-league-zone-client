import React, { Component } from 'react';

class Match extends Component {
    render() {
        return (
            <div>
                {this.props.data.home_team}
                {this.props.data.home_team_goals}
                {this.props.data.away_team}
                {this.props.data.away_team_goals}
                {this.props.data.date}
            </div>

        );
    }
}

export default Match;
