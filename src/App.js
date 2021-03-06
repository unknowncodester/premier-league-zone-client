import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';
import Home from './containers/Home';
import Teams from './containers/Teams';
import Matches from './containers/Matches';
import Stats from './containers/Stats';
import Forum from './containers/Forum';
import Team from './containers/Team';
import './App.css';
import { Grid } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                <div>
                    <Grid>
                        <Route exact path="/" component={Home}/>
                        <Route path="/teams" component={Teams}/>
                        <Route path="/matches" component={Matches}/>
                        <Route path="/stats" component={Stats}/>
                        <Route path="/forum" component={Forum}/>
                        <Route path="/team/:id" component={Team}/>
                    </Grid>
                </div>
            </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;