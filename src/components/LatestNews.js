import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';

class LatestNews extends Component {
    render() {
        return (
            <Card>
                <CardTitle title="Latest News" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        );
    }
}

export default LatestNews;
