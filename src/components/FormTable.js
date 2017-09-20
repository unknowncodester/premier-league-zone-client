import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class FormTable extends Component {
    render() {
        return (
            <div>
                <h2>Form Table</h2>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Form</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn>Burnley</TableRowColumn>
                            <TableRowColumn>WDLWD</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Arsenal</TableRowColumn>
                            <TableRowColumn>LDWWL</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Leicester</TableRowColumn>
                            <TableRowColumn>WWLLW</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Liverpool</TableRowColumn>
                            <TableRowColumn>DWLWL</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default FormTable;
