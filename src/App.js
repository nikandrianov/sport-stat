import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ListLeague from './pages/ListLeague';
import ListTeam from './pages/ListTeam';
import CalendarLeague from './pages/CalendarLeague';
import CalendarTeam from './pages/CalendarTeam';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <div className="main">
                        <Switch>
                            <Route exact path="/" component={ListLeague} />
                            <Route exact path="/teams" component={ListTeam} />
                            <Route exact path="/calendarleague" component={CalendarLeague} />
                            <Route exact path="/calendarteam" component={CalendarTeam} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
