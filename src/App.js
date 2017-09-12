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
import './App.css';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                <div>
                    <Grid>
                        <Nav bsStyle="pills">
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/teams">Teams</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/matches">Matches</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/stats">Stats</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/forum">Forum</Link>
                            </NavItem>
                        </Nav>

                        <Route exact path="/" component={Home}/>
                        <Route path="/teams" component={Teams}/>
                        <Route path="/matches" component={Matches}/>
                        <Route path="/stats" component={Stats}/>
                        <Route path="/forum" component={Forum}/>
                    </Grid>
                </div>
            </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;