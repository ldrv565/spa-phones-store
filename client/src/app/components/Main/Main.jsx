import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import ArticlesConnector from '../../connectors/ArticlesConnector';
import ArticleConnector from '../../connectors/ArticleConnector';
import CartConnector from '../../connectors/CartConnector';

import './Main.scss';

const Main = ({ authorized }) => (
    <main className="main">
        <Route exact path="/" component={ArticlesConnector} />
        <Route path="/phone/:phoneId" component={ArticleConnector} />
        <PrivateRoute
            authed={authorized}
            path="/cart"
            component={CartConnector}
        />
    </main>
);

function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authed ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default Main;
