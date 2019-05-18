import * as React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <Link to="/login" className="nav__link">
                    Log in
                </Link>
            </li>
            <li className="nav__item">
                <a href="/api/logout" className="nav__link">
                    Log out
                </a>
            </li>
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
        </ul>
    </nav>
);

export default Nav;
