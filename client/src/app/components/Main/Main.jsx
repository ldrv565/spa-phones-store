import * as React from 'react';
import { Route } from 'react-router-dom';

import { Login } from '../../pages';
import ArticlesConnector from '../../connectors/ArticlesConnector';
import ArticleConnector from '../../connectors/ArticleConnector';
import CartConnector from '../../connectors/CartConnector';

import './Main.scss';

const Main = () => (
    <main className="main">
        <Route exact path="/" component={ArticlesConnector} />
        <Route path="/phone/:phoneId" component={ArticleConnector} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={CartConnector} />
    </main>
);

export default Main;
