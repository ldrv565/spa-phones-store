import * as React from 'react';
import { Link } from 'react-router-dom';

import Login from '../Login';

import './Nav.scss';

const Nav = ({ authorized }) => (
    <nav className="nav">
        <ul className="nav__list">
            {!authorized ? (
                <Login />
            ) : (
                <>
                    <li className="nav__item">
                        <Link to="/" className="nav__link">
                            Store
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/cart" className="nav__link">
                            Cart
                        </Link>
                    </li>
                    <li className="nav__item">
                        <a href="/api/logout" className="nav__link">
                            Log out
                        </a>
                    </li>
                </>
            )}
        </ul>
    </nav>
);

export default Nav;
