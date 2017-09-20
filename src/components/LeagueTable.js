import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class LeagueTable extends Component {
    render() {
        return (
            <div>
                <h2>League Table</h2>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Games</TableHeaderColumn>
                            <TableHeaderColumn>Wins</TableHeaderColumn>
                            <TableHeaderColumn>Draws</TableHeaderColumn>
                            <TableHeaderColumn>Losses</TableHeaderColumn>
                            <TableHeaderColumn>Points</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.teams.map((team) => {
                            return (
                                <TableRow>
                                    <TableRowColumn>{team.name}</TableRowColumn>
                                    <TableRowColumn>{team.games}</TableRowColumn>
                                    <TableRowColumn>{team.wins}</TableRowColumn>
                                    <TableRowColumn>{team.draws}</TableRowColumn>
                                    <TableRowColumn>{team.losses}</TableRowColumn>
                                    <TableRowColumn>{team.points}</TableRowColumn>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default LeagueTable;
