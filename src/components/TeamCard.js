import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Link} from "react-router-dom";
import {FlatButton} from "material-ui";

class TeamCard extends Component {
    render() {
        return (
        <Card>
            <CardHeader
                title={this.props.data.name}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText expandable={true}>
                <p><b>Established : </b>{this.props.data.established}</p>
                <p><b>Stadium : </b>{this.props.data.stadium.name} ({this.props.data.stadium.capacity})</p>
                <p><b>Manager : </b>{this.props.data.manager.name} ({this.props.data.manager.nationality})</p>
                <Link to="team">
                    <FlatButton primary={true} label="View" />
                </Link>
            </CardText>
        </Card>
        );
    }
}

export default TeamCard;
