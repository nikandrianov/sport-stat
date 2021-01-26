import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import England from './pages/England';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={England} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
