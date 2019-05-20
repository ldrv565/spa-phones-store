import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Aside from './Aside/Aside';
import Main from './Main/Main';

import './App.scss';

const App = ({ fetching, authorized, getLogged }) => {
    useEffect(() => {
        getLogged();
    }, []);

    return (
        <Router basename="/">
            <section className="app">
                <Aside authorized={authorized} />
                <Main authorized={authorized} fetching={fetching} />
            </section>
        </Router>
    );
};

export default App;
