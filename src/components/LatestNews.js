import React, { Component } from 'react';
import NewsArticle from './NewsArticle';
import {Row} from "react-bootstrap";

class LatestNews extends Component {

    _renderArticles(){
        return this.props.news.map((article) => {
            return (<NewsArticle article={article}/>)
        });
    }

    render() {
        return (
            <Row>
                {this._renderArticles()}
            </Row>
        );
    }
}

export default LatestNews;
