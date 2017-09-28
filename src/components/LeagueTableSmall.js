import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { FlatButton } from 'material-ui';
import { Link } from "react-router-dom";

class LeagueTableSmall extends Component {

    render() {
        return (
            <div>
                <h2>League Table</h2>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Games</TableHeaderColumn>
                            <TableHeaderColumn>Points</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.league.map((team) => {
                            return (
                                <TableRow>
                                    <TableRowColumn>{team.name}</TableRowColumn>
                                    <TableRowColumn>{team.games}</TableRowColumn>
                                    <TableRowColumn>{team.points}</TableRowColumn>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <Link to="/stats">
                    <FlatButton primary={true} label="View Full League Table" />
                </Link>
            </div>
        );
    }
}

export default LeagueTableSmall;
