import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardText,
    CardActions,
    FlatButton,
} from 'material-ui';

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
                        <FlatButton label="View Full League Table" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default LatestNews;
