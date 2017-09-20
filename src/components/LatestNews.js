import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';

class LatestNews extends Component {
    render() {
        return (
            <Card>
                <CardTitle title="Latest News" />
                <CardText>
                    Hodgson Sacked as Crystal Palace Manager
                </CardText>
            </Card>
        );
    }
}

export default LatestNews;
