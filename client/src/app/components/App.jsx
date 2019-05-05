import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Aside from './Aside/Aside';
import Main from './Main/Main';

import './App.scss';

const App = () => (
    <Router basename="/">
        <section className="app">
            <Aside />
            <Main />
        </section>
    </Router>
);

export default App;
