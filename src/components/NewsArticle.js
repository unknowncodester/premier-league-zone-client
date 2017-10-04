import React, { Component } from 'react';
import {Card, CardTitle, CardText, FlatButton, CardMedia} from 'material-ui';

class NewsArticle extends Component {

    render() {
        return (
            <Card>
                <CardMedia>
                    <img src={this.props.article.urlToImage} alt="" />
                </CardMedia>
                <CardTitle title={this.props.article.title} />
                <CardText>
                    {this.props.article.description}
                </CardText>
                <FlatButton href={this.props.article.url} primary={true} label="more" />
            </Card>
        );
    }
}

export default NewsArticle;
