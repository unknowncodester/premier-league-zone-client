import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui';

class RecentPosts extends Component {
    render() {
        return (
            <Card>
                <CardTitle title="Recent Posts" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        );
    }
}

export default RecentPosts;