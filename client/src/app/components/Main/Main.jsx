import * as React from 'react';
import {Route} from 'react-router-dom';

import './Main.scss';

import About from '../../pages/About/About';
import ArticlesConnector from '../../connectors/ArticlesConnector';
import ArticleConnector from '../../connectors/ArticleConnector';

const Main = () => (
    <main className="main">
        <Route exact path="/" component={ArticlesConnector} />
        <Route path="/phone/:phoneId" component={ArticleConnector} />
        <Route path="/about" component={About} />
    </main>
);

export default Main;
