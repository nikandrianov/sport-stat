import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ListLeague from './pages/ListLeague';
import ListTeam from './pages/ListTeam';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ListLeague} />
                        <Route exact path="/teams" component={ListTeam} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
