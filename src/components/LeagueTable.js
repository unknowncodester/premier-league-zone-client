import React, { Component } from 'react';

class LeagueTable extends Component {
    render() {
        var leagueTable = this.props.teams.map(function(team) {
            return (
                <tr>
                    <td>{team.name}</td>
                    <td>{team.games}</td>
                    <td>{team.wins}</td>
                    <td>{team.draws}</td>
                    <td>{team.losses}</td>
                    <td>{team.points}</td>
                </tr>
            );
        });

        return (
            <table>
                {leagueTable}
            </table>
        );
    }
}

export default LeagueTable;
