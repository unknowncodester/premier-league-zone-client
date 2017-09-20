import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';
import { Link } from "react-router-dom";

class LatestNews extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardTitle title="League Table" />
                    <CardText>
                        1 | Burnley   | WWWWD
                        2 | Leicester | LWWDD
                    </CardText>
                    <CardActions>
                        <Link to="/stats">
                            <FlatButton primary={true} label="View Full League Table" />
                        </Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default LatestNews;
